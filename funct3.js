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

function mode(ar){
    let mode = 0;
    let mode_num = [];
    count = 0;
    for(j = 0;j<ar.length;j++){
        let one = ar[j];
    for(i = 0;i<ar.length;i++){
        if(one == ar[i]){
            count++;
        }
    }
    if(count > mode){
        mode == count;
        mode
    }else if(count == mode){
        mode_num += one;
    }
    //for(let k = 0; k < mode_num.length;k++){
        console.log(mode_num[1]);
    //}
}

}

mode([1,2,3,4,5,5,4,3]);
