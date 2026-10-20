const CROPS_DATABASE = [
  {
    name: "Lowland Rice",
    type: "cash",
    family: "Poaceae",
    water_need_mm_season: 1100,
    temp_max_c: 35,
    min_root_moisture: 0.50,
    nitrogen_fixing: false,
    benefit: "Staple grain for flooded or heavy rainfall cycles."
  },
  {
    name: "Hybrid Field Corn",
    type: "cash",
    family: "Poaceae",
    water_need_mm_season: 600,
    temp_max_c: 36,
    min_root_moisture: 0.35,
    nitrogen_fixing: false,
    benefit: "High-yield cash crop with moderate water demand."
  },
  {
    name: "Grain Sorghum",
    type: "cash",
    family: "Poaceae",
    water_need_mm_season: 400,
    temp_max_c: 38,
    min_root_moisture: 0.22,
    nitrogen_fixing: false,
    benefit: "High heat and drought tolerance; viable alternative when corn fails."
  },
  {
    name: "Mungbean (Green Gram)",
    type: "restorative",
    family: "Fabaceae",
    water_need_mm_season: 320,
    temp_max_c: 38,
    min_root_moisture: 0.20,
    nitrogen_fixing: true,
    benefit: "Fixes 30–50 kg N/ha; rapid 60-day cycle utilizing residual moisture."
  },
  {
    name: "Cowpea",
    type: "restorative",
    family: "Fabaceae",
    water_need_mm_season: 300,
    temp_max_c: 37,
    min_root_moisture: 0.18,
    nitrogen_fixing: true,
    benefit: "Deep taproot; high drought resilience; replenishes subsoil organic matter."
  },
  {
    name: "Sunn Hemp",
    type: "restorative",
    family: "Fabaceae",
    water_need_mm_season: 250,
    temp_max_c: 39,
    min_root_moisture: 0.15,
    nitrogen_fixing: true,
    benefit: "Suppresses root-knot nematodes and fixes up to 100 kg N/ha."
  }
];
