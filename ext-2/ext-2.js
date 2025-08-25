let str='';

for( let i=1 ; i<=8;i++){
    for( let j=1 ; j<=8;j++){
        if( j%2 !==0){
            str+=`#  #  #  #  #${'\n'}` ;
        }else{
            str+=`  #  #  #  #${'\n'}`;
        }


    }
}

console.log(str);
