
//ASSIGNMENT
let musicians = 20;

if(musicians <= 0 ){
    message = "not a group"
}else if(musicians === 1){
    message ="solo";
}else if(musicians === 2){
    message ="duet";
}
else if(musicians === 3){
    message ="trio";
}
else if(musicians === 4){
    message ="quartet";
}else if(musicians > 4){
    message ="this is a large group";
}
console.log(message)