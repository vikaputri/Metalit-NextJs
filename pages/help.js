import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";

const Help = () => {
  return (
    <>
        <Header/>
        <header className="py-5 px-2">
            <div className="container px-5">
                <div className="justify-content-center">
                    <h1 className="fw-bolder mb-5 text-center">Pusat bantuan</h1>
                    <div className="accordion accordion-flush" id="QA">

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" 
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#QA1" 
                                    aria-expanded="false"
                                    aria-controls="QA1">
                                        Pertanyaan
                                </button>
                            </h2>
                            <div id="QA1" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#QA">
                                <div className="accordion-body">
                                    Jawaban
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" 
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#QA2" 
                                    aria-expanded="false"
                                    aria-controls="QA2">
                                        Pertanyaan
                                </button>
                            </h2>
                            <div id="QA2" 
                                className="accordion-collapse collapse" 
                                aria-labelledby="flush-headingTwo" 
                                data-bs-parent="#QA">
                                <div className="accordion-body">
                                    Jawaban
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </header>

        <section className="py-5 px-2">
            <div className="container px-5">
                <div className="justify-content-center">
                    <h2 className="fw-bolder mb-4 text-center">Ingin bertanya lebih jauh?</h2>
                    <div className="mb-5 text-center">
                        <p>Hubungi kami untuk informasi lebih lanjut mengenai pelatihan di Metalit.id</p>        
                    </div>
                    <div className="text-center">
                        <a className="btn btn-primary" href="contact">Hubungi Kami</a>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>

    </>
  )
}
  
export default Help