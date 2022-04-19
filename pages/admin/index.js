import React from 'react'
import AdminLayoutHoc from '../../component/layout/AdminLayoutHoc'
import axios from 'axios'

export default function index() {
    return (
        <AdminLayoutHoc contentTitle={'Admin'}>
            <div className='col-sm-12'>
                <div className='card shadow mb-2'>
                    <div className='card-body'>
                    admin page <i className="fa fa-save"></i>
                    </div>
                </div>           
            </div>
        </AdminLayoutHoc>
      );
    }
