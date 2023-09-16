var dolphins1 = parseInt(prompt("Nhập điểm đội dolphins lần 1:"))
var dolphins2 = parseInt(prompt("Nhập điểm đội dolphins lần 2:"))
var dolphins3 = parseInt(prompt("Nhập điểm đội dolphins lần 3:"))

var koalas1 = parseInt(prompt("Nhập điểm đội koalas lần 1:"))
var koalas2 = parseInt(prompt("Nhập điểm đội koalas lần 2:"))
var koalas3 = parseInt(prompt("Nhập điểm đội koalas lần 3:"))

function calcAverage(a, b, c) {
    return (a + b + c) / 3
}

var tbDolphins = calcAverage(dolphins1, dolphins2, dolphins3)
var tbKoalas = calcAverage(koalas1, koalas2, koalas3)

function checkWinner(d, k) {
    if (d > k * 2) {
        console.log(`Dolphins thắng ${d} vs ${k}`)
    } else if (k > d * 2) {
        console.log(`Koala thắng ${k} vs ${d}`)
    } else {
        console.log("Không có đội nào thắng")
    }

}
console.log(checkWinner(tbDolphins, tbKoalas));