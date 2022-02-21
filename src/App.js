import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'
// function App(props) {
//   return (
//     <div className="App">
//      <h1>{2+3}</h1>
//     </div>
//   );
// }

// const App = () => {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       </div>
//   );

//   }

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name:"Guvi",
//     }
//   } 
//   render() {
//     return (
//       <div className="App">
//         <h1>{this.state.name}</h1>
//       </div>
//     );
//   }
// }


class App extends Component {
  constructor(){
    super();
    this.state = {
      data:[
        {
          "id":1,
          "name":"Lavish",
          "post":"  full stack developer"
        },
        {
          "id":2,
          "name":"Rahul",
          "post":"Ui Designer"
        },
        {
          "id":3,
          "name":"Raj",
          "post":"  full stack developer"
        },
        {
          "id":4,
          "name":"Rajesh",
          "post":"  full stack developer"
        }
          ,
        {
          "id":5,
          "name":"Raul",
          "post":"System Admin"
        }
      ]
  }
}

  render() {
    return(
      <div>
        <Header/> 
        <Content/> 
        <table>
          <tbody>
            {this.state.data.map((person,i)=><TableRow key={i} data={person}/>)}
          </tbody>
        </table>


      </div>
    )
  }
}


class  Header extends Component {
  render() {
    return(
      <div>
        <h1>Header COmponent</h1>
      </div>
    );
  }
}

class Content extends Component {
  render() {
    return(
      <div>
        <h1>Content Component</h1>
      </div>
    );
  }
}


class TableRow extends Component {
  render() {
    return(
    <tr>
      <td>{this.props.data.id}</td>
      <td>{this.props.data.name}</td>
      <td>{this.props.data.post}</td>
    </tr>
    );
  }
}


export default App;
