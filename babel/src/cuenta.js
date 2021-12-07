console.log('cuenta')


export default {
    debito: 0,
    credito: 0,
    gasto(){
        this.debito++
    },
    ingreso(){
        this.credito++
    },
    saldo(){
        return this.credito - this.debito
    }
}