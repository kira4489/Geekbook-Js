const geekGirl = {};
geekGirl.name = 'Susana';
geekGirl.edad = '26 años'
geekGirl.periodista='Periodista'
geekGirl.sayHello = function (){
  return 'Hola, Mi nombre es' + " " + this.name + " " +'tengo' + " " + this.edad+ " " + 'y soy'+ " " +this.periodista;
}

// Muestra en la consola 'Hola, me llamo María'
console.log(geekGirl.sayHello());


const geekGirl2 = {};
geekGirl.name = 'rocio';
geekGirl.edad = '25 años'
geekGirl.actriz='actriz'
geekGirl.sayHello2 = function (){
  return 'Hola, Mi nombre es' + " " + this.name + " " +'tengo' + " " + this.edad+ " " + 'y soy'+ " " +this.actriz;
}

// Muestra en la consola 'Hola, me llamo María'
console.log(geekGirl.sayHello2());