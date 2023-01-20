function progressao(x,y){

    if(x>y){
        return x + progressao(x-y,y)
    }else{
        return y
    }

}

console.log(progressao(24,3))