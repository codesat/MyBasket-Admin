import React from 'react'
import './featured.css'
import {MdArrowDownward,MdArrowUpward} from 'react-icons/md'


function Featuredinfo() {
  return (
    <div className='featured'>
        <div className="featureditem">
            <span className="featuredtitle">Revenue</span>
            <div className="featuredmoneycontainer">
                <span className="featuredmoney">$2,451</span>
                <span className="featuredmoneyrate">
                    -11.4
                <MdArrowDownward className='featuredicon negative'/>
                </span>
            </div>

            <span className="featuredsubtitle">Compared to last month</span>

        </div>
        <div className="featureditem">
            <span className="featuredtitle">Sales</span>
            <div className="featuredmoneycontainer">
                <span className="featuredmoney">$2,451</span>
                <span className="featuredmoneyrate">
                    -1.4
                <MdArrowDownward className='featuredicon negative'/>
                </span>
            </div>

            <span className="featuredsubtitle">Compared to last month</span>

        </div>
        <div className="featureditem">
            <span className="featuredtitle">Cost</span>
            <div className="featuredmoneycontainer">
                <span className="featuredmoney">$2,451</span>
                <span className="featuredmoneyrate">
                    +11.4
                <MdArrowUpward className='featuredicon'/>
                </span>
            </div>

            <span className="featuredsubtitle">Compared to last month</span>

        </div>

    </div>
  )
}

export default Featuredinfo
