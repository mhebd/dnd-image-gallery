import { NavLink } from "react-router-dom"

function Header() {
  return (
    <header>
      <div className="container">
        <h3>D&D Gallery</h3>
        <nav>
          <ul>
            <li> <NavLink to="/">Home</NavLink> </li>
            <li> <NavLink to="/gallery">Gallery</NavLink> </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header