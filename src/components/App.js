import React from "react";
import Tile from "./Tile";
import { frog, ladybug, bee, bat, butterfly } from "../animalData";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowRight, faArrowLeft);

const FadeIn = styled.div`
  animation: 2s ${keyframes`${fadeIn}`} 1;
`;

class App extends React.Component {
  state = {
    animals: {
      frog: frog,
      ladybug: ladybug,
      bee: bee,
      bat: bat,
      butterfly: butterfly
    }
  };

  goTo = (animalName, animals) => {
    this.props.history.push({
      pathname: `animal/${animalName}`,
      state: { desc: animals, name: animalName }
    });
  };

  render() {
    const { animals } = this.state;
    return (
      <FadeIn>
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
      </FadeIn>
    );
  }
}

export default App;
