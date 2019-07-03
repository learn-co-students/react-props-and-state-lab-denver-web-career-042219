import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  ChangeType = (selection) => {
    this.setState({
      filters: Object.assign({}, this.state.filters , {
        type: selection
      })
    })
  }

  FillPets = (petResults) => {
    this.setState({
      pets: petResults
    })
  }

  FetchAll = () => {
    const url = '/api/pets'
    fetch(url)
      .then(response => response.json())
      .then(result => this.FillPets(result))
    // debugger
  }

  FetchOther = () => {
    const selection = this.state.filters.type
    const url = `/api/pets?type=${selection}`
    fetch(url)
      .then(response => response.json())
      .then(result => this.FillPets(result))
    // debugger
  }

  FetchPets = () => {
    // debugger
    (this.state.filters.type === 'all') ? this.FetchAll() : this.FetchOther()
  }

  // onAdoptPet = (petId) => {
  //   // debugger;
  //   return this.state.pets.map(pet => {
  //     return pet.id === petId ? this.setState({...pet, isAdopted: true}}) : pet 
  //   })
  // }

  // onAdoptPet = (petID) => {
  //   this.setState({
  //     pets: Object.assign({}, this.state.pets , {
  //       isAdopted: true
  //     })
  //   })
  // }

  onAdoptPet = (petId) => {
    // debugger;
    const pets = this.state.pets.map(pet => {
      return pet.id === petId ? {...pet, isAdopted: true} : pet; 
    })
    this.setState({pets})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.ChangeType} onFindPetsClick={this.FetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}  onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
