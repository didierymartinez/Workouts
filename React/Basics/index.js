
function ComponenteR(props){

    return ( <li onClick={ () => { props.onSetElim(props.texto) } }> { props.texto } </li> );
}

class MiObj extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hobbies: ["Reading", "Cycling", "Programing"],
            newHobbie: "",
            txtEliminado: "",
            color: "red",
        }
    }

    setNew(event) {
        this.setState({ newHobbie: event.target.value });
    }

    addHobbie() {
        const newState = [...this.state.hobbies, ...[this.state.newHobbie]];
        this.setState({ hobbies: newState })
    }

    eliminar(item) {
        const hb = [...this.state.hobbies];
        hb.splice(item, 1);
        this.setState({ hobbies: hb, txtEliminado: "Eliminado" });
        setTimeout(() => {
            this.setState({ txtEliminado: "" });
        }, 1000)
    }

    render() {
        return (
            <div>
                <p 
                    style={ { color: this.state.hobbies.length > 3 ? 'red': 'orange'  } } 
                    className={ this.state.hobbies.length > 3 ? 'mayor': '' }
                > Cantidad hobbies: { this.state.hobbies.length } </p>
                <ul>
                    
                    {
                        this.state.hobbies.map((hobbie, id) => {
                            return <ComponenteR 
                                key={ id } 
                                texto={ hobbie } 
                                onSetElim={ () => { this.eliminar(id) }}
                                />
                       
                        })
                    }
                </ul>
                <input onChange={this.setNew.bind(this)} type="text"></input>
                <button onClick={this.addHobbie.bind(this)}> Add hobbie</button>
                <p>{ this.state.txtEliminado }</p>
            </div>
        );
    }
}

const divCont = document.getElementById('app');

ReactDOM.render(<MiObj></MiObj>, divCont)