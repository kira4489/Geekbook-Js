const contador = {
    valorMaximo : 10,
    valorMinimo : 1,
    valorInicial1 : 4 ,
    valorActual1 : 3,
    aumentar : function() {return (this.valorInicial1+1 )},
    disminuir : function() { return (this.valorInicial1 -1 )},
    restablecer : function(){ return (this.valorActual1)}
  }
  
  console.log(contador.aumentar())
  console.log(contador.disminuir())
  console.log(contador.restablecer())