
const contenedorExp = document.createElement('div');
contenedorExp.classList.add('expenses');

const contenedorFecha = document.createElement('div');
contenedorFecha.classList.add('expense-date-container');
const fecha = document.createElement('div');
fecha.innerText = 'November';
const dia = document.createElement('div');
dia.classList.add('expense-date')
dia.classList.add('day')
dia.innerText = '2';
const mes = document.createElement('div');
mes.innerText = '2021';
contenedorFecha.append(mes, dia, fecha);

const contTexto = document.createElement('div');
contTexto.innerHTML = 'Comida JS';

const contValor = document.createElement('div');
contValor.innerText = '33500';

contenedorExp.append(contenedorFecha, contTexto, contValor);

document.getElementById('App').append(contenedorExp);
