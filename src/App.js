import React, {Component} from 'react';
import PhoneForm from './component/PhoneForm';

class App extends Component{
  handleCreate = (data) => {
    console.log(data);
  }
  render(){
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
      </div>
    )
  }
}

export default App;
