import Image from 'next/image'
import logo from "../images/logo-metalit-black.png";

export default function Header() {
    return (
          //Navigasi
          <nav class="navbar navbar-expand-lg navbar-light mb-3">
            <div class="container">
              <a class="navbar-brand" href="">
                <Image width={120} height={50} src={logo}/>
              </a>

              <button 
                class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
               >
                <span class="navbar-toggler-icon"></span>
              </button>
              
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item text-uppercase px-2">
                    <a class="nav-link" href="">Belajar</a>
                  </li>
                  <li class="nav-item text-uppercase px-2">
                    <a class="nav-link" href="">Blog</a>
                  </li>
                  <li class="nav-item text-uppercase px-2">
                    <a class="nav-link" href="">Login</a>
                    </li>
                  <li class="nav-item text-uppercase px-2">
                    <a class="nav-link " href="course">Daftar</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    );
  }
  