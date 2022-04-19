import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import AdminContentNew from './AdminContent'
import AdminSidebarNew from './AdminSidebar'
import favicon from '../../public/favicon.ico'

function AdminLayoutHoc({children, contentTitle}) {
    const [username, setUsername] = useState('')

    useEffect(() => {
      
       
        
    }, [])
    
    return (
        <>
            <Head>
                <title>{contentTitle}</title>
                <link rel="shortcut icon" src={favicon} />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                
            </Head>    
            <div>
            
                {/* Site wrapper */}
                <div className="wrapper">
                    {/* Navbar */}
                    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* Left navbar links */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                            </li>
                        </ul>
                        {/* Right navbar links */}
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                            <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                                <i className="fas fa-expand-arrows-alt" />
                            </a>
                            </li>
                        </ul>
                    </nav>
                    {/* /.navbar */}
                    {/* Main Sidebar Container */}
                    <aside className="main-sidebar main-sidebar-custom sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}
                        <a href="../../index3.html" className="brand-link">
                            <img src="/asset/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                            <span className="brand-text font-weight-light">Welcome</span>
                        </a>
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user (optional) */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src="/asset/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">Alexander Pierce</a>
                            </div>
                        </div>
                        {/* SidebarSearch Form */}
                    
                        {/* Sidebar Menu */}
                            <AdminSidebarNew username={username}/>
                        {/* /.sidebar-menu */}
                    </div>
                    {/* /.sidebar */}
                    <div className="sidebar-custom">
                        
                    </div>
                    {/* /.sidebar-custom */}
                    </aside>
                    {/* Content Wrapper. Contains page content */}
                    <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                
                                <div className="col-sm-12">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item"><a href="#">Layout</a></li>
                                        <li className="breadcrumb-item active">Fixed Layout</li>
                                    </ol>
                                </div>
                            </div>
                        </div>{/* /.container-fluid */}
                    </section>
                    {/* Main content */}
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                    <AdminContentNew contentTitle={contentTitle} username={username}>
                                        {children}                
                                    </AdminContentNew>
                            </div>
                        </div>
                    </section>
                    {/* /.content */}
                    </div>
                    {/* /.content-wrapper */}
                    <footer className="main-footer">
                    <strong>Copyright 2022 </strong>
                    </footer>
                    {/* Control Sidebar */}
                    <aside className="control-sidebar control-sidebar-dark">
                    {/* Control sidebar content goes here */}
                    </aside>
                    {/* /.control-sidebar */}
                </div>
                {/* ./wrapper */}
                {/* jQuery */}
                <script src="/asset/plugins/jquery/jquery.min.js"></script>
                {/* Bootstrap 4 */}
                <script src="/asset/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
                {/* overlayScrollbars */}
                <script src="/asset/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
                {/* select2 js */}
                <script src="/asset/plugins/select2/js/select2.min.js"></script>
                {/* AdminLTE App */}
                <script src="/asset/dist/js/adminlte.min.js"></script>
            
            </div>        
           
        </>
      

    )
}

export default AdminLayoutHoc