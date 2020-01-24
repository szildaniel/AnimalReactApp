import React from 'react';
import AnimalSlider from './AnimalSlider';

class Bee extends React.Component {
    state = {
        name: this.props.location.state.name,
        data: this.props.location.state.desc
      };
      
      render() {
        const { name, data } = this.state;
        return <AnimalSlider name={name} data={data}/>
      }
    }
    
export default Bee;
