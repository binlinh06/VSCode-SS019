let a = +prompt("Mời bạn nhập a: ")
let b = +prompt("Mời bạn nhập b: ")
let c = +prompt("Mời bạn nhập c: ")
let delta = b * b - (4 * a * c)
if(delta < 0){
    alert("Phương trình vô nghiệm")
}else if(delta == 0){
    let x = -b/2*a
    alert("Phương trình có nghiệm kép x1=x2=" + x)
}else{
    let x1 = (-b + Math.sqrt(delta)) / (2 * a)
    let x2 = (-b - Math.sqrt(delta)) / (2 * a)
    alert("Phương trình có hai nghiệm phân biệt: x1 = " + x1 + ", x2 = " + x2)
}
