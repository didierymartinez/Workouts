import Person from "./person.js";
import cuenta from "./cuenta.js"

const p1 = new Person("Didier", "Martinez");
p1.caminar();

console.log(p1.nombreCompleto())

cuenta.ingreso()
cuenta.ingreso()

cuenta.gasto()
cuenta.gasto()
cuenta.gasto()

console.log(cuenta.saldo())