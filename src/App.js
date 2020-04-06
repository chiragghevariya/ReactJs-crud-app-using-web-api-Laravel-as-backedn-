import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default class App extends React.Component{
  
  constructor(props){
    super(props);
  }

   state = {

    information:[]

  }

  componentDidMount(){

    axios.get('http://127.0.0.1:8000/api/info').then(response =>{

        this.setState({ information:response.data.data});
    });

  }
  render(){
    
    return (
      <div className="App">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.information.map((information,index) =>
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{information.name}</td>
                  <td>{information.description}</td>
                  <td>
                    <a class="btn btn-primary">Edit</a>  <a class="btn btn-danger">Delete</a> 
                  </td>
                </tr>
                )
            }
           
          </tbody>
        </table>
      </div>
    )
  }
}


