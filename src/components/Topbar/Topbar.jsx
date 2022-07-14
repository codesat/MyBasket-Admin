import React from 'react'
import './Topbar.css'
import {MdNotificationsNone,MdLanguage,MdSettings} from 'react-icons/md'
import topavatarurl from '../../assets/images/p1.jpg'

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbarwrapper">
            <div className="topleft">
                <i class='bx bx-basket'></i>
                <span className="logo">MyBasket</span>
            </div>

            <div className="topright">

                <div className="topbariconcontainer">
                    <MdNotificationsNone size={25}/>
                    <span className="topiconbadge">4</span>
                </div>

                <div className="topbariconcontainer">
                <MdLanguage size={25}/>
                    <span className="topiconbadge">3</span>
                </div>

                <div className="topbariconcontainer">
                     <MdSettings size={25}/>
                </div>

                <img src={topavatarurl} alt="" className="topavatar" />

            </div>
        </div>

    </div>
  )
}

export default Topbar
