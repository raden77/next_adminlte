import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect, useState } from "react"



const AdminHeader = ({contentTitle, username}) => {
    const [photoProfil, setPhotoProfil] = useState(null)

    const router = useRouter()
    const { locale } = router

    const handleChangeLocale = (e) => {
        const locale = e.target.value;
        router.push(router.pathname, router.asPath, { locale });
        localStorage.setItem('locale', locale)
        document.querySelector('#locale').classList.remove('show')
        document.querySelector('#btnLocale').classList.remove('show')
    }

    useEffect(()=>{

        localStorage.setItem('locale', locale)
        setPhotoProfil(localStorage.getItem('photo'))
        
    })
    return(
        <>
            <style jsx>
            {`
                .btn:focus{
                    box-shadow: none;
                }

                .transform-sm{                    
                    position: absolute;
                    z-index:1000;
                    transform: translateX(40px);
                }

                .w-btn{
                    width: 200px;
                    display:flex;
                    align-items:center;
                    justify-content: center;
                }

                @media (max-width: 767.98px) {
                    .w-btn{
                        width:100%;
                    }
                    .transform-sm{
                        transform:translateX(-50px)
                    }
                    .d-hide{
                        display:none
                    }
                }

                @media (max-width: 575.98px) { 
                    .content-title{
                        display: none;
                    }
                }

            `}
            </style>
            <header className="navbar sticky-top bg-light flex-md-nowrap p-1">
                <a className="navbar-brand col-md-3 col-lg-3 me-0 px-3" href="#">
                    <Image src={Logo} width={120} height={45} alt="logo"/>
                </a>
                <h5 className="content-title">{contentTitle}</h5>
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap d-flex">                        
                        {/* language*/}
                        <div className="btn-group">
                            <Image 
                                src={locale === 'id' ? flagId : flagEn} 
                                alt="Flags" 
                                width={20} 
                                height={10}
                            />
                            <button 
                                id='btnLocale'                                
                                type="button" 
                                className="btn btn-ligth dropdown-toggle" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                {locale === 'id' ? 'ID' : 'EN'}
                            </button>
                            <ul id='locale' className="dropdown-menu transform-sm" onClick={handleChangeLocale} style={{cursor:'pointer'}}>
                                <li><a className={locale === 'id' ? "dropdown-item" : "dropdown-item active"}><option value='en'>English</option></a></li>
                                <li><a className={locale === 'id' ? "dropdown-item active" : "dropdown-item"}><option value='id'>Bahasa Indonesia</option></a></li>
                            </ul>
                        </div>
                        {/* Profil */}
                        <div className="dropdown">
                            <button className="btn btn-sm btn-ligth dropdown-toggle w-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                {
                                    photoProfil ? 
                                    // photoDefault
                                    <Image src={Profil} width={40} height={40} alt="Profil" className="rounded-circle"/>                                    
                                    :
                                    // photoProfilUserLogin
                                    <img src={photoProfil} width="40" height="40" alt="Profil" className="rounded-circle"/>    
                                } 
                                <span className="ms-1 d-hide">{username}</span> 
                            </button>
                            <ul className="dropdown-menu transform-sm" aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <Link href="/logout">
                                        <a className="dropdown-item">
                                            <FontAwesomeIcon icon={faSignOutAlt}/>  Logout
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* collapse menu */}
                        <button className="navbar-toggler float-end border d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <span> <FontAwesomeIcon icon={faBars} className="text-secondary"/> </span>
                        </button>

                    </div>
                </div>
            </header>
        </>
      
    )
}

export default AdminHeader;