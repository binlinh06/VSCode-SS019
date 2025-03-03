let tax = prompt("Mời bạn nhập một chuỗi")

if (tax.length === 0) {
    alert("ERROR: Chuỗi rỗng")
} else if (tax.includes(' ')) {
    alert("Chuỗi chứa dấu cách")
} else {
    alert("Chuỗi không chứa dấu cách")
}