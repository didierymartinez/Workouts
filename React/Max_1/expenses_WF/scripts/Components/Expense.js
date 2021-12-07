import div, { modifValor } from './dom.js'
import DateComponente from './Date.js';

const Expense = function (date, txt, val) {

    
    const contTexto = div(null, txt);
    const mTxt = modifValor(contTexto);
    
    const contValor = div(null, val);
    const contenedorFecha = DateComponente(date);

    const btn = document.createElement('button');
    btn.innerText = 'Click'
    btn.addEventListener('click', () => {
        console.log('modificado')
        mTxt('Otro')
    });

    const contenedorExp = div('expenses');
    contenedorExp.append(contenedorFecha, contTexto, contValor, btn);

    return contenedorExp;
}

export default Expense;