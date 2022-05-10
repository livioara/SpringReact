import React from 'react';
import {ReactComponent as Gitimg} from '../../assets/img/git.svg';
import './styles.css'


function Navbar() {
  return (
  
    <header>
      <nav className='container'>
        <div className='dsmovie-nav-container'>
          <h1 className='h1-titulo'>DSFilmes</h1>
          <a href="https://github.com/livioara" >
            <div className='contato-image'>
              <Gitimg />
              <p className='contato-nome'>/livioara</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  
  );
}

export default Navbar;