import div from './dom.js'

const DateComponente = (date) => {


    const txt_dia = date.getDay();
    const txt_mes = date.toLocaleString('default', { month: 'long' });
    const txt_year = date.getFullYear();

    const contenedorFecha = div('expense-date-container');
    const detFechas = `<div><div>${txt_dia}</div>
    <div class="expense-date">${txt_mes}</div>
    <div>${txt_year}</div></div>`

    contenedorFecha.innerHTML = detFechas;

    return contenedorFecha;


}

export default DateComponente;