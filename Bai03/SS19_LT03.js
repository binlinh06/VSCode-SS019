let cash = +prompt("Vui lòng nhập số tiền")
if(cash <= 0 || isNaN(cash) ){
    alert("ERROR")
}
let type = +prompt(`Nhập 1 để đổi VND->USD 
Nhập 2 để đổi USD->VND`)
switch(type){
    case 1:
        let num= cash/2300
        alert(`${num} USD`)
        break
    case 2:
        let num2= cash*2300
        alert(`${num2} VND`  )
        break
}