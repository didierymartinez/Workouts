const modifValor = ( el ) => (val) => el.innerHTML = val

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

export default div;

export {
    modifValor
};