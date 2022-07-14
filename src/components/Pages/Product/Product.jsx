import React from 'react'
import './product.css'
import {Link} from 'react-router-dom'
import Chart from '../../Chart/Chart.jsx'
import { proddata } from '../../../dummydata'
import imgurl from '../../../assets/images/prdimg.png'
import {MdUpload} from 'react-icons/md'

const Product = () => {
  return (
    <div className='product'>
        <div className="producttitlecontainer">
            <h1 className="producttitle">Product</h1>
            <Link to="/newproduct">
                <button className="productaddbtn">Add new product</button>
            </Link>
        </div>

        <div className="producttop">
            <div className="producttopleft">
              <Chart data={proddata} dataKey="Sales" title="Sales Performance"/>
            </div>
            <div className="producttopright">
              <div className="productinfotop">
                <img src={imgurl} alt="" className='productinfoimg' />
                <span className="productname">Apple Sans</span>

              </div>
              <div className="productinfobottom">
                <div className="productinfoitem">
                  <span className="productinfokey">id :</span>
                  <span className="productinfovalue">123</span>
                </div>
                <div className="productinfoitem">
                  <span className="productinfokey">sales :</span>
                  <span className="productinfovalue">1243</span>
                </div>
                <div className="productinfoitem">
                  <span className="productinfokey">active :</span>
                  <span className="productinfovalue">yes</span>
                </div>
                <div className="productinfoitem">
                  <span className="productinfokey">in stock :</span>
                  <span className="productinfovalue">no</span>
                </div>
              </div>
            </div>

        </div>
        <div className="productbottom">
          <form className="productform">
            <div className="productformleft">
              <label>Product Name</label>
              <input type="text" placeholder='Apple Airpod' />
              <label>In Stock</label>
              <select name="instock" id="instock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label>Active</label>
              <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="productformright">
              <div className="productupload">
                <img src={imgurl} alt="" className="productuploadimg" />
                <label for="file">
                </label>
                <input type="file" id='file' style={{display:"none"}} />
              </div>
              <div className="btncontainer">
                <MdUpload className='uploadicon'/>
              <button className="productbtn">Update</button>
              </div>
            </div>

          </form>

        </div>

    </div>
  )
}

export default Product
