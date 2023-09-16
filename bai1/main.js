var khoiLuong_Mark = parseFloat(prompt("Nhập cân nặng của Mark (kg):"))
var chieuCao_Mark = parseFloat(prompt("Nhập chiều cao của Mark (cm):"))

var khoiLuong_John = parseFloat(prompt("Nhập cân nặng của John (kg):"))
var chieuCao_John = parseFloat(prompt("Nhập chiều cao của john (cm):"))

var BMI_Mark = khoiLuong_Mark / Math.pow(chieuCao_Mark) 
var BMI_John = khoiLuong_John / Math.pow(chieuCao_John)

var markHigherBMI = BMI_Mark > BMI_John

console.log("Mark có chỉ số BMI lớn hơn John: " + markHigherBMI)