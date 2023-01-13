function mean(ar){
    let si = ar.length;
    let count = 0;
    for(let i = 0;i<ar.length;i++){
        count += ar[i];

    }
   let ave = count / si;
   console.log(ave);
}

mean([1,2,3,4,5]);
//--------------------------------------------------- MODE
var x = [1,2,3,4,5,6,6,5,6,5];

call_me(x);


function call_me(params){
    let mode = [];
    let modec = 0;
    let moodeb = 0;
    let mode_num = -1;
    for(let i = 0;i<params.length;i++){
        let count = -1;
        for(let j = 0;j<params.length;j++){
            if(params[i] == params[j]){
                
                count++;
            }
            
        }
        document.write(count);
        if(count > mode_num){
            mode_num = count;
            mode = [];
            modeb = params[i];
            
        }else if(count == mode_num && modeb != params[i] && modec != params[i]){
            mode.push(params[i]);
            modec = params[i];
        }
    }
    mode.push(modeb);
    for(let k = 0; k<mode.length;k++){
        console.log(mode[k]);
    }
}

//----------------------------------------------median
var y = [1,2,3,4,5,6,6,5,6,5];

median(y);

function median(params){
    let num = 0;
    let le = params.length
    if(params.length % 2 == 0){
        num = ((le / 2) + ((le / 2) + 1)) / 2;
    }else if(le % 2 == 1){
        num = le / 2;
    }
    console.log(num);
}

//-----------------------------------frequency

var z = [1,2,3,4,5,6,6,5,6,5];

freq(z);

function freq(params){
    params.sort(function(a, b){return a - b});
    let sa = null;
    for(let i = 0;i<params.length;i++){
        let count = 0;
        for(let j = 0;j<params.length;j++){
            if(params[i] == params[j]){
                
                count++;
            }
            
        }
        if(sa != params[i]){
            sa = params[i];
            console.log(params[i] + " : " + count);
        }
    }
}


