import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import InfoEdit from './InfoEdit';
import { Route,Link } from "react-router-dom";

export default class InfoIndex extends React.Component{
  
  constructor(props){
    super(props);
    this.state = { information:[] };
  }

  componentDidMount(){

    axios.get('http://127.0.0.1:8000/api/info').then(response =>{

        this.setState({ information:response.data.data});
    });

  }

  deleteInfoRecord(e,infoId){
    e.preventDefault();

    axios.delete('http://127.0.0.1:8000/api/info/post/'+infoId).then(response =>{
       this.componentDidMount();
        console.log("deleted record");
    });

  }
  render(){
    
    return (
      <div className="App">
        <div className="add">
          <Link to="/info/create" className="btn btn-primary">Add</Link>
        </div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
              { this.state.information.map((information,index) =>
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{information.name}</td>
                  <td>{information.description}</td>
                  <td>
                    <Link className="btn btn-primary" to={`/info/edit/${information.id}`}>Edit</Link> |    
                    <Link className="btn btn-danger" to="#" onClick={ (e) => this.deleteInfoRecord(e,information.id)} >Delete</Link> 
                  </td>
                </tr>
              )}
              </tbody>
        </table>
      </div>
    )
  }
}


