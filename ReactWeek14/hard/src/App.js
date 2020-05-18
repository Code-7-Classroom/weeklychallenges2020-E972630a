import React, { Component } from 'react';
import './App.css';
import './BasicInfo'
import { render } from '@testing-library/react';
import BasicInfo from './BasicInfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        {
          name: 'Esau Aguilar',
          number: '(336) 493-3311',
          email: 'esauaguilar160@gmail.com',
          dob: 'November 27, 1997'
        },
        {
          name: 'John Doe',
          number: '(123) 456-7890',
          email: 'randomemail@gmail.com',
          dob: 'February 14, 1998'
        },
        {
          name: 'Jane Doe',
          number: '(555) 555-5555',
          email: 'anotheremail@gmail.com',
          dob: 'June 18, 1996'
        },
        {
          name: 'Eva Lane',
          number: '(555) 123-4567',
          email: 'onemoreemail@gmail.com',
          dob: 'March 2, 1998'
        },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.person.map(person => {
          return (
            <BasicInfo
            name={person.name} 
            number={person.number} 
            email={person.email} 
            dob={person.dob} />
          )
        })}
      </div>
    );
  };
}


export default App;