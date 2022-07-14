import React from 'react'
import './newuser.css'

const Newuser = () => {
  return (
    <div className='newuser'>
        <h1 className="newusertitle">New User</h1>
        <form action="" className="newuserform">
            <div className="newuseritem">
                <label >Username</label>
                <input type="text" placeholder='john' />
            </div>
            <div className="newuseritem">
                <label >Full Name</label>
                <input type="text" placeholder='Jhon Smith' />
            </div>
            <div className="newuseritem">
                <label >Email</label>
                <input type="text" placeholder='john@gmail.com' />
            </div>
            <div className="newuseritem">
                <label >Password</label>
                <input type="password" placeholder='123456' />
            </div>
            <div className="newuseritem">
                <label >Phone</label>
                <input type="text" placeholder='+9878455689' />
            </div>
            <div className="newuseritem">
                <label >Date of Birth</label>
                <input type="text" placeholder='89-89-8585' />
            </div>
            <div className="newuseritem">
                <label>Address</label>
                <input type="text" placeholder='john | USA' />
            </div>
            <div className="newuseritem">
                <label >Gender</label>
               <div className="newusergender">
               <input type="radio" name="gender" id="male" value="male" />
                <label for="male">Male</label>
                <input type="radio" name="gender" id="female" value="female" />
                <label for="female">Female</label>
                <input type="radio" name="gender" id="other" value="other" />
                <label for="other">Other</label>
               </div>
            </div>
            <div className="newuseritem">
                <label htmlFor="">Active</label>
                <select name="active" id="active" className='newuserselect'>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <button className="newuserbtn">
                Create
            </button>
        </form>

    </div>
  )
}

export default Newuser
