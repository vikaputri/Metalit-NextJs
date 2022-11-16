import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from 'next/image'
import logo from "../images/google-logo.png";

const SignUp = () => {
  return (
    <>
        <Header/>

        <section className="py-5">
            <div className="container px-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="biru text-white">
                            <form className="py-5 px-5" method="post" action="{% url 'account_signup' %}">
                                <h3 className="mb-4 text-center">Daftar</h3>
                                <div className="row mb-3">
                                    <a className="btn btn-light" href="">
                                        <Image src={logo}/>Daftar dengan Google
                                    </a>
                                </div>
                                <div className="row mb-2">
                                    <p  className="text-center">--- atau ---</p>
                                </div>
                                

                                <div className="form-group row">
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="inputEmail" 
                                        className="form-control mb-3" 
                                        placeholder="Alamat e-mail" 
                                        required autoFocus/>
                                </div>
                                <div className="form-group row mb-3">
                                    <input 
                                        type="password" 
                                        name="password1"  
                                        id="inputPassword" 
                                        className="form-control" 
                                        placeholder="Password" 
                                        required/>
                                </div>
                                <div className="form-group row mb-3">
                                    <input 
                                        type="password" 
                                        name="password2" 
                                        id="reinputPassword" 
                                        className="form-control mb-3" 
                                        placeholder="Konfirmasi Password" 
                                        required/>
                                </div>
                                <div className="form-group mb-4">
                                    <div className="form-check">
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            id="gridCheck" 
                                            value="agreement" 
                                            required/>
                                        <label className="form-check-label">Saya setuju dengan  
                                            <a 
                                                className="text-reset mx-1" 
                                                href="term-conditions">
                                                    Ketentuan Penggunaan
                                            </a> dan 
                                            <a 
                                                className="text-reset mx-1" 
                                                href="privacy-policy">
                                                Kebijakan Privasi
                                            </a>
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="row mb-4">
                                    <button className="btn btn-light" type="submit">Submit</button>
                                </div>

                                <div className="text-center">
                                    <span>Sudah punya akun? Silahkan
                                        <a className="text-white mx-1" href="login">Masuk disini</a>
                                    </span>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <Footer/>

    </>
  )
}
  
export default SignUp