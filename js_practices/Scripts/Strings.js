let SHIP_MANUFACTURE = "USG";
let SHIP_ASSIGNED_NAME = "Ishimura";
let SHIP_MISSION = "MISSION: Aegis-7 minerals extraction, Colony contact"

let SHIP_CONCAT = SHIP_MANUFACTURE + " " + SHIP_ASSIGNED_NAME;
SHIP_CONCAT += ", CLASS: Planet Cracker"

SHIP_CONCAT = SHIP_CONCAT.concat(", ", SHIP_MISSION)
console.log(SHIP_CONCAT)