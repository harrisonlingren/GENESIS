import 'aframe';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Cursor from './components/Cursor';
import Sky from './components/Sky';
import Terrain from './components/Terrain';

class BoilerplateScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red'
    }
  }

  changeColor = () => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  };

  render () {
    return (
      <Scene>
        <Camera><Cursor/></Camera>

        <Sky/>

        <Entity light={{type: 'spot', color: '#472D10', intensity: 1}} position='-0.5 10 0'/>
        <Entity light={{type: 'spot', color: '#472D10', intensity: 0.4}} position='0 20 5'/>
        <Entity light={{type: 'spot', color: '#472D10', intensity: 0.2}} position='5 20 0'/>

        <Entity geometry='primitive: box' material={{color: 'red'}}/>
      </Scene>
    );
  }
}

ReactDOM.render(<BoilerplateScene/>, document.querySelector('.scene-container'));
