class Person {
    constructor(ten, canNang, cao) {
        this.ten = ten;
        this.canNang = canNang;
        this.cao = cao;
        this.bmi = null;
    }

    calc_bmi() {
        this.bmi = this.canNang / (this.cao ** 2);
        return this.bmi;
    }
}

// Nhập dữ liệu cho Mark
const mark_name = prompt("Nhập FullName Mark: ");
const mark_canNang = parseFloat(prompt("Nhập cân nặng Mark (kg): "));
const mark_cao = parseFloat(prompt("Nhập chiều cao Mark (m): "));

// Nhập dữ liệu cho John
const john_name = prompt("Nhập FullName John: ");
const john_canNang = parseFloat(prompt("Nhập cân nặng John (kg): "));
const john_cao = parseFloat(prompt("Nhập chiều cao John (m): "));

// Tạo đối tượng Mark
const mark = new Person(mark_name, mark_canNang, mark_cao);

// Tạo đối tượng John
const john = new Person(john_name, john_canNang, john_cao);

// Tính BMI cho Mark và John
const mark_bmi = mark.calc_bmi();
const john_bmi = john.calc_bmi();

// So sánh BMI của Mark và John
if (mark_bmi > john_bmi) {
    console.log(`BMI của ${mark_name} (${mark_bmi}) cao hơn BMI của ${john_name} (${john_bmi})!`);
} else {
    console.log(`BMI của ${john_name} (${john_bmi}) cao hơn BMI của ${mark_name} (${mark_bmi})!`);
}