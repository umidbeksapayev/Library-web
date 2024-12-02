import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import React, {useState} from 'react';
import './Header.css';


const Header = () => {
  const [showNav, setshowNav] = useState(false)
  const signHandle=()=>{
    setshowNav(false)
  }
  return (
    <header className="header">
      <Link to='/login' id='logo'>BookLogo</Link>
      
      <nav className='nav'>
        <ul >
          <Link to='/'>Home</Link>
          <Link to='/books'>Books</Link>
          <Link to='/categories'>Categories</Link>
          <Link to='/about'>About</Link>
          

        </ul>
      </nav>
      <div className="login">
        <Link onClick={signHandle} to='/signup'>Sign up</Link>
        <Link onClick={signHandle} to='/signin' id='login'>Sign in</Link>
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
