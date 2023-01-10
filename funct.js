function Palindrome(a){
    let b = a;
    let c = "";
    while(a != ""){
        c = a[0] + c;
        a = a.slice(1);
    }
    if(c == b){
        console.log("It is a Palindrome");
    }
}

Palindrome("101");