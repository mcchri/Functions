let count = 0;

function myFunction(a){
    while(a != ""){
    if(a[0] == "a" || a[0] == "u" || a[0] == "i" || a[0] == "e" || a[0] == "o"){
      count++;
    }
    a = a.slice(1);
    }
    console.log(count);
}

myFunction("hello");

//------------------------------------------------------
count = 0;
function myFunction2(b){
    while(b != ""){
        if(b[0] == b[0].toUpperCase()){
          count++;
        }
        b = b.slice(1);
        }
        console.log(count);
    }
    myFunction2("DDoooDDD")
//-----------------------------------------------------------
count = 0;
function myFunction3(c){
    while(c != ""){
        if(c[0] == "0" || c[0] == "1" || c[0] == "2" || c[0] == "3" || 
        c[0] == "4" || c[0] == "5" || c[0] == "6" || 
        c[0] == "7" || c[0] == "8" || c[0] == "9"){
          count++;
        }
        c = c.slice(1);
        }
        console.log(count);
    }
    myFunction3("DDooDDD343400")