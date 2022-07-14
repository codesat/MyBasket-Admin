import React, { useState } from 'react'
import './userlist.css'
import { DataGrid} from '@material-ui/data-grid';
import {MdDeleteOutline} from 'react-icons/md'
import { userrows } from '../../../dummydata';
import {Link} from 'react-router-dom'


const Userlist = () => {
    const [datas,setdatas]=useState(userrows);

    const handledelete=(id)=>{
        setdatas(datas.filter((item)=>item.id!==id));
    }
    // console.log(datas);

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'username', headerName: 'User', width: 200, renderCell:(params)=>{
            return (
                <div className="userlistuser">
                    <img className='userlistimg' src={params.row.avatarurl} alt=""/>
                    <h3>{params.row.username}</h3>
                </div>
            )

        } },

        { field: 'email', headerName: 'Email', width: 130 },
        {field: 'status',headerName: 'Status', width: 130,},
        {field: 'transactions',headerName: 'Transaction Volume', width: 160,},
        {field: 'action',headerName: 'Action', width: 160,
        renderCell:(params)=>{
            return (
               <>
                <Link to={"/user/" + params.row.id}>
                <button className="userlistedit">Edit</button >
                </Link>
                <MdDeleteOutline className="userlistdelete"
                onClick={()=>handledelete(params.row.id)}
                />
                </>
            )
        }

    },

      ];




  return (
    <div className="userlist">
      <DataGrid
        rows={datas}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Userlist
