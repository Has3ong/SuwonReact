import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import logoSm from '../assets/images/logo-sm.png'
import logo from '../assets/images/logo-light.png'
import profilePic from '../assets/images/users/user-1.jpg'

class Topbar extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <React.Fragment>
        <header id='topnav'>
          <div className='navbar-custom'>
            <div className='container-fluid'>
              <ul className='list-unstyled topnav-menu float-right mb-0'>
                <li className='dropdown notification-list' />

                <li className='d-none d-sm-block'>
                  <form className='app-search'>
                    <div className='app-search-box'>
                      <div className='input-group'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Not Implementation'
                        />
                        <div className='input-group-append'>
                          <button className='btn' type='submit'>
                            <i className='fe-search' />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </li>

                <li className='dropdown notification-list'>
                  <button
                    className='btn btn-link nav-link right-bar-toggle waves-effect waves-light'
                    onClick={this.props.rightSidebarToggle}
                  >
                    <i className='fe-settings noti-icon' />
                  </button>
                </li>
              </ul>

              <div className='logo-box' />
            </div>
          </div>
          <div className='topbar-menu active'>
            <div className='container-fluid in'>
              <div id='navigation'>
                <ul class='navigation-menu in'>
                  <li class='has-submenu active'>
                    <a href='index.html' class='active'>
                      <i class='mdi mdi-view-dashboard' />
                      Dashboard
                    </a>
                  </li>
                  <li class='has-submenu'>
                    <a href='#'>
                      {' '}
                      <i class='mdi mdi-invert-colors' />
                      Board <div class='arrow-down' />
                    </a>
                    <ul class='submenu'>
                      <li>
                        <a href='charts-flot.html'>Flot Charts</a>
                      </li>
                    </ul>
                  </li>
                  <li class='has-submenu'>
                    <a href='#'>
                      {' '}
                      <i class='mdi mdi-lifebuoy' />
                      Weather <div class='arrow-down' />
                    </a>
                    <ul class='submenu'>
                      <li>
                        <a href='charts-flot.html'>Flot Charts</a>
                      </li>
                    </ul>
                  </li>
                  <li class='has-submenu'>
                    <a href='#'>
                      {' '}
                      <i class='mdi mdi-chart-donut-variant' />
                      Dust <div class='arrow-down' />
                    </a>
                    <ul class='submenu'>
                      <li>
                        <a href='charts-flot.html'>Flot Charts</a>
                      </li>
                    </ul>
                  </li>
                  <li class='has-submenu'>
                    <a href='#'>
                      {' '}
                      <i class='mdi mdi-cards-outline' />
                      Menu1 <div class='arrow-down' />
                    </a>
                    <ul class='submenu'>
                      <li>
                        <a href='charts-flot.html'>Flot Charts</a>
                      </li>
                    </ul>
                  </li>
                  <li class='has-submenu'>
                    <a href='#'>
                      {' '}
                      <i class="mdi mdi-card-bulleted-settings-outline" />
                      Menu2 <div class='arrow-down' />
                    </a>
                    <ul class='submenu'>
                      <li>
                        <a href='charts-flot.html'>Flot Charts</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className='clearfix' />
            </div>
          </div>
        </header>
      </React.Fragment>
    )
  }
}

export default Topbar
