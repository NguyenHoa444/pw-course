const chieuCao = 161;
console.log(chieuCao);
let canNangLyTuong = chieuCao % 100 * 9 / 10;
let canNangToiDa = chieuCao % 100;
let canNangToiThieu = chieuCao % 100 * 8 / 10;
console.log(`Cân nặng lý tưởng: ${canNangLyTuong} kg, ` + `Cân nặng tối đa: ${canNangToiDa} kg, ` + `Cân nặng tối thiểu: ${canNangToiThieu} kg`)