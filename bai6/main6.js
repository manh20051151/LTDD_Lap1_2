var n = prompt("Nhập số hóa đơn: ");

var arr = [];

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
    var tong = hoaDon + boa
    console.log("Hóa đơn là " + hoaDon + ", tiền boa là " + boa + " và tổng tổng giá trị là " + tong)
}

for (var i = 0; i < n; i++) {
    var z = "Hóa đơn thứ " + (i + 1) + ": ";


    calcTip(arr[i])
}