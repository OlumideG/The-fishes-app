import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';


class App extends Component {
    state = {
        characters: [],
        // characterss:[]
    };
 
  
//   getCharacters= ()=>{
//     fetch('http://localhost:3000/fishes')
//     .then(response => response.json())
//     .then(response => this.setState({characterss: response.data}))
//     .catch(err => console.error(err))
  
//   }

//   componentDidMount(){
//     this.getCharacters();
// }


    removeCharacter = index => {
        const { characters } = this.state;
        // const updatedItems = this.state.characters.filter(item => item.index !== index)
        // this.setState({ characters: updatedItems })
      
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });

    //     fetch('http://localhost:3000/fishes', {
    //   method: 'delete',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     index
    //   })
    // })
    //   .then(response => response.json())
    //   .then(item => {
    //     this.state.deleteItemFromState(index)
    //   })
    //   .catch(err => console.log(err))
    }

    // deleteItemFromState = (id) => {
    //     const updatedItems = this.state.characters.filter(item => item.id !== id)
    //     this.setState({ characters: updatedItems })
    //   }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;
        
        return (
            <div className="container">
                  <h1>FISHES APP</h1>
           {/* <p>{this.characterss}</p> */}
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <h3>Add New Fish</h3>
                <Form handleSubmit={this.handleSubmit}  />
            </div>
        );
    }
}

export default App;
