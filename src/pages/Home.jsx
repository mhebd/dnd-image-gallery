import { Link } from "react-router-dom"

/* eslint-disable react/no-unescaped-entities */
function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <h2>Welcome to "<Link to='/gallery'>D&D Image Gallery</Link>"</h2>
    </div>
  )
}

export default Home