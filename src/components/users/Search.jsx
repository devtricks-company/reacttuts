import React, { Component } from "react";
import PropTypes from 'prop-types'

class Search extends Component {
    state={
        search:""
    }

    static propTypes = {
        searchUser:PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear:PropTypes.bool.isRequired,
        setAlert:PropTypes.func.isRequired
    }
    onChangeHandler = (e) => this.setState({[e.target.name] :e.target.value});
    
    submitHandler = (e) => {
        e.preventDefault();

        if(this.state.search === ""){
          this.props.setAlert("search can not be empty",'danger')
        }else{
          this.props.searchUser(this.state.search);
          this.setState({search:""})
        }
     
    }
    // submitHandler(e){
    //     e.preventDefault();
    //    this.setState({search:""})
    // }
    clearUsersHandler = () => {
      this.props.clearUsers();
    }
  render() {
    const {showClear,clearUsers} = this.props;

    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="search"
            placeholder="Search Users ...."
            className="form-control"
            value={this.state.search}
            onChange={this.onChangeHandler}
          />
          <input
            type="submit"
            value="Search User"
            className="btn btn-dark btn-block mt-3"
          />
        </form>
        {this.props.showClear &&  <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>}
       
      </div>
    );
  }
}

export default Search;
