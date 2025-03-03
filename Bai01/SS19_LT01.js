let month = +prompt("Mời bạn nhập tháng: ")
if(month <=0 || month>12){
    alert("Tháng ko hợp lệ!")
}
switch(month){
    case 1:
        alert("tháng 1 có 31 ngày")
        break
    case 3:
        alert("tháng 3 có 31 ngày")
        break
    case 5:
        alert("tháng 5 có 31 ngày")
        break
    case 7:
        alert("tháng 7 có 31 ngày")
        break
    case 8:
        alert("tháng 8 có 31 ngày")
        break
    case 10:
        alert("tháng 10 có 31 ngày")
        break
    case 12:
        alert("tháng 12 có 31 ngày")
        break
    case 4:
        alert(" tháng 4 có 30 ngày")
        break
    case 6:
        alert(" tháng 6 có 30 ngày")
        break
    case 9:
        alert(" tháng 9 có 30 ngày")
        break
    case 11:
        alert(" tháng 11 có 30 ngày")
        break
    case 2:
        alert("tháng 2 có 28 hoặc 29 ngày")
        break
}