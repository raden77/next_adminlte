import React from 'react'

export default function index() {
    return (
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Welcome</title>
          {/* Google Font: Source Sans Pro */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
          {/* Font Awesome */}
          <link rel="stylesheet" href="/asset/plugins/fontawesome-free/css/all.min.css" />
          {/* overlayScrollbars */}
          <link rel="stylesheet" href="/asset/plugins/overlayScrollbars/css/OverlayScrollbars.min.css" />
          {/* Theme style */}
          <link rel="stylesheet" href="/asset/dist/css/adminlte.min.css" />
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
                    <div className="col-12">
                      
                    </div>
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
          {/* AdminLTE App */}
          <script src="/asset/dist/js/adminlte.min.js"></script>
          {/* AdminLTE for demo purposes */}
        </div>
      );
    }
