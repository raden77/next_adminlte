import React, { Component } from 'react'
import AdminLayoutHoc from '../../component/layout/AdminLayoutHoc'
import axios from 'axios'

export default class user extends Component { 
  
    constructor(props) {
        super(props)
       
        this.state = {
           listuser:[],
           table:''
        }
    }
    
    componentDidMount(){
        console.log('user test');
       
    }

    loadtableUser = () =>{
        let that=this;

        // that.state.table=$('#tableUser').DataTable({"bDestroy": true});
    }

    render() {
        return (
              <AdminLayoutHoc contentTitle={'User Setting'}>
                  <div className='col-sm-12'>
                      <div className='card shadow mb-2'>
                          <div className='card-body'>
    
                            <div className='table-responsive'>
                                <table id='tableUser' className='table table-bordered table-hover'>
                                    <thead>
                                        <tr className='text-center'>
                                            <th>No</th>
                                            <th>Name</th>
                                            <th>Role</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='text-center'>No</td>
                                            <td >Name</td>
                                            <td className='text-center'>Role</td>
                                            <td className='text-center'>Status</td>
                                            <td className='text-center'>Action</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                          </div>
                      </div>           
                  </div>
              </AdminLayoutHoc>
        )

    }
}
