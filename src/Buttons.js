import React from 'react';
import Modal from './Modal'

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      modalMessage: '',
      numbers: [...Array(10).keys()],
      showModal: false
    };
  }
  handleClick(letter) {
    this.setState({ showModal: true, modalMessage:letter});
  }

  closeModal() {
    this.setState( {showModal: false})
  }

  render() {
    if(!this.state.showModal) {
    return (
      <div>
        Click number
        <ul>
          {this.state.numbers.map(number =>
            <button key={number} onClick={() => this.handleClick(number)}>
              {number}
            </button>
          )}
        </ul>
      </div>
    )
  } else {
    return(<Modal onClose={this.closeModal} message={this.state.modalMessage}/>)
  }
  }
}


export default Buttons;