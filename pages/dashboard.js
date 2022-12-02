import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Dashboard = () => {
  return (
    <div className="d-flex flex-column h-100">
        <main className="flex-shrink-0">
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 biru">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <Link href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span className="fs-5 d-none d-sm-inline">Metalit</span>
                            </Link>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li className="nav-item">
                                    <a href="#" className="nav-link align-middle px-0 text-white">
                                        <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                                    </a>
                                </li>
                                <li>
                                    <Link 
                                        href="#submenu1" 
                                        data-bs-toggle="collapse" 
                                        className="nav-link px-0 align-middle text-white">
                                        <i className="fs-4 bi-speedometer2"></i> 
                                        <span className="ms-1 d-none d-sm-inline">Dashboard</span> 
                                    </Link>
                                    <ul className="collapse nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                        <li className="w-100">
                                            <a href="#" className="nav-link px-0 text-white"> <span className="d-none d-sm-inline">Item</span> 1 </a>
                                        </li>
                                        <li>
                                            <a href="#" className="nav-link px-0 text-white"> <span className="d-none d-sm-inline">Item</span> 2 </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link 
                                        href="#submenu3" 
                                        data-bs-toggle="collapse" 
                                        className="nav-link px-0 align-middle text-white"
                                    >
                                        <i className="fs-4 bi-grid"></i> 
                                        <span className="ms-1 d-none d-sm-inline">Products</span> 
                                    </Link>
                                    <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                        <li className="w-100">
                                            <a href="#" className="nav-link px-0 text-white"> <span className="d-none d-sm-inline">Product</span> 1</a>
                                        </li>
                                        <li>
                                            <a href="#" className="nav-link px-0 text-white"> <span className="d-none d-sm-inline">Product</span> 2</a>
                                        </li>
                                        <li>
                                            <a href="#" className="nav-link px-0 text-white"> <span className="d-none d-sm-inline">Product</span> 3</a>
                                        </li>
                                        <li>
                                            <a href="#" className="nav-link px-0 text-white"> <span className="d-none d-sm-inline">Product</span> 4</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="#" className="nav-link px-0 align-middle text-white">
                                        <i className="fs-4 bi-people"></i> 
                                        <span className="ms-1 d-none d-sm-inline">Customers</span> 
                                    </Link>
                                </li>
                            </ul>
                            <hr/>
                            <div className="dropdown pb-4">
                                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <Image 
                                        src="https://github.com/mdo.png" 
                                        alt="hugenerd"
                                        width="30" 
                                        height="30" 
                                        className="rounded-circle"/>
                                    <span className="d-none d-sm-inline mx-1">loser</span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                    <li><Link className="dropdown-item" href="#">Settings</Link></li>
                                    <li><Link className="dropdown-item" href="#">Profile</Link></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><Link className="dropdown-item" href="#">Sign out</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col py-3">
                        Content area...
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}
  
export default Dashboard