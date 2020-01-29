import React from 'react';
import AnimalSlider from './AnimalSlider';
import { Zoom } from './App';

class Butterfly extends React.Component {
    state = {
        name: this.props.location.state.name,
        data: this.props.location.state.desc
      };
      
      render() {
        const { name, data } = this.state;
        return  <Zoom><AnimalSlider name={name} data={data} /></Zoom>
      }
    }
    
export default Butterfly;
