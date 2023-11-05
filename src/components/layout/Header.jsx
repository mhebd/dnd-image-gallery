import { NavLink } from "react-router-dom"

function Header() {
  return (
    <header>
      <h3>D&D Gallery</h3>
      <nav>
        <ul>
          <li> <NavLink to="/">Home</NavLink> </li>
          <li> <NavLink to="/gallery">Gallery</NavLink> </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header