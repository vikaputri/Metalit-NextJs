import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from 'next/image'
import placeholder from "../images/placeholder.png";
import contact from "../images/contact.svg";
import whatsapp from "../images/whatsapp.png";
import gmail from "../images/gmail.png";

const Contact = () => {
  return (
    <>
        <Header/>
        <section class="py-5">
            <div class="container px-5">
                <div class="row justify-content-center">
                    <div class="col-lg-8">

                        <div class="text-center my-5">
                            <h2 class="fw-bolder mb-3">Hubungi kami</h2>
                            <p class="mb-5">Tertarik untuk melakukan kerjasama dengan kami, silahkan hubungi </p>
                        </div>

                        <div class="biru text-white">
                            <form class="py-5 px-5" method="post">
                                <h3 class="mb-5 text-center">Tinggalkan Pesan</h3>
                                <div class="form-group row">
                                    <label for="id_nama" class="col-sm-4 col-form-label">Nama</label>
                                    <div class="col-sm-8">
                                        <input 
                                            type="text" 
                                            name="name" 
                                            maxlength="255" 
                                            required="" 
                                            id="id_nama" 
                                            class="form-control mb-3"/>
                                    </div>
                                </div>
                                <div class="form-group row mb-2">
                                    <label for="id_email" class="col-sm-4 col-form-label">Email</label>
                                    <div class="col-sm-8">
                                        <input 
                                            type="email" 
                                            name="email" 
                                            required="" 
                                            id="id_email"
                                            class="form-control mb-3"/>
                                    </div>
                                </div>
                                <div class="form-group row mb-2">
                                    <label for="id_email" class="col-sm-4 col-form-label">Tulis Pesan</label>
                                    <div class="col-sm-8">
                                        <textarea 
                                            name="message" 
                                            cols="40" 
                                            rows="10" 
                                            required="" 
                                            id="id_pesan" 
                                            class="form-control mb-3">
                                        </textarea>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-end">
                                    <input type="submit" value="Kirim" class="btn btn-light"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-5 bg-light">
            <div class="container px-5 my-5">
                <div class="row gx-5 align-items-center">

                    <div class="col-6">
                        <Image class="img-fluid rounded mb-5 mb-lg-0" src={contact}/>
                    </div>

                    <div class="col-6 text-left">
                        <div class="row mb-3 img10">
                            <Image src={placeholder}/>
                        </div>
                        <div class="row mb-3">
                            <p>Jl. Bangka Raya No.17, RT.13/RW.1, Bangka,
                                <br/>Kec. Mampang Prpt, Kota Jakarta Selatan,
                                <br/> Daerah Khusus Ibukota Jakarta 12730
                                <br/>Telp. 0857-7979-3635
                            </p>
                        </div>
                        <div class="row mb-3 img10">
                            <Image src={whatsapp}/>
                        </div>
                        <div class="row mb-3">
                            <p>0857-7979-3635<br/>Whatsapp</p>
                        </div>
                        <div class="row mb-3 img10">
                            <Image src={gmail}/>                          
                        </div>
                        <div class="row">
                            <p>support@metalit.id</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        <Footer/>
    </>
  )
}
  
export default Contact