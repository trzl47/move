import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = props => (
  <Link {...props} className="active" />
);

export default NavLink;
