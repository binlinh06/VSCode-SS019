
let tax = prompt("Mời bạn nhập một ký tự")

if (tax.length === 1 && ('a' <= tax && tax <= 'z' || 'A' <= tax && tax <= 'Z')) {
    alert(`Ký tự ${tax} là  chữ cái`)
} else {
    alert("Không phải chữ cái")
}
