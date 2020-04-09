import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class InfoCreate extends React.Component{
  
  constructor(props){
    super(props);

    this.state = {
      name:'',
      description:'',
    };

    this.handleCreateForm = this.handleCreateForm.bind(this);
    this.saveInfo = this.saveInfo.bind(this);
  
  }

  handleCreateForm(event){

    const name =  event.target.name;
    const value =  event.target.value;

    this.setState({
      [name]:value
    });

  }

  saveInfo(event){

    event.preventDefault();
    console.log("call save info");
    let data = this.state; 
    axios.post('http://127.0.0.1:8000/api/info/post/',data).then(response =>{
        console.log('save');
        this.props.history.push(`/`);
    });
  }


  render(){
    
    return (
        <Router>
            <div className="App">
                <div className="add">
                <form className="form-horizontal" onSubmit={this.saveInfo}>
                    <div className="form-group">
                      <label className="control-label col-sm-2" htmlFor="email">Name:</label>
                      <div className="col-sm-10">
                        <input type="text" name="name" value={this.state.name} onChange={this.handleCreateForm} className="form-control" id="name" placeholder="Enter name" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-sm-2" htmlFor="email">Name:</label>
                      <div className="col-sm-10">
                      <textarea id="description" name="description" value={this.state.description} onChange={this.handleCreateForm} className="form-control" rows="3"></textarea>
                    </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-primary">Save</button>
                      </div>
                    </div>
                  </form> 
                </div>
            </div>      
        </Router>
    );
  }
}


