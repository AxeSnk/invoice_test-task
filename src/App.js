import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Navigation/Sidebar';
import { Buyers } from './pages/Buyers';
import { Terminals } from './pages/Terminals';
import Login from './pages/Login/Login';
import MenuToggle from './components/Navigation/MenuToggle';

class App extends Component {
  state = {
    menu: false,
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

  render() {
    return (
      <BrowserRouter>
        <Login />
        {/* <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />
        <Sidebar isOpen={this.state.menu} onClose={this.menuCloseHandler} />
        <Switch>
          <Route path="/terminals" component={Terminals} />
          <Route path="/buyers" component={Buyers} />
        </Switch> */}
      </BrowserRouter>
    );
  }
}

export default App;
