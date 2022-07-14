import React from 'react'
import './Widgetsmall.css'
import p1 from '../../assets/images/p1.jpg'
import p2 from '../../assets/images/p2.jpg'
import p3 from '../../assets/images/p3.jpg'
import p4 from '../../assets/images/p4.jpg'
import p5 from '../../assets/images/p5.jpg'
import {IoEyeSharp} from 'react-icons/io5'


const Widgetsmall = () => {
  return (
    <div className='widgetsm'>
       <span className="widgetsmtitle">New Join Members</span>
       <ul className="widgetsmlist">
        <li className="widgetsmlistitem">
            <img src={p1} alt="" className="widgetsmimg" />
            <div className="widgetsmuser">
                <span className="widgetsmusername">Hellen Keller</span>
                <span className="widgetsmusertitle">Software Engineer</span>
            </div>
            <button className='widgetsmbtn'>
                <IoEyeSharp className="widgetsmbtnicon"/>
                Display
            </button>
        </li>
        <li className="widgetsmlistitem">
            <img src={p2} alt="" className="widgetsmimg" />
            <div className="widgetsmuser">
                <span className="widgetsmusername">Hellen Keller</span>
                <span className="widgetsmusertitle">Software Engineer</span>
            </div>
            <button className='widgetsmbtn'>
                <IoEyeSharp className="widgetsmbtnicon"/>
                Display
            </button>
        </li>
        <li className="widgetsmlistitem">
            <img src={p3} alt="" className="widgetsmimg" />
            <div className="widgetsmuser">
                <span className="widgetsmusername">Hellen Keller</span>
                <span className="widgetsmusertitle">Software Engineer</span>
            </div>
            <button className='widgetsmbtn'>
                <IoEyeSharp className="widgetsmbtnicon"/>
                Display
            </button>
        </li>
        <li className="widgetsmlistitem">
            <img src={p4} alt="" className="widgetsmimg" />
            <div className="widgetsmuser">
                <span className="widgetsmusername">Hellen Keller</span>
                <span className="widgetsmusertitle">Software Engineer</span>
            </div>
            <button className='widgetsmbtn'>
                <IoEyeSharp className="widgetsmbtnicon"/>
                Display
            </button>
        </li>
        <li className="widgetsmlistitem">
            <img src={p5} alt="" className="widgetsmimg" />
            <div className="widgetsmuser">
                <span className="widgetsmusername">Hellen Keller</span>
                <span className="widgetsmusertitle">Software Engineer</span>
            </div>
            <button className='widgetsmbtn'>
                <IoEyeSharp className="widgetsmbtnicon"/>
                Display
            </button>
        </li>
       </ul>
    </div>
  )
}

export default Widgetsmall

