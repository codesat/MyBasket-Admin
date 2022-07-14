import React from 'react'
import './user.css'
import imgurl from '../../../assets/images/p1.jpg'
import {FiUser} from 'react-icons/fi'
import {MdPhone,MdUpload,MdLocationOn,MdOutlineCalendarToday,MdMailOutline} from 'react-icons/md'
import {Link} from 'react-router-dom'

const User = () => {
  return (
    <div className='user'>
        <div className="usertitlecontainer">
            <h1 className="usertitle">Edit User</h1>
            <Link to="/newuser">
            <button className="useraddbtn">Add new user</button>
            </Link>
        </div>
        <div className="usercontainer">
            <div className="usershow">
                <div className="usershowtop">
                    <img src={imgurl} alt="" className="usershowimg" />
                     <div className="usershowtoptitle">
                        <span className="usershowusername">
                            Anna Becer
                        </span>
                        <span className="usershowusertitle">
                            Software Engineer
                        </span>
                     </div>
                </div>
                <div className="usershowbottom">
                    <span className="usershowtitle">
                        Account Details
                    </span>
                    <div className="usershowinfo">
                    <FiUser className='usershowicon'/>
                        <span className="usershowinfotitle">
                            annaback99
                        </span>
                    </div>
                    <div className="usershowinfo">
                    <MdOutlineCalendarToday className='usershowicon'/>
                        <span className="usershowinfotitle">
                            12-45-8989
                        </span>
                    </div>
                    <span className="usershowtitle">
                        Contact Details
                    </span>
                    <div className="usershowinfo">
                    <MdPhone className='usershowicon'/>
                        <span className="usershowinfotitle">
                            +1244541321
                        </span>
                    </div>
                    <div className="usershowinfo">
                    <MdMailOutline className='usershowicon'/>
                        <span className="usershowinfotitle">
                            annaback99@gmail.com
                        </span>
                    </div>
                    <div className="usershowinfo">
                    <MdLocationOn className='usershowicon'/>
                        <span className="usershowinfotitle">
                            Street 23 ,USA
                        </span>
                    </div>
                </div>
            </div>
            <div className="userupdate">
                <span className="userupdatetitle">Update details</span>
                <form action="" className="userupdateform">
                    <div className="userupdateleft">
                        <div className="userupdateitem">
                            <label>Username</label>
                            <input type="text"
                            placeholder='annaback99'
                             className="userupdateinput" />
                        </div>

                        <div className="userupdateitem">
                            <label>Full Name</label>
                            <input type="text"
                            placeholder='Anna Becer'
                             className="userupdateinput" />
                        </div>

                        <div className="userupdateitem">
                            <label>Email</label>
                            <input type="text"
                            placeholder='annaback99@gmail.com'
                             className="userupdateinput" />
                        </div>

                        <div className="userupdateitem">
                            <label>Phone</label>
                            <input type="text"
                            placeholder='+9478456598'
                             className="userupdateinput" />
                        </div>

                        <div className="userupdateitem">
                            <label>Address</label>
                            <input type="text"
                            placeholder='NewYork | USA'
                             className="userupdateinput" />
                        </div>

                    </div>
                    <div className="userupdateright">
                        <div className="userupdateuplaod">
                            <img
                            src={imgurl}
                            alt=""
                            className="userupdateimg" />
                            <label htmlFor="file"><MdUpload className='userupdateicon'/></label>
                            <input type="file" id="file" style={{display:"none"}} />
                        </div>
                        <button className="userupdatebtn">Update</button>

                    </div>

                </form>

            </div>
        </div>


    </div>
  )
}

export default User
