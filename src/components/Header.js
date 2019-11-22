import React from 'react';
import tunaiku from '../assets/tunaiku-logo-alpha.svg'

const Header = () => {
    return (
        <div  >
                <div style={{}} >
                    <nav className='navbar navbar-expand-lg sticky-top' style={{paddingRight : '100px', paddingLeft : '100px', backgroundColor: '#002B46' }}>
                        <a className='navbar-brand' href='asdf'><img src={tunaiku} alt='tunaiku' style={{height : '50px'}}></img></a>
                        <button className='navbar-toggler' type='button' data-toggle='collapse'
                            data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false'
                            aria-label='toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>

                        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                            <ul className='navbar-nav ml-auto'>
                                {/* first dropdown menu */}
                                <li className='nav-item dropdown mx-2 '>


                                    <a className='dropdown-toggle d-flex align-content-md-center no-line text-white' href='asdfg' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'> Produk </a>
                                    <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                                        <h5 className='dropdowntag' style={{color : '#cccaca'}}>Nasabah</h5>
                                        <a className='dropdown-item text-white' href='google.com'> Referal </a>
                                        <a className='dropdown-item text-white' href='google.com'> Swara </a>
                                        <div className='dropdown-divider'></div>
                                        <h5 className='dropdowntag' style={{color : '#cccaca'}}>Bisnis</h5>
                                        <a className='dropdown-item text-white' href='google.com'> Partner Bisnis </a>
                                    </div>


                                </li>
                                <li className='nav-item dropdown mx-2'>

                                    <a className='dropdown-toggle d-flex align-content-md-center no-line text-white' href='asdfg' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'> Pusat bantuan </a>
                                    <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
                                        <a className='dropdown-item text-white' href='google.com'> Tanya Jawab  </a>
                                        <a className='dropdown-item text-white' href='google.com'> Cara Pembayaran </a>
                                    </div>

                                </li>
                                <li className='nav-item active mx-2 '>
                                    <a className='d-flex align-content-md-center no-line text-white' href='asdfg'>Tentang kami</a>
                                </li>
                                <li className='nav-item active mx-2'>
                                    <a className='d-flex align-content-md-center no-line text-white' href='asdfg'>Rilis media</a>
                                </li>
                                <li className='nav-item active mx-auto'>
                                    <a className='btnLogin d-flex align-content-md-center no-line text-white' href='masuk akun'>
                                        Masuk akun
                                </a>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
    );
}
 
export default Header;