import React from 'react'
import './Profile.css'
const Profile = () => {
    return (
        <div style={{background:"#F9F9F9"}}>
            <div className="profile">
                <div className="profile1">
                    <div className="profile11">

                        <img src="https://prodstatic.shoppersstop.com/_ui/responsive/common/assets/images/iconmyprofile.svg" alt="" className='user-img' />
                        <div style={{ lineHeight: "30px" }}>
                            <p>Name: Durvesh Nakhawa <i class="fa-solid fa-pen-to-square"></i></p>
                            <p>Email: durveshnakhawa2... </p>
                            <p>Mobile: 8369041343</p>
                        </div>
                    </div>

                    <div className="profile12">
                        Change Password
                    </div>

                    <div className="profile13">
                        <p className='profile-13-line'>My Offers</p>
                        <p className='profile-13-line'>My First Citizen Points</p>
                        <p className='profile-13-line'>My Wallet</p>
                        <p className='profile-13-line'>My Trasaction</p>
                        <p className='profile-13-line'>My Wardrobe</p>
                        <p className='profile-13-line'>My Address Book</p>
                        <p className='profile-13-line'>Logout</p>
                        <p className='profile-13-line'>Delete Profile</p>
                    </div>


                </div>
                <div className="profile2">
                    <div style={{background:"white",padding:"20px"}}>
                    <h3>PERSONAL INFORMATION</h3>
                    <div className='profile14-flex'>
                    <div style={{fontWeight:600,marginRight:"50px"}}>
                        <p>First name</p>
                        <p>Last name</p>
                        <p>Email address</p>
                        <p>Mobile Number</p>
                        <p>Gender</p>
                    </div>
                    <div>
                        <p>Durvesh</p>
                        <p>Nakhawa</p>
                        <p>durveshnakhawa27@gmail.com</p>
                        <p>+91 8369041343</p>
                        <p>Male</p>
                    </div>
                    </div>
  <button className='edit-btn'>
Edit Profile
  </button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Profile
