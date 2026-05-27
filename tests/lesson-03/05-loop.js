let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

for (let i = 2; i <= 9; i++) {
    console.log(`Bang cuu chuong ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`)
    }
}

let arr = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 === 1) {
        arr.push(i);
    }
}
console.log(arr);

for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`)
};

const doanhThu = [
    { month: 1, total: 150 },
    { month: 2, total: 100 },
    { month: 3, total: 200 },
    { month: 4, total: 100 },
    { month: 5, total: 90 },
    { month: 6, total: 300 },
    { month: 7, total: 95 },
    { month: 8, total: 250 },
    { month: 9, total: 120 },
    { month: 10, total: 150 },
    { month: 11, total: 70 },
    { month: 12, total: 200 },
];
let tong = 0;
for (let i = 0; i < doanhThu.length; i++) {
    tong += doanhThu[i].total;
}
console.log(`Tong Doanh Thu: ${tong}`);