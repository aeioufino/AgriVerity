/**
 * AgriVerity Agronomic Crop Rules Database
 * Derived from UN FAO Irrigation & Drainage Paper No. 56 & USDA Cover Crop Guidelines
 */
const CROPS_DATABASE = [
  {
    id: "rice_lowland",
    name: "Lowland Rice (Oryza sativa)",
    type: "cash",
    family: "Poaceae",
    water_need_mm_season: 1150,
    monthly_water_threshold_mm: 190,
    temp_max_c: 35.0,
    min_root_moisture: 0.52,
    nitrogen_fixed_kg_ha: 0,
    sowing_window: "June – July (Monsoon Onset)",
    benefit: "High caloric staple ideal for saturated alluvial basins.",
    vulnerability: "High evapotranspiration demand; severe panicle sterility above 35°C or below 50% root-zone wetness."
  },
  {
    id: "corn_hybrid",
    name: "Hybrid Yellow Corn (Zea mays)",
    type: "cash",
    family: "Poaceae",
    water_need_mm_season: 620,
    monthly_water_threshold_mm: 110,
    temp_max_c: 36.5,
    min_root_moisture: 0.36,
    nitrogen_fixed_kg_ha: 0,
    sowing_window: "May or October (Transitional)",
    benefit: "High biomass and strong commercial feed demand.",
    vulnerability: "Heavy nitrogen feeder; susceptible to silk-stage desiccation during acute subsoil moisture drops."
  },
  {
    id: "tomato_Determinate",
    name: "Field Tomato (Solanum lycopersicum)",
    type: "cash",
    family: "Solanaceae",
    water_need_mm_season: 500,
    monthly_water_threshold_mm: 95,
    temp_max_c: 33.5,
    min_root_moisture: 0.38,
    nitrogen_fixed_kg_ha: 0,
    sowing_window: "November – January (Cool Dry)",
    benefit: "High-margin horticultural cash crop with rapid market turnover.",
    vulnerability: "Blossom drop above 34°C; prone to bacterial wilt if planted successively without family rotation."
  },
  {
    id: "sorghum_grain",
    name: "Drought-Tolerant Sorghum (Sorghum bicolor)",
    type: "cash",
    family: "Poaceae",
    water_need_mm_season: 400,
    monthly_water_threshold_mm: 70,
    temp_max_c: 39.0,
    min_root_moisture: 0.22,
    nitrogen_fixed_kg_ha: 0,
    sowing_window: "October – February (Dry Season)",
    benefit: "Waxy leaf cuticle and dense fibrous root system survive prolonged dry spells where corn fails.",
    vulnerability: "Depletes surface potassium if not paired with a legume cover phase."
  },
  {
    id: "cassava_sweet",
    name: "Upland Cassava (Manihot esculenta)",
    type: "cash",
    family: "Euphorbiaceae",
    water_need_mm_season: 450,
    monthly_water_threshold_mm: 65,
    temp_max_c: 38.5,
    min_root_moisture: 0.20,
    nitrogen_fixed_kg_ha: 0,
    sowing_window: "March – May (Early Rain)",
    benefit: "Stomatal closure mechanism conserves water during extreme heat events.",
    vulnerability: "Sensitive to waterlogging when GWETROOT exceeds 0.80."
  },
  {
    id: "mungbean_pagasa",
    name: "Mungbean / Green Gram (Vigna radiata)",
    type: "restorative",
    family: "Fabaceae",
    water_need_mm_season: 310,
    monthly_water_threshold_mm: 55,
    temp_max_c: 38.0,
    min_root_moisture: 0.20,
    nitrogen_fixed_kg_ha: 45,
    sowing_window: "November – February (Post-Rice Relay)",
    benefit: "Rapid 60-day maturity; thrives strictly on residual subsoil moisture while fixing atmospheric N.",
    vulnerability: "Pod shattering if heavy unseasonal rain occurs at harvest."
  },
  {
    id: "cowpea_deep",
    name: "Black-Eyed Cowpea (Vigna unguiculata)",
    type: "restorative",
    family: "Fabaceae",
    water_need_mm_season: 290,
    monthly_water_threshold_mm: 50,
    temp_max_c: 39.0,
    min_root_moisture: 0.17,
    nitrogen_fixed_kg_ha: 60,
    sowing_window: "December – March (Peak Arid Window)",
    benefit: "Deep taproot accesses moisture below 1.2m; breaks cereal pest cycles and rebuilds soil organic carbon.",
    vulnerability: "Moderate yield ceiling compared to intensive commercial grains."
  },
  {
    id: "sunn_hemp",
    name: "Sunn Hemp Cover (Crotalaria juncea)",
    type: "restorative",
    family: "Fabaceae",
    water_need_mm_season: 250,
    monthly_water_threshold_mm: 45,
    temp_max_c: 40.0,
    min_root_moisture: 0.15,
    nitrogen_fixed_kg_ha: 85,
    sowing_window: "Any Fallow Window (45–60 Days)",
    benefit: "Bio-fumigant properties suppress root-knot nematodes while adding massive green manure biomass.",
    vulnerability: "Primarily a soil-rebuilding forage/mulch crop rather than a direct human food grain."
  }
];

const REGIONAL_PRESETS = {
  central_luzon: {
    label: "Central Luzon, PH (Rice Bowl)",
    lat: 15.48,
    lon: 120.71,
    habitualCropId: "rice_lowland",
    fallback: {
      rainData: [14.2, 8.5, 22.1, 55.4, 195.0, 280.2, 340.5, 390.1, 310.2, 140.6, 48.2, 20.4],
      tempData: [29.8, 30.5, 32.4, 34.8, 35.4, 33.5, 31.8, 31.2, 31.5, 32.0, 31.1, 29.9],
      rootMoistureData: [0.32, 0.25, 0.19, 0.16, 0.35, 0.55, 0.68, 0.72, 0.65, 0.48, 0.38, 0.34]
    }
  },
  bukidnon: {
    label: "Bukidnon Highlands, PH (Corn Belt)",
    lat: 8.15,
    lon: 125.13,
    habitualCropId: "corn_hybrid",
    fallback: {
      rainData: [110.4, 95.2, 105.0, 130.5, 240.2, 290.1, 285.4, 270.0, 260.5, 230.1, 165.4, 130.2],
      tempData: [27.5, 28.0, 29.1, 30.2, 30.0, 28.9, 28.4, 28.5, 28.7, 28.9, 28.3, 27.8],
      rootMoistureData: [0.45, 0.42, 0.40, 0.44, 0.58, 0.66, 0.68, 0.65, 0.64, 0.60, 0.52, 0.48]
    }
  },
  ilocos_arid: {
    label: "Ilocos Norte, PH (Dry Coastal)",
    lat: 18.19,
    lon: 
    
