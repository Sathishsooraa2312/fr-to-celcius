function convert(){
    let celciusVal=Number(document.getElementById("input").value);
    let farenheit=(celciusVal*9/5)+32
    let result=document.getElementById("result");
    result.innerHTML=farenheit + "°F"
}