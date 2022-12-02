export default function Header() {
    return (
        <footer className="bg-dark py-4 text-white">
          <div className="footer-middle">
            <div className="container px-5 my-5">
                <div className="row mb-3">
                  <div className="col-md-3 col-sm-6">
                    <div className="footer-pad">
                      <ul className="list-unstyled">
                        <li>
                            <a 
                                className="text-reset text-decoration-none" 
                                href="help">
                                Pusat Bantuan
                            </a>
                        </li>
                        <li>
                            <a 
                                className="text-reset text-decoration-none" 
                                href="about"
                            >
                                Tentang Kami
                            </a>
                        </li>
                        <li>
                            <a 
                                className="text-reset text-decoration-none" 
                                href="contact"
                            >
                                Hubungi Kami
                            </a>
                        </li>
                        <li>
                            <a 
                                className="text-reset text-decoration-none" 
                                href="term-conditions"
                            >
                                Syarat dan Ketentuan
                            </a>
                        </li>
                        <li>
                            <a 
                                className="text-reset text-decoration-none" 
                                href="privacy-policy"
                            >
                                Kebijakan Privasi
                            </a>
                        </li>
                       </ul>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6"></div>
                  <div className="col-md-3 col-sm-6"></div>
                  <div className="col-md-3">
                    <p>Jl. Bangka Raya No.17, RT.13/RW.1, Bangka,Kec. Mampang Prpt, 
                        Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12730 <br/> 
                        Telp. 0857-7979-3635
                    </p>
                  </div>   
                </div>
                <div className="row">
                    <div className="col-md-12 copy">
                        <p className="text-center">All Rights Reserved | Copyright © 2022 | 
                            PT Metamorfosa Teknologi Berdikari
                        </p>
                        <div className="text-center">
                            <span className="mx-2">
                                <a 
                                    href="https://twitter.com/metalit_id" 
                                    target="_blank"
                                    rel="noreferrer">
                                        <i className="fab fa-twitter"></i>
                                </a>
                            </span>
                            <span className="mx-2">
                                <a 
                                    href="https://www.facebook.com/Metalit-107151784977073" 
                                    target="_blank" rel="noreferrer">
                                        <i className="fab fa-facebook-f"></i>
                                </a>
                            </span>
                            <span className="mx-2">
                                <a 
                                    href="https://www.instagram.com/metalit.id" 
                                    target="_blank" rel="noreferrer">
                                        <i className="fab fa-instagram"></i>
                                </a>
                            </span>
                            <span className="mx-2">
                                <a 
                                    href="https://www.linkedin.com/company/metalit-id" 
                                    target="_blank" rel="noreferrer">
                                        <i className="fab fa-linkedin"></i>
                                </a>  
                            </span>  
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </footer>
    );
  }
  