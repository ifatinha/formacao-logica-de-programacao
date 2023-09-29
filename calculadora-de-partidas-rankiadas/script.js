function calcularPartidas(numberOfWins, numberOfDefeats) {
    const ranked = (numberOfWins - numberOfDefeats);
    return ranked;
}

const balance = calcularPartidas(255, 85);
let level;

if (balance <= 10) {
    level = "Ferro";
} else if (balance > 11 && balance <= 20) {
    level = "Bronze";
} else if (balance > 21 && balance <= 50) {
    level = "Prata";
} else if (balance > 51 && balance <= 80) {
    level = "Ouro";
} else if (balance > 81 && balance <= 90) {
    level = "Diamante";
} else if (balance > 91 && balance <= 100) {
    level = "Lendário";
} else if (balance >= 101) {
    level = "Imortal";
}

console.log(`O herói de saldo ${balance} está no nível ${level}`);
