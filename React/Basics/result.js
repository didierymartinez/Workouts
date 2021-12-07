function ComponenteR(props) {
  return /*#__PURE__*/React.createElement("li", {
    onClick: () => {
      props.onSetElim(props.texto);
    }
  }, " ", props.texto, " ");
}

class MiObj extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hobbies: ["Reading", "Cycling", "Programing"],
      newHobbie: "",
      txtEliminado: "",
      color: "red"
    };
  }

  setNew(event) {
    this.setState({
      newHobbie: event.target.value
    });
  }

  addHobbie() {
    const newState = [...this.state.hobbies, ...[this.state.newHobbie]];
    this.setState({
      hobbies: newState
    });
  }

  eliminar(item) {
    const hb = [...this.state.hobbies];
    hb.splice(item, 1);
    this.setState({
      hobbies: hb,
      txtEliminado: "Eliminado"
    });
    setTimeout(() => {
      this.setState({
        txtEliminado: ""
      });
    }, 1000);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        color: this.state.hobbies.length > 3 ? 'red' : 'orange'
      },
      className: this.state.hobbies.length > 3 ? 'mayor' : ''
    }, " Cantidad hobbies: ", this.state.hobbies.length, " "), /*#__PURE__*/React.createElement("ul", null, this.state.hobbies.map((hobbie, id) => {
      return /*#__PURE__*/React.createElement(ComponenteR, {
        key: id,
        texto: hobbie,
        onSetElim: () => {
          this.eliminar(id);
        }
      });
    })), /*#__PURE__*/React.createElement("input", {
      onChange: this.setNew.bind(this),
      type: "text"
    }), /*#__PURE__*/React.createElement("button", {
      onClick: this.addHobbie.bind(this)
    }, " Add hobbie"), /*#__PURE__*/React.createElement("p", null, this.state.txtEliminado));
  }

}

const divCont = document.getElementById('app');
ReactDOM.render( /*#__PURE__*/React.createElement(MiObj, null), divCont);
