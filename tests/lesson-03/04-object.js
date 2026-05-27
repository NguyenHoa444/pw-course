let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
}
console.log(car.year);

let person = {
    name: "Hoa",
    address: {
        street: "Le Quang Dao",
        city: "Ha Noi",
        country: "Viet Nam"
    }
}
console.log(person.address.street);

let student = {
    name: "Mai",
    grades: {
        math: 9,
        english: 10
    }
}
console.log(student["grades"]["math"]);

const settings = {
    volume: 10,
    brightness: 20
}
settings.volume = 15;
console.log(settings);

let bike = {}
bike.color = "Green";
console.log(bike);

let employee = {
    name: "Hoa",
    age: 29
}
delete employee.age;
console.log(employee);

const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}
console.log(school);