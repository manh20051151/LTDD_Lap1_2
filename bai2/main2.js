var khoiLuong_Mark = parseFloat(prompt("Nhập cân nặng của Mark (kg):"))
var chieuCao_Mark = parseFloat(prompt("Nhập chiều cao của Mark (cm):"))

var khoiLuong_John = parseFloat(prompt("Nhập cân nặng của John (kg):"))
var chieuCao_John = parseFloat(prompt("Nhập chiều cao của john (cm):"))

var BMI_Mark = khoiLuong_Mark / Math.pow(chieuCao_Mark, 2) 
var BMI_John = khoiLuong_John / Math.pow(chieuCao_John, 2)

var markHigherBMI = BMI_Mark > BMI_John

console.log("Câu 1:")
if(markHigherBMI){
    console.log("Chỉ số BMI của Mark cao hơn John!")
}
else{
    console.log("Chỉ số BMI của John cao hơn Mark!")
}
console.log("Câu 2:")
if(markHigherBMI){
    console.log("Mark BMI (" + parseFloat(BMI_Mark)  + ") cao hơn John ("+ parseFloat(BMI_John)+")")
}
else{
    console.log("Mark BMI (" + BMI_Mark  + ") thấp hơn John ("+ BMI_John+")")
}