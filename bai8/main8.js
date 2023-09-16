var n = prompt("Nhập số hóa đơn: ");

var arr = [];
var tips = [];
var totals = [];
for (var i = 0; i < n; i++) {
    var item = parseFloat(prompt("Nhập hóa đơn thứ " + (i + 1) + ": "))
    arr.push(item);
}

function calcTip(hoaDon) {
    var boa

    if (hoaDon >= 50 && hoaDon <= 300) {
        boa = hoaDon * 0.15
    } else if (hoaDon < 50) {
        boa = 0
    } else {
        boa = hoaDon * 0.2
    }
    //var tong = hoaDon + boa
    ///console.log("Hóa đơn là " + hoaDon + ", tiền boa là " + boa + " và tổng tổng giá trị là " + tong)
    return boa
}

for (var i = 0; i < n; i++) {
    var tip = calcTip(arr[i])
    var total = arr[i] + tip
    tips.push(tip);
    totals.push(total)
}

function calcAverage(a) {
    const tong = 0
    for (var i = 0; i < n; i++) {
        tong = tong + a
    }
}