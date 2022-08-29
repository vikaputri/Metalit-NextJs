import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";

const Help = () => {
  return (
    <>
        <Header/>
        <header class="py-5 px-2">
            <div class="container px-5">
                <div class="justify-content-center">
                    <h1 class="fw-bolder mb-5 text-center">Pusat bantuan</h1>
                    <div class="accordion accordion-flush" id="QA">

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" 
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#QA1" 
                                    aria-expanded="false"
                                    aria-controls="QA1">
                                        Pertanyaan
                                </button>
                            </h2>
                            <div id="QA1" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#QA">
                                <div class="accordion-body">
                                    Jawaban
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" 
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#QA2" 
                                    aria-expanded="false"
                                    aria-controls="QA2">
                                        Pertanyaan
                                </button>
                            </h2>
                            <div id="QA2" 
                                class="accordion-collapse collapse" 
                                aria-labelledby="flush-headingTwo" 
                                data-bs-parent="#QA">
                                <div class="accordion-body">
                                    Jawaban
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </header>

        <section class="py-5 px-2">
            <div class="container px-5">
                <div class="justify-content-center">
                    <h2 class="fw-bolder mb-4 text-center">Ingin bertanya lebih jauh?</h2>
                    <div class="mb-5 text-center">
                        <p>Hubungi kami untuk informasi lebih lanjut mengenai pelatihan di Metalit.id</p>        
                    </div>
                    <div class="text-center">
                        <a class="btn btn-primary" href="contact">Hubungi Kami</a>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>

    </>
  )
}
  
export default Help