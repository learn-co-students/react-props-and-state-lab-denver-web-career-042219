import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  renderPets = () => {
    return this.props.pets.map((pet) => {
      return <Pet key={pet.id} id={pet.id} type={pet.type} gender={pet.gender} age={pet.age} weight={pet.weight} name={pet.name} isAdopted={pet.isAdopted} onAdoptPet={this.props.onAdoptPet} />
    })
  }

  // render each card and display
  render() {
    return (
    <div className="ui cards"> {this.renderPets()} </div>
    )
  }
}

export default PetBrowser
