import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'



const AdminSidebar = ({username}) => {
    const [host, setHost] = useState('')
    const [photoProfil, setPhotoProfil] = useState(null)
    const [student, setStudent] = useState([])

    
    
  return (
    <>
        <style jsx>{`
            .background {
                background-color: #e3f2fd;
            }
            .menu:hover{
                background-color: #e3f2fd;
                color:#283891 !important;
                font-weight: bold;
            }

            .submenu:hover{
                color:#283891 !important;
                font-weight: bold;
            }

            .aktive{
                color:#283891 !important;
                font-weight: bold;
            }
            .show > .nav-item  {
                background-color: #e3f2fd;
                color:red;                
            }
            .scroll-secondary::-webkit-scrollbar {
                width: 12px;
            }
            .scroll-secondary::-webkit-scrollbar-track {
                background-color: #e4e4e4;
                border-radius: 100px;
            }
            .scroll-secondary::-webkit-scrollbar-thumb {
                border-radius: 100px;
                border: 6px solid rgb(177, 177, 177);
                border-left: 0;
                border-right: 0;
                background-color: rgb(177, 177, 177);
            }
            .menu-sidebar{
                width:100%;
                max-height:68vh;
                overflow-x:hidden; 
                overflow-y:auto;
            }


            @media (max-width: 767.98px) {
                .w-btn{
                    width:100%;
                }
                .transform-sm{
                    transform:translateX(-50px);
                }
                .d-hide{
                    display:none;
                }

                .menu-sidebar{
                    max-height:60vh;
                }

            }
              
        `}</style>
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {/* Add icons to the links using the .nav-icon class with font-awesome or any other icon font library */}
                <li className="nav-item">
                    <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-tachometer-alt" />
                    <p>
                        Dashboard
                        <i className="right fas fa-angle-left" />
                    </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="../../index.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Dashboard v1</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="../../index2.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Dashboard v2</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="../../index3.html" className="nav-link">
                            <i className="far fa-circle nav-icon" />
                            <p>Dashboard v3</p>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </>

  )
}

export default AdminSidebar