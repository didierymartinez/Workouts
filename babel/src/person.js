export default class Person
{
    constructor( nombre, apellido ){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    
    caminar(){
        console.log('Camina..');
    }

    nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }

}