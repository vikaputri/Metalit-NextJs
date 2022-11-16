import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from 'next/image'
import logo from "../images/google-logo.png";

const Login = () => {
  return (
    <>
        <Header/>

        <section className="py-5">
            <div className="container px-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="biru text-white">
                            <form className="py-5 px-5" autoComplete="off">
                                <h3 className="mb-4 text-center">Login</h3>
                                <div className="row mb-3">
                                    <a className="btn btn-light" href="">
                                        <Image src={logo}/> Masuk dengan Google
                                    </a>
                                </div>
                                <div className="row mb-2">
                                    <p  className="text-center">--- atau ---</p>
                                </div>

                                <div className="form-group row">
                                    <input 
                                        type="email" 
                                        name="login" 
                                        id="inputEmail" 
                                        className="form-control mb-3" 
                                        placeholder="Alamat e-mail" 
                                        required autoFocus/>
                                </div>
                                <div className="form-group row mb-3">
                                    <input 
                                        type="password" 
                                        name="password" 
                                        id="inputPassword" 
                                        className="form-control" 
                                        placeholder="Password" 
                                        required autoComplete="off"/>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-light" type="submit">Masuk</button>
                                </div>
                                <hr className="hr"/>

                                <p className="text-center">
                                    <a 
                                        className="btn btn-link text-reset" 
                                        href="">
                                        Lupa kata sandi?
                                    </a>
                                </p>
                                <div className="text-center">
                                    <p>Belum punya akun?
                                        <a className="text-reset" href="signup"><u>Daftar disini</u></a>
                                    </p>
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
  
export default Login