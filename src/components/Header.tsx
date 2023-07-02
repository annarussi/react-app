
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <nav >
        <div className="container d-flex align-items-center m-0">
          <Link to='/'>
            <img src="https://www.leonidas.com/themes/custom/leonidas_theme/logo.jpg" alt="Leonidas Logo" className="leonidas-logo" />
          </Link>
          <Link to='/chocolates' className="text-decoration-none">
            <p id='nav-text'>Chocolates</p>
         </Link>
         <Link to='/boxes' className="text-decoration-none">
            <p id='nav-text'>Boxes</p>
         </Link>


        </div>
      </nav>

    </>

  )
}
