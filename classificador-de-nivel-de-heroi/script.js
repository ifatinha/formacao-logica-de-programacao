const letter = "Dark Magician";
const experience = 7500;
let level;

if (experience < 1000) {
    level = "Ferro";
} else if (experience > 1001 && experience <= 2000) {
    level = "Bronze";
} else if (experience > 2001 && experience <= 6000) {
    level = "Prata";
} else if (experience > 6001 && experience <= 7000) {
    level = "Ouro";
} else if (experience > 7001 && experience <= 8000) {
    level = "Platina";
} else if (experience > 8001 && experience <= 9000) {
    level = "Ascendente";
} else if (experience > 9001 && experience <= 10000) {
    level = "Imortal";
} else {
    level = "Radiante";
}

console.log(`A carta ${letter} está no nível ${level}`);