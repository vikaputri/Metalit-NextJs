import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from 'next/image'
import term from "../images/terms.png";

const TermConditions = () => {
  return (
    <>
        <Header/>
        <header className="py-5 px-2">
            <div className="container px-5">
                <div className="justify-content-center">
                    <h1 className="fw-bolder mb-5 text-center">Syarat dan Ketentuan</h1>
                    <div className="mb-5">
                        <p className="privacy-content">
                            content
                        </p>
                        <Image className="img-fluid rounded mb-5 mb-lg-0" src={term}/>
                    </div>
                </div>
            </div>
        </header>
        <Footer/>
    </>

  )
}
  
export default TermConditions