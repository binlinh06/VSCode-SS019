let num = +prompt("Mời bạn nhập số")
if(num % 3 === 0 && num % 5 === 0){
    alert(`${num} chia hết cho cả 3 và 5`)
}else{
    alert(`${num} ko chia hết cho cả 3 và 5`)
}