function myfunction(){
    var input=document.getElementById("input1").value;
    var radio=document.querySelector('input[name="input2"]:checked').value;;
    console.log(input);
    console.log(radio);

    if(radio == 'Farenheit')
    {
       var C = 5/9 * (input-32);
       document.getElementById("output").innerHTML=C + " Celcious";
    }
    if(radio == 'Celcious')
    {
       var F = (input * 1.8) + 32 ;
       document.getElementById("output").innerHTML=F +" Fahrenheit";
    }
}