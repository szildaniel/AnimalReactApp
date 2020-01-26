import React from "react";
import Tile from "./Tile";
import { frog, ladybug, bee, bat, butterfly } from "../animalData";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";

const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`} 1;`;

class App extends React.Component {
  state = {
    animals: {
      frog: frog,
      ladybug: ladybug,
      bee: bee,
      bat: bat,
      butterfly: butterfly
    },
  };

  goTo = (animalName, animals ) => {
    this.props.history.push({
      pathname: `animal/${animalName}`,
      state: {desc: animals, 
       name: animalName, }
    });
  };
  


  render() {
    const { animals } = this.state;
    return (
      <FadeIn>
<div className="wrapper">
        <div className="container">
          <Tile
            name="Frog"
            uClass="tileFrog"
            goTo={this.goTo}
            animals={animals}
          />
          <Tile
            name="Ladybug"
            uClass="titleLadybug"
            goTo={this.goTo}
            animals={animals}
          />
          <Tile
            name="Butterfly"
            uClass="tileButterfly"
            goTo={this.goTo}
            animals={animals}
          />
          <Tile
            name="Bee"
            uClass="titleBee"
            goTo={this.goTo}
            animals={animals}
          />
          <Tile
            name="Bat"
            uClass="tileBat"
            goTo={this.goTo}
            animals={animals}
          />
        </div>
      </div>
      </FadeIn>
      
    );
  }
}

export default App;