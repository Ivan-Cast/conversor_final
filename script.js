function convertir()
{
    var valor=parseFloat(document.getElementById("Cantidad").value);
    document.getElementById("valor").innerHTML=valor;
    var de=document.getElementById("de").value
    var a=document.getElementById("a").value
    var Dolar=3777.67;
    var Euros=4399.80;
    resultado=0;
    // peso a Dolar
    if(de==1&&a==2)
    {
        resultado=valor/Dolar;
        document.getElementById("resultado").innerHTML="resultado:$"+ resultado.toFixed(5);
    }

    //peso a Euros
    else if(de==1&&a==3){
        resultado=valor/Euros;
        document.getElementById("resultado").innerHTML="resultado:$"+ resultado.toFixed(5);
    }
    //Dolar a pesos
    else if(de==2&&a==1)
    {
        resultado= Dolar*valor;
        document.getElementById("resultado").innerHTML="resultado:$"+ resultado.toFixed(2);
   }
   //Dolar a Euros
   else if(de==2&&a==3)
   {
       resultado=valor*(Dolar/Euros);
       document.getElementById("resultado").innerHTML="resultado:$"+ resultado.toFixed(2);
   
   }
   //Euros a peso
   else if(de==3&&a==1)
   {
       resultado=valor*Euros;
       document.getElementById("resultado").innerHTML="resultado:$"+ resultado.toFixed(2);
   }
   //Euros a Dolar 
   else if(de==3&&a==2)
   {
       resultado=valor*(Euros/Dolar);
       document.getElementById("resultado").innerHTML="resultado:$"+ resultado.toFixed(2);
   }
   //peso a peso, Dolar a Dolar y Euros a Euros
   else
   {
       resultado=valor;
       document.getElementById("resultado").innerHTML="resultado:$"+ resultado.toFixed(2);
       
   }
   document.getElementById("resultado").innerHTML=`Resultado: \$${resultado.toFixed(2)}`;
}