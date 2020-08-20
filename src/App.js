import React, { Component, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Navigation/Sidebar';
import { Buyers } from './pages/Buyers';
import { Terminals } from './pages/Terminals';
import Login from './pages/Login/Login';
import MenuToggle from './components/Navigation/MenuToggle';

class App extends Component {
  state = {
    menu: false,
    isLogin: false
  };

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };

  menuCloseHandler = () => {
    this.setState({
      menu: false
    })
  }

  loginHandler = () => {
    this.setState({
      isLogin: true
    })
  }

  render() {

    return (
      <BrowserRouter>
        {!this.state.isLogin ? <Login onClick={this.loginHandler}/> : null}
        
        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />
        <Sidebar isOpen={this.state.menu} onClose={this.menuCloseHandler} />
        <Switch>
          <Route exact path="/terminals" component={Terminals} />
          <Route path="/buyers" component={Buyers} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
