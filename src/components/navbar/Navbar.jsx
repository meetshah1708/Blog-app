import './Navbar.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
          <div className="topbar">
              <div className="social col-3">
          
              <i className="socialicon fa-brands fa-instagram" aria-hidden="true"></i>
              
              <i className=" socialicon fa-brands fa-twitter" aria-hidden="true"></i>
              <i className="socialicon  fa-brands fa-linkedin" aria-hidden="true"></i>
              <i className="socialicon fa-brands fa-facebook"></i>
              </div>
          <div className="header col-6">
              <ul className='list'>
                  <NavLink to ='/' className='listitem'>HOME</NavLink>
                  <NavLink to ='/about' className='listitem'>ABOUT</NavLink>
                  <NavLink to ='/write' className='listitem'>WRITE</NavLink>
                  <NavLink to ='/login' className='listitem'>LOGIN</NavLink>
              </ul>
              </div>
              <div className="setting d-flex col-3">
          <NavLink to='/setting'>
  <img className=" profile" src="https://th.bing.com/th/id/OIP.msxwKbVxeVR1kjkv_9Gg1wHaH_?w=189&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="..." />
               </NavLink>  
            <i className=" search fa fa-search" aria-hidden="true"></i>
              </div>
          </div>
    </div>
  )
}
