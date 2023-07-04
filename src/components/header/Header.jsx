import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Header() {
  const handleActiveStyle = ({ isActive }) => {
    return {
      margin: 20,
      padding: 20,
      fontWeight: 600,
      fontSize: 20,
      textTransform: 'uppercase',
      color: isActive ? 'pink' : 'black',
      marginRight: 20,
      backgroundColor: '#B4AFAF',
      borderRadius: 10,
    };
  };

  return (
    <div>
      <div>
        <NavLink to="/" style={handleActiveStyle}>
          Home
        </NavLink>
        <NavLink to="/movies" style={handleActiveStyle}>
          Movies
        </NavLink>
      </div>
      <Outlet />
    </div>
  );

  // <div>
  //     <div>
  //         <NavLink to='/' style={handleActiveStyle}>Home</NavLink>
  //         <NavLink to='/posts' style={handleActiveStyle}>Posts</NavLink>
  //         <NavLink to='/about' style={handleActiveStyle}>About</NavLink>
  //         <NavLink to='/contact' style={handleActiveStyle}>Contact</NavLink>
  //     </div>
  //     <Outlet></Outlet>
  // </div>
}

Header.propTypes = {
  isActive: PropTypes.bool,
};
