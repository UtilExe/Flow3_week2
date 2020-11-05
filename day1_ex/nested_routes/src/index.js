import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import App from './App2Nested';
 
const info = [
  { id: "rendering", title: "Rendering with React", info: "Add klasdklflasjdfkljjkdsf" },
  { id: "components", title: "components", info: "Add sajfljasflkdsajflksjak" },
  { id: "props-v-state", title: "Props v. State", info: "Add some text here" },
  { id: "react-routing", title: "Routing with React Reouter", info: "Cool text" },
  { id: "react", title: "Lear React", info: "Cool text about React" },
]
 
 
ReactDOM.render(
  <React.StrictMode>
    <App info={info} />
  </React.StrictMode>,
  document.getElementById('root')
);