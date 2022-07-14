import './productlist.css'
import { DataGrid} from '@material-ui/data-grid';
import {Link} from 'react-router-dom'
import {MdDeleteOutline} from 'react-icons/md'
import React, { useState } from 'react'
import { productrows } from '../../../dummydata';
const Products = () => {

    const [data,setdata]=useState(productrows);

    const handledelete=(id)=>{
        setdata(data.filter((item)=>item.id!==id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'product', headerName: 'Product', width: 200, renderCell:(params)=>{
            return (
                <div className="productlist">
                    <img src={params.row.imgurl} alt="" className='productlistimg'/>
                    <span>{params.row.name}</span>
                </div>
            )

        } },

        { field: 'stock', headerName: 'Stock', width: 130 },
        {field: 'status',headerName: 'Status', width: 130,},
        {field: 'price',headerName: 'Price', width: 160,},
        {field: 'action',headerName: 'Action', width: 160,
        renderCell:(params)=>{
            return (
               <>
                <Link to={"/product/" + params.row.id}>
                <button className="productlistedit">Edit</button >
                </Link>
                <MdDeleteOutline className="productlistdelete"
                onClick={()=>handledelete(params.row.id)}

                />
                </>
            )
        }

    },

      ];

  return (
    <div className='product'>
         <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Products
