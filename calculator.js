
let result = document.getElementById("inputtext");

let calculate=(number)=>{
    result.value += number;
}

let results=()=>{
    try{
        result.value = eval(result.value);
    }
    catch{
        alert("Enter the valid input!")
    }
}

let clr=()=>{
    result.value = "";
}

function del(){
    result.value = result.value.slice(0, -1)
}