import React from 'react';
import './App.css';
import Worklog from './worklog';
import NavContainer from './ui/NavContainer';

class App extends React.Component {
  
  state = {
    showModal: false,
  }

  modalCtrl(){
    let {showModal} = this.state;
    this.setState({
      showModal: !showModal
    });
  }

  render(){
      return (
      <div className="App">
        <NavContainer>

          {/* Temporary Control */}
          <button onClick={this.modalCtrl.bind(this)}>Worklog</button>

          <Modal 
            autoClose={this.modalCtrl.bind(this)}
            isShowned={this.state.showModal}
          />
        </NavContainer>

      </div>
    );
  }
}

export default App;
