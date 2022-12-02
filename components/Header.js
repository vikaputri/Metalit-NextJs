import Image from 'next/image'
import logo from "../images/logo-metalit-black.png";

export default function Header() {
    return (
          //Navigasi
          <nav className="navbar navbar-expand-lg navbar-light mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">
                <Image width={120} height={50} src={logo} alt={logo}/>
              </a>

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
                    <Link className="nav-link" href="/">Belajar</Link>
                  </li>
                  <li className="nav-item text-uppercase px-2">
                    <Link className="nav-link" href="/">Blog</Link>
                  </li>
                  <li className="nav-item text-uppercase px-2">
                    <Link className="nav-link" href="login">Login</Link>
                  </li>
                  <li className="nav-item text-uppercase px-2">
                    <Link className="nav-link " href="course">Daftar</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    );
  }
  