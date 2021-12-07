const div = (clase, innerHTML) => {
    const divC = document.createElement('div');
    if(!!clase){
        divC.classList.add(clase) 
    }
    if(!!innerHTML){
        divC.innerHTML = innerHTML;
    }
    return divC;
}


const contenedorFecha = div('expense-date-container');
const fecha = div(null, 'November');
const dia = div('expense-date', '2');
const mes = div(null, '2021');
contenedorFecha.append(mes, dia, fecha);

const contTexto = div(null, 'Comida JS');
const contValor = div(null, '33500');

const contenedorExp = div('expenses');
contenedorExp.append(contenedorFecha, contTexto, contValor);

document.getElementById('App').append(contenedorExp);
