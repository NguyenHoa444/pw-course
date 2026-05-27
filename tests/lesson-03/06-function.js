function multiply(a, b) {
    console.log(a * b)
};
multiply(2, 6);
multiply(5, 4);

function findMin(a, b, c) {
    return Math.min(a, b, c)
};
console.log(findMin(2, 3, 4));
console.log(findMin(7, 5, 9));

function getTopStudents (students, threshold){
    let names = [];
    for (i = 0; i < students.length; i++){
        if (students[i].core >= threshold){
            names.push (students[i].name)
        }
    };
    return names
};
const students = [
    {name: "Hoa", core: 8.0},
    {name: "Mai", core: 7.0},
    {name: "Hien", core: 8.5},
    {name: "Ha", core: 10.0},
];
console.log (getTopStudents (students, 8));

function calculateInterest(principal, rate, years) {
    return total = principal + principal * rate * years / 100
};
calculateInterest(100000000, 6, 5);
console.log (total);
