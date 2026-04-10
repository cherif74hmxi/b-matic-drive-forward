export const vehiculesData: Record<string, string[]> = {
  "BMW": ["Série 1","Série 2","Série 3","Série 4","Série 5","Série 7","Série 8","Z4","X1","X2","X3","X4","X5","X6","X7","XM","i4","i5","i7","iX1","iX2","iX3","iX","M2","M3 Touring","M4 Coupé","M4 Cabrio","M5 Touring","M8 Coupé","M8 Cabrio"],
  "Volkswagen": ["Polo","Golf","T-Cross","Taigo","T-Roc","Tiguan","Tayron","Touareg","Touran","Sharan","ID.3","ID.4","ID.5","ID.7","ID.7 Tourer","ID. Buzz","ID. Buzz Cargo","California","Multivan","Amarok"],
  "Mercedes-Benz": ["CLA","CLA Shooting Brake","Classe A","Classe B","Classe C Berline","Classe C Break","Classe E Berline","Classe E Break","Classe S","CLE Coupé","CLE Cabriolet","GLA","GLB","GLC","GLC Coupé","GLE","GLE Coupé","GLS","G-Class","EQA","EQB","EQE Berline","EQE SUV","EQS Berline","EQS SUV","Mercedes-AMG GT","SL","Classe V"],
  "Audi": ["A1","A3","A5","A6","A6 e-tron","A8","Q2","Q3","Q4 e-tron","Q5","Q6 e-tron","Q7","Q8","e-tron GT"],
  "Dacia": ["Sandero","Sandero Stepway","Spring","Jogger","Duster"],
  "Renault": ["Twingo","Clio","Captur","Symbioz","Arkana","Austral","Rafale","Espace","Scenic E-Tech electric","Megane E-Tech electric","Renault 5 E-Tech electric","Renault 4 E-Tech electric","Kangoo","Trafic Passenger","Master Passenger"],
  "Peugeot": ["208","E-208","2008","E-2008","308","E-308","308 SW","E-308 SW","408","3008","E-3008","5008","E-5008","508","508 SW","Rifter","Traveller"],
  "Toyota": ["Aygo X","Yaris","Yaris Cross","Corolla Hatchback","Corolla Touring Sports","Corolla Cross","Toyota C-HR","Prius Plug-in","bZ4X","Urban Cruiser","RAV4","Land Cruiser","Hilux","Mirai","PROACE CITY VERSO","PROACE VERSO"],
  "Skoda": ["Fabia","Scala","Octavia","Octavia Combi","Superb","Superb Combi","Kamiq","Karoq","Kodiaq","Elroq","Enyaq","Enyaq Coupé"],
  "Volvo": ["EX30","EC40","EX40","XC60","XC90","EX90","V60","V90"],
  "Kia": ["Picanto","Ceed SW","Stonic","XCeed","XCeed PHEV","Niro","Sportage","Sportage HEV","Sportage PHEV","Sorento","Sorento HEV","Sorento PHEV","EV2","EV3","EV4","EV4 Fastback","EV5","EV6","EV6 GT","EV9","EV9 GT","K4","PV5 Passenger"],
  "Hyundai": ["i10","i20","i30 Hatchback","i30 Wagon","BAYON","KONA","KONA Electric","KONA Hybrid","INSTER","IONIQ 5","IONIQ 5 N","IONIQ 6","IONIQ 6 N","IONIQ 9","NEXO","TUCSON","TUCSON Hybrid","TUCSON PHEV","SANTA FE Hybrid","SANTA FE PHEV"],
  "Ford": ["Puma","Puma Gen-E","Kuga","Explorer","Capri","Mustang Mach-E","Mustang","Bronco","Focus","Tourneo Courier","E-Tourneo Courier","Tourneo Connect","Tourneo Custom","Ranger","Ranger Raptor"],
  "Citroën": ["Ami","ë-C3","C3","ë-C3 Aircross","C3 Aircross","ë-C4","C4","C4 X","ë-C4 X","C5 Aircross","ë-C5 Aircross","C5 X","Berlingo","ë-Berlingo","SpaceTourer","ë-SpaceTourer"],
  "Tesla": ["Model 3","Model Y","Model S","Model X"],
  "Opel": ["Corsa","Astra","Astra Sports Tourer","Mokka","Frontera","Grandland","Combo Electric","Zafira Electric"],
  "MINI": ["Cooper 3 portes","Cooper 5 portes","Cooper Cabrio","Cooper Electric","Aceman Electric","Countryman","Countryman Electric","John Cooper Works","John Cooper Works Aceman Electric"],
  "Nissan": ["Micra","Leaf","Juke","Qashqai","Ariya","X-Trail"],
  "MG": ["MG3","MG3 Hybrid+","MG4 EV","MG4 EV Urban","MGS5 EV","MGS6 EV","MG Cyberster","MG HS","MG HS PHEV","MG HS Hybrid+","MG ZS","MG ZS Hybrid+","MG IM5","MG IM6","MGS9 Plug-in Hybrid"],
  "Land Rover": ["Range Rover","Range Rover Sport","Range Rover Velar","Range Rover Evoque","Defender 90","Defender 110","Defender 130","Defender OCTA","Discovery","Discovery Sport"],
};

export const marques = [...Object.keys(vehiculesData).sort(), "Autre"];
