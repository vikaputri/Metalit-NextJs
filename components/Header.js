import Image from 'next/image'
import logo from "../images/logo-metalit-black.png";
import Link from 'next/link'

export default function Header() {
    return (
          <nav className="navbar navbar-expand-lg navbar-light mb-3">
            <div className="container">
              <Link href="">
                <a className="navbar-brand" href="/">
                  <Image 
                    width={120} 
                    height={50} 
                    src={logo} 
                    alt={logo}/>
                </a>
              </Link>

              <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
               >
                <span className="navbar-toggler-icon"></span>
              </button>
              
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item text-uppercase px-2">
                    <Link href="">
                      <a className="nav-a text-reset text-decoration-none">Belajar</a>
                    </Link>
                  </li>
                  <li className="nav-item text-uppercase px-2">
                    <Link href="">
                      <a className="nav-a text-reset text-decoration-none">Blog</a>
                    </Link>
                  </li>
                  <li className="nav-item text-uppercase px-2">
                    <Link href="login">
                      <a className="nav-a nav-a text-reset text-decoration-none">Login</a>
                    </Link>
                  </li>
                  <li className="nav-item text-uppercase px-2">
                    <Link href="course">
                      <a className="nav-a nav-a text-reset text-decoration-none">Daftar</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    );
  }
  