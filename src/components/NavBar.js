import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import {ButtonContainer} from './Button';
import styled from 'styled-components';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
          <Link to='/'>
            <img src={logo} alt='store' className='navbar-brand'/>
          </Link>
            <ul className='navbar-nav align-items-center'>
              <li className='nav-item ml-5'>
                <Link to='/' className='nav-link'>
                  ALL BOUQUETS
                </Link>
              </li>
            </ul>
            <Link to='/cart' className='ml-auto'>
              <ButtonContainer>
                CART
              </ButtonContainer>
            </Link>
        </NavWrapper>
      </div>
    )
  }
}

const NavWrapper = styled.nav `
  background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`