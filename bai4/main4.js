var hoaDon = parseFloat(prompt("Nhập giá trị hóa đơn: "))

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