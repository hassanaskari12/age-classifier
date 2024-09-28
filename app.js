let age = Number(prompt("Enter your age"));
if(age<=12 && age>0){
    alert("you are classified as a child")
}else if(age<=19 && age>=13){
    alert("you are classified as a teenager")
}else if(age<=64 && age>=20){
    alert("you are classified as an Adult")
}else if(age>=65){
    alert("you are classified as a Senior")
}