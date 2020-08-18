
const fun=(selector, width, padding, border)=>{
    let size = 0;
    if (selector == true){
   size = width -(padding*2) - (border *2);
    }else{
   size = width + (padding*2) - (border * 2)
    }
    
    
        return size;
    }


console.log(fun(0,200,10,5));