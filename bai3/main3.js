var dolphins1 = parseInt(prompt("Nhập điểm đội dolphins lần 1:"))
var dolphins2 = parseInt(prompt("Nhập điểm đội dolphins lần 2:"))
var dolphins3 = parseInt(prompt("Nhập điểm đội dolphins lần 3:"))

var koalas1 = parseInt(prompt("Nhập điểm đội koalas lần 1:"))
var koalas2 = parseInt(prompt("Nhập điểm đội koalas lần 2:"))
var koalas3 = parseInt(prompt("Nhập điểm đội koalas lần 3:"))


var tbDolphins = (dolphins1 + dolphins2 + dolphins3) / 3
var tbKoalas = (koalas1 + koalas2 + koalas3) /3

if( tbDolphins > tbKoalas && tbDolphins >=100){
    console.log("Đội dolphins thắng")
}
else if (tbKoalas > tbKoalas && tbKoalas >=100){
    console.log("Đội koalas thắng")
}
else if(tbKoalas === tbKoalas && tbKoalas >=100){
    console.log("Hòa")
}
else{
    console.log("Không đội nào được cup")
}
