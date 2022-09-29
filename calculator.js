let Result=document.getElementById("inputtext");

let calculate=(number)=>{
    Result.value=Result.value+number;
}
let result=()=>{
    try{
        Result.value=eval(Result.value)
    }
    catch(err){
        alert("Enter the valid expression");
    }
}
function clear(){
    Result.value="";
}
function del(){
    Result.value=Result.value.slice(0,-1);
}