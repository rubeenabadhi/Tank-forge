/**
 * GALLERY DATA (വർക്ക് ഫോട്ടോകൾ & സാമ്പിളുകൾ)
 * 
 * നിങ്ങള്‍ക്ക് നിങ്ങളുടെ ഭർത്താവിന്റെ യഥാർത്ഥ വർക്ക് ഫോട്ടോകൾ ചേർക്കാൻ:
 * 1. ഫോട്ടോകൾ public/images/projects/ ഫോൾഡറിലേക്ക് കോപ്പി ചെയ്യുക (ഉദാ: tank-work-1.jpg)
 * 2. താഴെ നൽകിയിരിക്കുന്ന ലിസ്റ്റിൽ image: "/images/projects/tank-work-1.jpg" എന്ന് മാറ്റുക.
 */

export const GALLERY_CATEGORIES = [
  "All (എല്ലാം)",
  "500L - 1000L ടാങ്കുകൾ",
  "സിന്റക്സ് / പ്ലാസ്റ്റിക്",
  "സ്റ്റെയിൻലെസ്സ് സ്റ്റീൽ",
  "പൈപ്പ് & നോസിൽ"
];

export const GALLERY_PROJECTS = [
  {
    id: "proj-1",
    title: "500L വാട്ടർ ടാങ്ക് പൊട്ടിയത് വെൽഡ് ചെയ്തത്",
    category: "500L - 1000L ടാങ്കുകൾ",
    capacity: "500 Litres",
    material: "HDPE / Plastic",
    description: "വീടിന്റെ ടെറസ്സിൽ വെയിലേറ്റു വലിയ വിള്ളൽ വീണ 500 ലിറ്റർ ടാങ്ക് നേരിട്ടെത്തി ഹീറ്റ് വെൽഡിംഗ് വഴി പൂർണ്ണമായി ഒപ്പിച്ചു.",
    image: null,
    isPlaceholder: true,
    placeholderType: "vertical-tank",
    features: ["വിള്ളൽ മാറ്റി", "100% ലീക്ക് പ്രൂഫ്", "തത്സമയ പരിശോധന"]
  },
  {
    id: "proj-2",
    title: "1000L സിന്റക്സ് ടാങ്ക് അടിവശത്തെ ലീക്ക് അടച്ചത്",
    category: "സിന്റക്സ് / പ്ലാസ്റ്റിക്",
    capacity: "1,000 Litres",
    material: "Sintex / Polymer",
    description: "അടിഭാഗം തട്ടി പൊട്ടി വെള്ളം ചോർന്നു പോയിരുന്ന സിന്റക്സ് ടാങ്ക് കട്ടികൂടിയ പോളിമർ ഫില്ലർ നൽകി ഉറപ്പിച്ചു.",
    image: null,
    isPlaceholder: true,
    placeholderType: "horizontal-tank",
    features: ["ശക്തമായ സീലിംഗ്", "കുറഞ്ഞ ചെലവ്", "സ്ഥലത്ത് നേരിട്ടെത്തി"]
  },
  {
    id: "proj-3",
    title: "2000L ഓവർഹെഡ് ടാങ്ക് ക്രാക്ക് റിപ്പയറിംഗ്",
    category: "500L - 1000L ടാങ്കുകൾ",
    capacity: "2,000 Litres",
    material: "Heavy Duty Plastic",
    description: "പ്രഷർ കാരണം വശങ്ങളിൽ ഉണ്ടായ നെടുകെയുള്ള പൊട്ടൽ ഇരട്ട കോട്ടിംഗ് വെൽഡ് നൽകി പൂർണ്ണമായി അടച്ചു.",
    image: null,
    isPlaceholder: true,
    placeholderType: "weld-seam",
    features: ["ഡബിൾ പാസ്സ് വെൽഡ്", "ഭാരം താങ്ങുന്ന ബലം", "വാട്ടർപ്രൂഫ്"]
  },
  {
    id: "proj-4",
    title: "സ്റ്റെയിൻലെസ്സ് സ്റ്റീൽ ടാങ്ക് സീം വെൽഡിംഗ്",
    category: "സ്റ്റെയിൻലെസ്സ് സ്റ്റീൽ",
    capacity: "Custom SS Tank",
    material: "SS304 Food Grade",
    description: "സ്റ്റെയിൻലെസ്സ് സ്റ്റീൽ വാട്ടർ ടാങ്കിന്റെ ജോയിന്റ് ഭാഗത്തുണ്ടായ വെള്ളം കിനിയൽ ആർഗൺ TIG വെൽഡിംഗ് വഴി മാറ്റി.",
    image: null,
    isPlaceholder: true,
    placeholderType: "repair-patch",
    features: ["ആർഗൺ TIG വെൽഡ്", "തുരുമ്പ് വരാത്ത ഫിനിഷ്", "ഹൈ-ക്വാളിറ്റി"]
  },
  {
    id: "proj-5",
    title: "ടാങ്ക് ഔട്ട്‌ലെറ്റ് നോസിൽ & പൈപ്പ് കണക്ഷൻ ലീക്ക് ഫിക്സിംഗ്",
    category: "പൈപ്പ് & നോസിൽ",
    capacity: "All Sizes",
    material: "Heavy Plate & Brass Fitting",
    description: "പൈപ്പ് തിരിഞ്ഞ് ടാങ്കിന്റെ ത്രെഡ് പൊട്ടിയ ഭാഗം റീ-ഫിറ്റ് ചെയ്തു പുതിയ കോളർ വെൽഡ് ചെയ്തു നൽകി.",
    image: null,
    isPlaceholder: true,
    placeholderType: "rectangular-tank",
    features: ["നോസിൽ റീ-ഫിറ്റിംഗ്", "സീലിംഗ് വാഷർ", "തുരുമ്പ് രഹിതം"]
  },
  {
    id: "proj-6",
    title: "ടാങ്ക് സപ്പോർട്ട് സ്റ്റാൻഡും ഫാബ്രിക്കേഷനും",
    category: "സിന്റക്സ് / പ്ലാസ്റ്റിക്",
    capacity: "500L - 2000L Stand",
    material: "Mild Steel Structural Frame",
    description: "ടാങ്ക് തറയിൽ ഇരിക്കാതെ ടെറസ്സിൽ സുരക്ഷിതമായി വെക്കാനുള്ള ഹെവി മെറ്റൽ സ്റ്റാൻഡ് വെൽഡ് ചെയ്തു നൽകി.",
    image: null,
    isPlaceholder: true,
    placeholderType: "structure-frame",
    features: ["ഹെവി സ്റ്റീൽ ഫ്രെയിം", "പ്രൈമർ കോട്ടിംഗ്", "സുരക്ഷിത താങ്ങ്"]
  }
];
