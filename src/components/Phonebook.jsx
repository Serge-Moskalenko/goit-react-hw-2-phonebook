import React, { Component } from "react";
import { nanoid } from 'nanoid'

export class Phonebook extends Component {
  state = {
    name: '',
    number:''
  }

  handleChange = e => {

    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
      id: nanoid()
    });
  } 

  submitForm = e => {
    e.preventDefault();
    this.props.props(this.state)
    this.setState({name: '', number:''})
  }

  render() {
    const { name,number } = this.state

    return (
      <>
    <h1>Phonebook</h1>

        <form onSubmit={this.submitForm}
          style={{
          border: '2px solid black',
          padding: '20px',
          width:"400px"
        }}>


          <label
            style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: "16px", 
          }}>
          
            Name

            <input
              style={{
              width: "200px",
              height: "20px",
              marginTop:'10px'
          }}
  
  onChange={this.handleChange}
  value={name}         
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
          </label>

          <label
            style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: "16px", 
            }}>
            
            Number

            <input
              style={{
              width: "200px",
              height: "20px",
              marginTop:'10px'
          }}
          
  value={number} 
  onChange={this.handleChange}        
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
          </label>

          <button type="submit"
            style={{
            marginTop:"20px"
            }}>
            
            Add contact

          </button>
        </form>
        </>
      
    )
     
   }
}