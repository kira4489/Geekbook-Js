let nombreusuario = 'Jhonatan';
let directUser = "";
directUser = prompt('Escriba su nombre de acceso directo');

if(nombreusuario === directUser){
    alert('Bienvenido, ' + nombreusuario)
}else{
    alert('Lo siento pero el usuario que has introducido no está registrado')
}