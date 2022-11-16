import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";

const Course = () => {
  return (
    <>
        <Header/>
        <section className="py-5">
            <div className="container px-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                    <div className="text-center my-5">
                        <h2 className="fw-bolder mb-3">Bergabung dengan kami</h2>
                        <p className="text-muted mb-4">Kuasai hard skill dan soft skill dengan mengikuti 12 minggu pelatihan bersama Metalit, dan dapatkan materi standar industri dengan harga terjangkau</p>
                    </div>

                    <div className="biru text-white">
                        <form className="py-5 px-5" method="post">  
                            <h3 className="mb-5 text-center">Daftarkan diri Anda</h3>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Nama</label>
                                <div className="col-sm-8">
                                    <input 
                                        type="text"
                                        name="nama" 
                                        required maxLength="255" 
                                        id="id_nama" 
                                        className="form-control mb-3"
                                    />
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
                                        className="form-control mb-3"
                                    />
                                </div>
                            </div>

                            <fieldset className="form-group mb-2">
                                <div className="row">
                                    <legend className="col-form-label col-sm-4 pt-0">Jenis Kelamin</legend>
                                    <div className="col-sm-8">
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="radio" 
                                                name="gender" 
                                                value="1" 
                                                required="" 
                                                id="id_0"/>
                                            <label className="form-check-label">Laki-laki</label>
                                        </div>
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="radio" 
                                                name="gender" 
                                                value="2" 
                                                required="" id="id_1"
                                            />
                                            <label className="form-check-label">Perempuan</label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <div className="form-group row mb-2">
                                <label className="col-sm-4 col-form-label">Nomor Handphone</label>
                                <div className="col-sm-8">
                                    <input 
                                        type="text" 
                                        name="hp" 
                                        maxLength="20" 
                                        required="" 
                                        id="id_hp" 
                                        className="form-control mb-3"
                                    />
                                </div>
                            </div>

                            <div className="form-group row mb-2">
                                <label className="col-sm-4 col-form-label">
                                    Pendidikan Terakhir
                                </label>
                                <div className="col-sm-8">
                                    <input 
                                        type="text" 
                                        name="study" 
                                        maxLength="20" 
                                        required="" 
                                        id="id_pendidikan" 
                                        className="form-control mb-3"
                                    />
                                </div>
                            </div>

                            <div className="form-group row mb-2">
                                <label for="id_jurusan" className="col-sm-4 col-form-label">Jurusan</label>
                                <div className="col-sm-8">
                                    <input 
                                        type="text" 
                                        name="jurusan" 
                                        maxLength="20" 
                                        required="" 
                                        id="id_jurusan" 
                                        className="form-control mb-3"/>
                                </div>
                            </div>

                            <div className="form-group row mb-2">
                                <label className="col-sm-4 col-form-label">
                                    Alasan Bergabung
                                </label>
                                <div className="col-sm-8">
                                    <textarea 
                                        name="reason" 
                                        cols="40" 
                                        rows="10" 
                                        required="" 
                                        id="id_alasan" 
                                        className="form-control mb-3"
                                    >
                                    </textarea>
                                </div>
                            </div>

                            <div className="d-flex justify-content-end">
                                <button 
                                    type="submit" 
                                    value="Kirim" 
                                    className="btn btn-light"
                                >
                                    Kirim
                                </button>
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
  
export default Course