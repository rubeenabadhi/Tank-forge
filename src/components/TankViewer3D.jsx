import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * 3D CRACK REPAIR & WELDING ANIMATION (വാട്ടർ ടാങ്ക് ഒട്ടിക്കുന്ന ആനിമേഷൻ)
 * 
 * Shows:
 * 1. A 500L+ water tank with a realistic crack leaking water droplets.
 * 2. An electric welding arc & torch moving down the crack with glowing sparks.
 * 3. The crack sealing completely into a durable welded seam with zero leaks!
 */
export default function TankViewer3D() {
  const mountRef = useRef(null);
  const [repairState, setRepairState] = useState('leaking'); // 'leaking', 'welding', 'repaired'
  const stateRef = useRef('leaking');
  const animProgressRef = useRef(0);
  const triggerRepairRef = useRef(null);

  useEffect(() => {
    stateRef.current = repairState;
  }, [repairState]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      36,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0.2, 5.0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    const tankGroup = new THREE.Group();
    scene.add(tankGroup);

    // 1. Tank Body (Vertical 500L-1000L Water Tank)
    const tankMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e293b, // Dark industrial slate/blue plastic/steel
      metalness: 0.4,
      roughness: 0.35,
    });

    const cylinderGeo = new THREE.CylinderGeometry(0.85, 0.85, 2.0, 40);
    const cylinderMesh = new THREE.Mesh(cylinderGeo, tankMaterial);
    tankGroup.add(cylinderMesh);

    // Domed Top & Bottom
    const domeGeo = new THREE.SphereGeometry(0.85, 36, 16, 0, Math.PI * 2, 0, Math.PI * 0.5);
    domeGeo.scale(1, 0.32, 1);
    const topDome = new THREE.Mesh(domeGeo, tankMaterial);
    topDome.position.y = 1.0;
    tankGroup.add(topDome);

    const bottomDomeGeo = new THREE.SphereGeometry(0.85, 36, 16, 0, Math.PI * 2, Math.PI * 0.5, Math.PI * 0.5);
    bottomDomeGeo.scale(1, 0.32, 1);
    const bottomDome = new THREE.Mesh(bottomDomeGeo, tankMaterial);
    bottomDome.position.y = -1.0;
    tankGroup.add(bottomDome);

    // Reinforcing Rib Bands (500L Tank characteristic)
    [-0.5, 0, 0.5].forEach((yPos) => {
      const ringGeo = new THREE.TorusGeometry(0.86, 0.02, 8, 36);
      ringGeo.rotateX(Math.PI / 2);
      const ring = new THREE.Mesh(ringGeo, new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.5 }));
      ring.position.y = yPos;
      tankGroup.add(ring);
    });

    // Top Manhole Lid
    const lidGeo = new THREE.CylinderGeometry(0.3, 0.32, 0.1, 24);
    const lid = new THREE.Mesh(lidGeo, new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.3 }));
    lid.position.y = 1.32;
    tankGroup.add(lid);

    // Bottom Outlet Nozzle
    const outletGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.25, 16);
    outletGeo.rotateZ(Math.PI / 2);
    const outlet = new THREE.Mesh(outletGeo, new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.8 }));
    outlet.position.set(0.9, -0.8, 0);
    tankGroup.add(outlet);

    // 2. THE CRACK LINE (Jagged Cut in the Tank Face)
    const crackPoints = [
      new THREE.Vector3(0.02, 0.45, 0.865),
      new THREE.Vector3(-0.06, 0.25, 0.868),
      new THREE.Vector3(0.04, 0.05, 0.87),
      new THREE.Vector3(-0.03, -0.15, 0.868),
      new THREE.Vector3(0.02, -0.38, 0.865),
    ];
    const crackCurve = new THREE.CatmullRomCurve3(crackPoints);

    // Unrepaired Crack Tube (Dark jagged fissure)
    const crackGeo = new THREE.TubeGeometry(crackCurve, 32, 0.022, 8, false);
    const crackMaterial = new THREE.MeshBasicMaterial({ color: 0x090c10 });
    const crackMesh = new THREE.Mesh(crackGeo, crackMaterial);
    tankGroup.add(crackMesh);

    // 3. THE WELDED SEAM (Appears during repair & covers the crack)
    const weldGeo = new THREE.TubeGeometry(crackCurve, 32, 0.032, 10, false);
    const weldMaterial = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.3,
      metalness: 0.8,
      roughness: 0.2,
      transparent: true,
      opacity: 0,
    });
    const weldMesh = new THREE.Mesh(weldGeo, weldMaterial);
    tankGroup.add(weldMesh);

    // 4. WELDING TORCH & SPARK HEAD
    const torchGroup = new THREE.Group();
    torchGroup.visible = false;
    tankGroup.add(torchGroup);

    // Torch Nozzle
    const torchNozzle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.04, 0.2, 12),
      new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.9 })
    );
    torchNozzle.rotation.x = Math.PI / 3;
    torchNozzle.position.set(0, 0.08, 0.12);
    torchGroup.add(torchNozzle);

    // Intense Arc Spark Light
    const arcLight = new THREE.PointLight(0x38bdf8, 0, 3);
    torchGroup.add(arcLight);

    // Spark Glow Sphere
    const sparkSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.06, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    torchGroup.add(sparkSphere);

    // Flying Sparks Particle System
    const sparkCount = 40;
    const sparkGeo = new THREE.BufferGeometry();
    const sparkPositions = new Float32Array(sparkCount * 3);
    const sparkVelocities = [];

    for (let i = 0; i < sparkCount; i++) {
      sparkPositions[i * 3] = 0;
      sparkPositions[i * 3 + 1] = 0;
      sparkPositions[i * 3 + 2] = 0;
      sparkVelocities.push({
        vx: (Math.random() - 0.5) * 0.06,
        vy: (Math.random() - 0.2) * 0.06,
        vz: Math.random() * 0.05 + 0.02,
        life: Math.random()
      });
    }
    sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));
    const sparkParticlesMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.04,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    const sparkParticles = new THREE.Points(sparkGeo, sparkParticlesMat);
    torchGroup.add(sparkParticles);

    // 5. WATER LEAK PARTICLES (Dripping while leaking)
    const dropCount = 20;
    const dropGeo = new THREE.BufferGeometry();
    const dropPositions = new Float32Array(dropCount * 3);
    const dropSpeeds = [];

    for (let i = 0; i < dropCount; i++) {
      dropPositions[i * 3] = (Math.random() - 0.5) * 0.06;
      dropPositions[i * 3 + 1] = 0.1 - Math.random() * 0.8;
      dropPositions[i * 3 + 2] = 0.88;
      dropSpeeds.push(0.015 + Math.random() * 0.02);
    }
    dropGeo.setAttribute('position', new THREE.BufferAttribute(dropPositions, 3));
    const dropMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.05,
      transparent: true,
      opacity: 0.85
    });
    const dropParticles = new THREE.Points(dropGeo, dropMat);
    tankGroup.add(dropParticles);

    // 6. Ground Shadow
    const shadowGeo = new THREE.PlaneGeometry(2.8, 2.8);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.4
    });
    const shadow = new THREE.Mesh(shadowGeo, shadowMat);
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = -1.35;
    scene.add(shadow);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight.position.set(3, 4, 4);
    scene.add(dirLight);

    const blueRimLight = new THREE.DirectionalLight(0x0284c7, 1.5);
    blueRimLight.position.set(-3, -1, -2);
    scene.add(blueRimLight);

    // Drag / Touch Controls
    let isDragging = false;
    let previousX = 0;
    let targetRotY = 0.15;
    let currentRotY = 0.15;

    const onPointerDown = (e) => {
      isDragging = true;
      previousX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    };
    const onPointerMove = (e) => {
      if (!isDragging) return;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const delta = clientX - previousX;
      targetRotY += delta * 0.008;
      previousX = clientX;
    };
    const onPointerUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onPointerDown);
    container.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('touchend', onPointerUp);

    // Automated Repair Sequence Cycle
    let cycleTimer = 0;
    const startWelding = () => {
      setRepairState('welding');
      animProgressRef.current = 0;
    };

    triggerRepairRef.current = () => {
      setRepairState('welding');
      animProgressRef.current = 0;
    };

    // Render & Animation Loop
    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Smooth rotate towards target
      if (!isDragging) {
        targetRotY += 0.0015; // slow subtle drift
      }
      currentRotY += (targetRotY - currentRotY) * 0.08;
      tankGroup.rotation.y = currentRotY;

      // State Machine Logic
      const currentState = stateRef.current;

      if (currentState === 'leaking') {
        torchGroup.visible = false;
        dropParticles.visible = true;
        weldMesh.material.opacity = 0;
        crackMesh.visible = true;

        // Animate water drops dripping down
        const positions = dropGeo.attributes.position.array;
        for (let i = 0; i < dropCount; i++) {
          positions[i * 3 + 1] -= dropSpeeds[i];
          if (positions[i * 3 + 1] < -1.2) {
            positions[i * 3 + 1] = 0.35 - Math.random() * 0.4;
          }
        }
        dropGeo.attributes.position.needsUpdate = true;

        // Auto trigger welding after 4 seconds
        cycleTimer += 0.016;
        if (cycleTimer > 3.8) {
          cycleTimer = 0;
          startWelding();
        }
      } else if (currentState === 'welding') {
        torchGroup.visible = true;
        dropParticles.visible = false;

        animProgressRef.current += 0.009; // Welding progress (0 to 1)
        const t = Math.min(1, animProgressRef.current);

        // Move torch along crack curve
        const torchPos = crackCurve.getPoint(t);
        torchGroup.position.copy(torchPos);

        // Flicker arc spark light
        arcLight.intensity = 5 + Math.random() * 6;
        sparkSphere.scale.setScalar(0.8 + Math.random() * 0.6);

        // Flying sparks simulation
        const sparkPos = sparkGeo.attributes.position.array;
        for (let i = 0; i < sparkCount; i++) {
          const v = sparkVelocities[i];
          sparkPos[i * 3] += v.vx;
          sparkPos[i * 3 + 1] += v.vy;
          sparkPos[i * 3 + 2] += v.vz;
          v.life -= 0.04;
          if (v.life <= 0) {
            sparkPos[i * 3] = 0;
            sparkPos[i * 3 + 1] = 0;
            sparkPos[i * 3 + 2] = 0;
            v.life = 1;
          }
        }
        sparkGeo.attributes.position.needsUpdate = true;

        // Weld opacity & appearance grows
        weldMesh.material.opacity = t;
        weldMesh.material.color.setHex(0x38bdf8);

        if (t >= 1) {
          setRepairState('repaired');
          cycleTimer = 0;
        }
      } else if (currentState === 'repaired') {
        torchGroup.visible = false;
        dropParticles.visible = false;
        crackMesh.visible = false;
        weldMesh.material.opacity = 1;
        weldMesh.material.color.setHex(0x22c55e); // Success green/silver solid weld seal

        cycleTimer += 0.016;
        if (cycleTimer > 6.0) {
          // Reset cycle back to demonstrate again
          cycleTimer = 0;
          setRepairState('leaking');
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', onPointerDown);
      container.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchend', onPointerUp);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '420px' }}>
      {/* 3D Canvas */}
      <div
        ref={mountRef}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '420px',
          cursor: 'grab',
          touchAction: 'none'
        }}
        title="ടാങ്ക് കറക്കി നോക്കാൻ ഡ്രാഗ് ചെയ്യാം"
      />

      {/* Dynamic Status Badge (Leaking / Welding / Repaired) */}
      <div
        style={{
          position: 'absolute',
          top: '14px',
          left: '14px',
          background: repairState === 'leaking'
            ? 'rgba(239, 68, 68, 0.2)'
            : repairState === 'welding'
            ? 'rgba(56, 189, 248, 0.25)'
            : 'rgba(34, 197, 94, 0.2)',
          border: `1px solid ${
            repairState === 'leaking'
              ? '#ef4444'
              : repairState === 'welding'
              ? '#38bdf8'
              : '#22c55e'
          }`,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '10px',
          padding: '8px 14px',
          zIndex: 5,
          boxShadow: '0 6px 20px rgba(0,0,0,0.4)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: repairState === 'leaking' ? '#ef4444' : repairState === 'welding' ? '#38bdf8' : '#22c55e',
              boxShadow: `0 0 10px ${repairState === 'leaking' ? '#ef4444' : repairState === 'welding' ? '#38bdf8' : '#22c55e'}`
            }}
          />
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#FFFFFF' }}>
            {repairState === 'leaking' && '⚠️ ടാങ്ക് പൊട്ടി വെള്ളം ലീക്കാവുന്നു'}
            {repairState === 'welding' && '⚡ വെൽഡിംഗ് നടക്കുന്നു... വിള്ളൽ ഒട്ടിക്കുന്നു'}
            {repairState === 'repaired' && '✅ ലീക്ക് പൂർണ്ണമായി അടച്ചു! 100% വാട്ടർപ്രൂഫ്'}
          </span>
        </div>
        <p style={{ fontSize: '0.72rem', color: '#CBD5E1', marginTop: '3px' }}>
          {repairState === 'leaking' && '500L മുതൽ ഏത് ടാങ്കും ഇങ്ങനെ പെർഫെക്റ്റായി വെൽഡ് ചെയ്യാം'}
          {repairState === 'welding' && 'ശക്തമായ ഹീറ്റ് & സീലിംഗ് പ്രോസസ്സ്'}
          {repairState === 'repaired' && 'വെള്ളം നിറച്ച് പരിശോധിച്ചു ഉറപ്പുവരുത്തുന്നു'}
        </p>
      </div>

      {/* Manual Action Buttons (See Action / Replay) */}
      <div
        style={{
          position: 'absolute',
          bottom: '14px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
          background: 'rgba(11, 14, 20, 0.88)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          padding: '6px 12px',
          borderRadius: '9999px',
          border: '1px solid rgba(148, 163, 184, 0.25)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
          zIndex: 5,
          whiteSpace: 'nowrap'
        }}
      >
        <button
          type="button"
          onClick={() => {
            setRepairState('leaking');
          }}
          style={{
            fontSize: '0.78rem',
            padding: '4px 10px',
            borderRadius: '9999px',
            background: repairState === 'leaking' ? 'rgba(239, 68, 68, 0.25)' : 'transparent',
            color: repairState === 'leaking' ? '#f87171' : '#94A3B8',
            border: 'none',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          1. പൊട്ടിയത് കാണുക
        </button>

        <button
          type="button"
          onClick={() => {
            if (triggerRepairRef.current) triggerRepairRef.current();
          }}
          style={{
            fontSize: '0.78rem',
            padding: '4px 12px',
            borderRadius: '9999px',
            background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
            color: '#FFFFFF',
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 2px 10px rgba(2, 132, 199, 0.4)'
          }}
        >
          ⚡ വെൽഡ് ചെയ്ത് ഒട്ടിക്കുക
        </button>
      </div>
    </div>
  );
}
