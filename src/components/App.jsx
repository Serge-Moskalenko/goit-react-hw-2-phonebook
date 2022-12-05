import React, {Component} from "react";
import { Phonebook } from "./Phonebook";
import { Contacts } from "./Contacts";
// import { nanoid } from 'nanoid'

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter:'',
  }

 formDataHendler = data => {
    const { contacts } = this.state;
    if (contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contact`);
      return
    } else {
      this.setState(({ contacts }) => ({
        contacts: [data, ...contacts],
      }));
    }
  };

  onChangeFifter = e => {
    this.setState({filter:e.currentTarget.value})
  }

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(i=>i.id!==id)
    }))
  }

  render() {
    const { filter,contacts } = this.state;

    const normolazed = filter.toLowerCase(); 

    const filteredTodos = contacts.filter(todo => todo.name.toLowerCase().includes(normolazed));
    
    return (
      <div
        style={{
        marginLeft:'20px'
        }}>
        
        <Phonebook props={this.formDataHendler} />
        
        <Contacts props={filteredTodos} filter={filter} change={this.onChangeFifter} onDelete={this.deleteContact} />
        
      </div>
    );
  }
};
