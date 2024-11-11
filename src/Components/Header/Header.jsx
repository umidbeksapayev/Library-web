import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <Link to='/login' id='logo'>BookLogo</Link>
      
      <nav className='nav'>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/books'>Books</Link>
          <Link to='/categories'>Categories</Link>
          <Link to='/about'>About</Link>
          

        </ul>
      </nav>
      <div className="login">
        <Link to='/signup'>Sign in</Link>
        <Link to='/login' id='login'>Sign up</Link>
      </div>
    </header>
  );
};

// function CustomLink({to, children, ...props}) {
//   const resolvedPath = useResolvedPath(to);
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true });

//   return (
//     <li className={isActive ? 'active' : ''}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   );
// }

export default Header;