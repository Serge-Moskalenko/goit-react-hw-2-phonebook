import React,{Component} from "react"

export class Contacts extends Component{
    render() {

        const { props, filter, change, onDelete} = this.props;
        
        return (
            <>
                
                <h2>Contacts</h2>
                
                <label style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: "200px",
                    fontSize: "20px",
                }} >

                    Find contact by name
                    
                    <input style={{ marginTop: '10px', }} value={filter} type='text' onChange={change} />
                    
                </label>

        <ul style={{ listStyle: 'none' }}>

          {props.map(i => (
            <li style={{display:'flex',   alignItems:'center'}} key={i.id}>
                  <p>{i.name}    {i.number}</p>

                  <button style={{
                      width: '70px',
                      height: '30px',
                      marginLeft:'10px'
                  }}
                      type="botton"
                      onClick={() => onDelete(i.id)}>
                      
                      Delete
                  
                  </button>
            </li>
        ))} 
        </ul>
            </>
        )
    }
}