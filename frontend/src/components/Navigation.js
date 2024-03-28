import React from 'react';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <nav>
        <Link to="/"><i>Home</i></Link>
        <Link to="/packers"><i>Packers Schedule Log</i></Link>
        <Link to="/topics"><i>Web Dev Topics</i></Link>
    </nav>
  );
}

export default Navigation;
