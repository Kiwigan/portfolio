import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className="navbar">
        <h3 className="logo">Keegan</h3>
        <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><i className="fa-solid fa-bars-staggered mobile-menu"></i></li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar
/*<header>
/<div className="container">
<Link to="/">
  <h1>Workout Buddy</h1>
</Link>
</div>
</header>*/