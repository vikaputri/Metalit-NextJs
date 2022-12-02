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
        <section className="py-5">
            <div className="container px-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">

                        <div className="text-center my-5">
                            <h2 className="fw-bolder mb-3">Hubungi kami</h2>
                            <p className="mb-5">Tertarik untuk melakukan kerjasama dengan kami, silahkan hubungi </p>
                        </div>

                        <div className="biru text-white">
                            <form className="py-5 px-5" method="post">
                                <h3 className="mb-5 text-center">Tinggalkan Pesan</h3>
                                <div className="form-group row">
                                    <label className="col-sm-4 col-form-label">Nama</label>
                                    <div className="col-sm-8">
                                        <input 
                                            type="text" 
                                            name="name" 
                                            maxLength="255" 
                                            required="" 
                                            id="id_nama" 
                                            className="form-control mb-3"/>
                                    </div>
                                </div>
                                <div className="form-group row mb-2">
                                    <label className="col-sm-4 col-form-label">Email</label>
                                    <div className="col-sm-8">
                                        <input 
                                            type="email" 
                                            name="email" 
                                            required="" 
                                            id="id_email"
                                            className="form-control mb-3"/>
                                    </div>
                                </div>
                                <div className="form-group row mb-2">
                                    <label  className="col-sm-4 col-form-label">Tulis Pesan</label>
                                    <div className="col-sm-8">
                                        <textarea 
                                            name="message" 
                                            cols="40" 
                                            rows="10" 
                                            required="" 
                                            id="id_pesan" 
                                            className="form-control mb-3">
                                        </textarea>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <input type="submit" value="Kirim" className="btn btn-light"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-5 bg-light">
            <div className="container px-5 my-5">
                <div className="row gx-5 align-items-center">

                    <div className="col-6">
                        <Image 
                            className="img-fluid rounded mb-5 mb-lg-0" 
                            src={contact}
                            loading="lazy"
                            alt={contact}
                        />
                    </div>

                    <div className="col-6 text-left">
                        <div className="row mb-3 img10">
                            <Image src={placeholder} loading="lazy" alt={placeholder}/>
                        </div>
                        <div className="row mb-3">
                            <p>Jl. Bangka Raya No.17, RT.13/RW.1, Bangka,
                                <br/>Kec. Mampang Prpt, Kota Jakarta Selatan,
                                <br/> Daerah Khusus Ibukota Jakarta 12730
                                <br/>Telp. 0857-7979-3635
                            </p>
                        </div>
                        <div className="row mb-3 img10">
                            <Image src={whatsapp} loading="lazy" alt={whatsapp}/>
                        </div>
                        <div className="row mb-3">
                            <p>0857-7979-3635<br/>Whatsapp</p>
                        </div>
                        <div className="row mb-3 img10">
                            <Image src={gmail} loading="lazy" alt={gmail}/>                          
                        </div>
                        <div className="row">
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