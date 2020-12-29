import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";
import Alert from './components/layout/Alert';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import About from "./pages/About";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };

  // async componentDidMount() {
  //   console.log(process.env.REACT_APP_CLIENT_ID);
  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
  //   );
  //   console.log(res.data);
  //   this.setState({ users: res.data, loading: false });
  // }

  searchUser = async (text) => {
    try {
      this.setState({loading:true});
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);
  
    this.setState({users:res.data.items,loading:false});
    } catch (error) {
        console.log(error);
    }
    
  }

  clearUsers = () => this.setState({users:[] , loading:false});

  setAlert = (msg,type) => {
    this.setState({alert:{msg,type}});

    setTimeout(() => this.setState({alert:null}),3000 )
  }

  render() {
    const {users,loading} = this.state;
    return (
      <Router>
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github" />
        <div className="container mt-5">
        <Switch>
           <Route exact path='/' render={ props=> (
               <>
                  <Alert alert={this.state.alert} />
                  <Search searchUser={this.searchUser} clearUsers={this.clearUsers} showClear={users.length > 0 ? true : false } setAlert={this.setAlert} />
                  <Users users={users} loading={loading} />
                </>
             
           )}/>

           <Route exact path="/about" component={About} />
        </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
