import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.scss';
import Backdrop from '../UI/Backdrop';

class Sidebar extends Component {
  render() {
    const cls = [classes.Sidebar];

    if (!this.props.isOpen) {
      cls.push(classes.close);
    }

    return (
      <React.Fragment>
        <nav className={cls.join(' ')}>
          <div className={classes.header}>
            <div className="avatar">
              <img src={''} alt="avatar"></img>
            </div>
            <p>Dummy Heading</p>
          </div>
          <ul className="sidebar-nav list-unstyled components">
            <li className="nav-item">
              <Link exact to="/terminals" className="nav-link">
                Терминалы
              </Link>
            </li>
            <li className="nav-item">
              <NavLink to="/buyers" className="nav-link">
                Покупатели
              </NavLink>
            </li>
          </ul>
          <div className={classes.footer}>Copyright © 2020 </div>
        </nav>

        {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
      </React.Fragment>
    );
  }
}

export default Sidebar;
