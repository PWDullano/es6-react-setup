import React from 'react';
import ReactDOM from 'react-dom';

//JavaScript
// class App extends React.Component {
//   render(){
//     return React.createElement('h1', null, 'Herro World' )
//   }
// }

//JSX is a preprocessor step that adds XML syntax to JavaScript. You can definitely use React without JSX but JSX makes React a lot more elegant. Just like XML, JSX tags have a tag name, attributes, and children.
// class App extends React.Component {
//   render(){
//     return <h1>Herro Herro</h1>
//   }
// }

//Stateless function component
// const App = () => <h1>Herro Everybody</h1>

//The Render method only returns one node back unless you wrap it in a <div>
// class App extends React.Component {
//   render(){
//     return (
//       <div>
//         <h1>Hello Herro</h1>
//         <i>Italic</i>
//         <br></br>
//         <b>BOLD</b>
//       </div>
//     );
//   }
// }

// Rendering txt to view using interpolation
class App extends React.Component {
  render(){
    let txt = this.props.txt
    return <h1>{txt}</h1>
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  dog: React.PropTypes.number.isRequired
}

App.defaultProps={
  txt: 'This is the default text'
}

//React Props or Properties
ReactDOM.render(
  <App dog={2} />,
  document.getElementById('app')
)

export default App
