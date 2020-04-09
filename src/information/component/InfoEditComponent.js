import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BrowserRouter as Router,Redirect, withRouter } from 'react-router-dom'

class InfoEditComponent extends React.Component{
  
    constructor(props){
        super(props);
        this.state = {
            name:'',
            description:'',
            getEditData:''
          };

          this.handleEditForm= this.handleEditForm.bind(this);
          this.updateInfo = this.updateInfo.bind(this);

          
    }

   componentDidMount(){

        axios.get('http://127.0.0.1:8000/api/info/post/'+this.props.parameter.infoId).then(response =>{
        
            this.setState({ getEditData:response.data.data,name:response.data.data.name,description:response.data.data.description});
        });
    }

     handleEditForm(event){

        const name =  event.target.name;
        const value =  event.target.value;
  
        this.setState({
          [name]:value
        })
  
    }

     updateInfo(event){

        event.preventDefault();
        console.log("call");
        let data = this.state; 
        axios.patch('http://127.0.0.1:8000/api/info/update/'+this.props.parameter.infoId,data).then(response =>{
            console.log(response);
            this.props.history.push(`/home`);
        });
      }

    render(){
        
        return (
            <div className="App">
                <div className="add">
                <form className="form-horizontal" onSubmit={this.updateInfo} >
                  <input type="hidden" name="id" value={this.props.parameter.infoId} />
                    <div className="form-group">
                      <label className="control-label col-sm-2" htmlFor="email">Name:</label>
                      <div className="col-sm-10">
                        <input type="text" name="name" value={this.state.name} onChange={this.handleEditForm} className="form-control" id="name" placeholder="Enter name" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-sm-2" htmlFor="email">Name:</label>
                      <div className="col-sm-10">
                      <textarea id="description" name="description" onChange={this.handleEditForm} value={this.state.description} className="form-control" rows="3"></textarea>
                    </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-primary">Update</button>
                      </div>
                    </div>
                  </form> 
                </div>
            </div>      
        );
    }
}

export default  withRouter(InfoEditComponent);
