import React from 'react'
import './newproduct.css'

const Newproduct = () => {
  return (
    <div className='newproduct'>
        <h1 className="addproducttitle">New Product</h1>
       <form className="addproductform">
        <div className="addproductitem">
            <label>Image</label>
            <input type="file" id="file"  className='imageinput'/>
        </div>
        <div className="addproductitem">
            <label>Name</label>
            <input type="text" placeholder='Apple Airpods' />
        </div>
        <div className="addproductitem">
            <label>Stock</label>
            <input type="text" placeholder='123' />
        </div>
        <div className="addproductitem">
            <label>Active</label>
            <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
        <button className="addproductbtn">Create</button>


        </form>


    </div>
  )
}

export default Newproduct
