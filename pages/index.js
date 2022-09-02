import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from 'next/image'
import pair from "../images/pair.svg";
import yoho from "../images/yoho.png";
import yuhu from "../images/yuhu.jpg";
import quote from "../images/quote-left.png";
import dea from "../images/dea.jpg";
import fadel from "../images/fadel.jpeg";
import unnamed2 from "../images/unnamed2.png";
  
const HomePage = () => {
  return (
    <>
      <Header/>
      <header className="py-5">
        <div className="container px-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div className="my-5 text-xl-start">

                <h1 className="display-5 fw-bolder mb-2">
                  Membantu anak IT menguasai skill standar industri
                </h1>
                <p className="lead fw-normal mb-4">Transformasikan dirimu jadi lebih baik</p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <a className="btn btn-primary btn-lg px-4 me-sm-3" href="course">Daftar</a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-xxl-6">
              <Image 
                className="img-fluid" 
                src={pair}
                loading="lazy"/>
              <a 
                href="https://storyset.com/web" 
                className="text-decoration-none text-muted"
              >
                <small> Didesain oleh Storyset</small>
              </a>
            </div>
          </div>
        </div>
      </header>


      <section className="py-5">
        <div className="container px-5 my-5">
          <div className="row gx-5 align-items-center">
            
            <div className="col-lg-6 mb-5">
              <Image 
                className="img-fluid" 
                src={yoho}
                loading="lazy"
              />
              <a 
                href="https://www.freepik.com/vectors/abstract" 
                className="text-decoration-none text-muted"
              >
                <small> Didesain oleh vectorjuice</small>
              </a>
            </div>

            <div className="col-lg-6 px-2">
              <h3 className="mb-4">Mau jadi talenta IT sesuai standar industri?</h3>
              <p>
                400.000 Sarjana IT tidak memenuhi standar indsutri 
                padahal kebutuhan talenta IT mencapai 600.000 per tahun.
              </p>
              <p className="mb-5">
                Yuk gabung metalit, belajar skill IT yang sesuai standar industri.
              </p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                <a className="btn btn-primary btn-lg px-4 me-sm-3" href="course">Daftar</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container px-5 my-5">
          <div className="row gx-5 align-items-center">

            <div className="col-lg-6 px-2">
              <h3 className="mb-4">Merasa tidak ada perkembangan karir?</h3>
              <p>
                Idealnya, anak IT bisa naik gaji 30% per 2 tahun.
                Level senioritas, skill ataupun jabatan harusnya pun ada peningkatan.
              </p>
              <p className="mb-5">
                Yuk gabung metalit untuk meningkatkan karirmu.
              </p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start mb-5">
                <a className="btn btn-primary btn-lg px-4 me-sm-3" href="course">Daftar</a>
              </div>
            </div>
            <div className="col-lg-6">
              <Image 
                className="img-fluid" 
                src={yuhu}
                loading="lazy"
              />
              <a 
                href="http://www.freepik.com" 
                className="text-decoration-none text-muted"
              >
                <small> Didesain oleh pch.vector</small>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="py-5">
        <div className="container px-5 my-5">
          <div className="text-center mb-5">
            <h1 className="fw-bolder">Kisah Sukses</h1>
            <p className=" text-muted mb-0">Kesuksesan murid kami setelah belajar bersama metalit</p>
          </div>
          <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-3 justify-content-center">
            <div className="col mb-5 mb-5 mb-xl-0">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">
                    <Image src={quote} loading="lazy"/>
                  </h4>
                  <p>
                    Naik gaji 30% setelah bersama metalit belajar skill python, js, git, sql dan 
                    ci/cd sampai website bisa diakses melalui internet 
                  </p>                                   
                  <hr/>
                  <div className="row">
                    <div className="col-md-2">
                      <Image 
                        className="avatar-img rounded-circle" 
                        src={dea}
                        loading="lazy"
                      />
                    </div>
                    <div className="col-md-10 px-5 col-sm-0">
                      <div className="profile">
                        <h6 className="cust-name">Dea Dania</h6>
                        <p className="cust-profession">Software Developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col mb-5 mb-5 mb-xl-0">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">
                    <Image src={quote} loading="lazy"/>
                  </h4>
                  <p>
                    Diterima magang di xendit setelah belajar membuat aplikasi web dengan python dan menggunakan git bersama metalit
                  </p>                                   
                  <hr/>
                  <div className="row">
                    <div className="col-md-2">
                      <Image 
                        className="avatar-img rounded-circle" 
                        src={fadel}
                        loading="lazy"
                      />
                    </div>
                    <div className="col-md-10 px-5 col-sm-0">
                      <div className="profile">
                        <h6 className="cust-name">Fadel Ananda</h6>
                        <p className="cust-profession">Backend developer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 py-lg-18">
        <div className="container mb-5">
          <div className="row mb-6 align-items-center justify-content-center">
            <div className="col-md-10">
              <div className="row align-items-center ">
            <div className="col-xl-6 col-lg-7 col-md-12 col-12 order-1 text-center text-lg-start ">

                  <span className="text-primary mb-3 d-block text-uppercase fw-semi-bold ls-xl">Mentor</span>
                  <h3 className="fw-bold mb-3">
                    Halo, saya <span className="text-primary">Alvian DK</span>
                    <br/>Akan membantu kamu menguasai skill standar industri
                  </h3>
                  <p className=" text-muted">
                    Saya akan membagikan pengalaman yang saya dapat dan telah berhasil 
                    diterapkan ke murid-murid sebelumnya
                  </p>
                </div> <div className="offset-xl-1 col-xl-5 col-lg-5 col-12 mb-6 mb-lg-0 order-lg-2 text-center ">
                  <Image height="220px" src={unnamed2} loading="lazy" alt=""/>
                </div>        
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>

    </>
  )
}
  
export default HomePage