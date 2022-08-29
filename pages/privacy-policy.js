import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from 'next/image'
import privacy from "../images/privacy.png";

const PrivacyPolicy = () => {
  return (
    <>
        <Header/>
        <header class="py-5 px-2">
            <div class="container px-5">
                <div class="justify-content-center">
                    <h1 class="fw-bolder mb-5 text-center">Kebijakan dan Privasi</h1>
                    <div class="mb-5">
                        <p class="privacy-content">
                            Content
                        </p>
                        <Image class="img-fluid rounded mb-5 mb-lg-0" src={privacy}/>
                    </div>
                </div>
            </div>
        </header>
        <Footer/>
    </>
  )
}
  
export default PrivacyPolicy