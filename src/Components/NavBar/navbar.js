import React, {useState, useEffect, Fragment } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../Auth/useAuth';
import './navbar.css'
import { nav, div} from 'bootstrap';


export default function Nav() {

    const auth = useAuth();
    const history = useHistory();
    const { logout/* , users  */} = useAuth();
    const [currentUser, setCurrentUser] = useState(null)


    useEffect(()=>{
        let user = auth.users.filter(user => user.isLogedU === true)
   
        if (user.length > 0) {
          
          setCurrentUser(user[0])
        }
      },[auth.users])
      const Sign = () => {
        let user = auth.users.filter(user => user.isLogedU === true)
        if (user[0]) {
          logout(user[0])
          setCurrentUser(null)
          history.push('/')
          
        } else {
          history.push('/')
        }
      }

    return (
       
            
        <nav  className="navbar navbar-expand-md navbar-dark bg-dark sticky-top flex-row d-flex" >

            <div className="container-fluid d-flex flex-row bd-highlight mb"  >
                <NavLink className="nav-link active" aria-current="page" to="/">BadBank</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0  aligment" style={{ alignItems:'end'}}>
                        <li className="nav-item" data-toggle="tooltip" data-placement="bottom" title="Landing page" >
                            <NavLink className="nav-link p-2 flex-column-1 aligment" aria-current="page" exact to="/" >Home</NavLink>
                        </li>
                    {currentUser ?  
                        <Fragment>
                                {/* <li className="nav-item">
                                    <NavLink className="nav-link"  title='balance' to="/balance">Balance</NavLink>
                                </li> */}
                            <li className="nav-item aligment" >
                                    <NavLink className="nav-link" data-toggle="tooltip" data-placement="bottom" title="Here to make deposits" to="/deposit">Deposit</NavLink>
                            </li>
                            <li className="nav-item aligment" >
                                <NavLink className="nav-link" data-toggle="tooltip" data-placement="bottom" title="Here to make withdraws" to="/withdraw">Withdraw</NavLink>
                            </li>
                            <li className="nav-item aligment"  data-toggle="tooltip" data-placement="bottom" title="Transaction Information of this Bank">
                                <NavLink className="nav-link" to="/alldata">All Data</NavLink>
                            </li>
                        </Fragment>
                        : <Fragment> </Fragment>}

                    </ul>
                    <ul className="d-flex flex-row-reverse bd-highlight "  >
                        <li type="button"   className="btn btn-outline-primary nav-item" data-toggle="tooltip" data-placement="bottom" title={!currentUser ? "Enter to your account": 'Click to left'}>
                            <NavLink className="nav-link" to="/login" onClick={Sign}>{currentUser ? 'Logout' : 'Login'}</NavLink>   
                        </li>
                        {!currentUser ?
                        <Fragment> 
                            <li type="button" className="btn btn-outline-primary nav-item" data-toggle="tooltip" data-placement="bottom" title="If you're a new user">
                            <NavLink className="nav-link" to="/createaccount">Create Account</NavLink>
                            </li>
                            
                        </Fragment>
                        : <Fragment></Fragment>}
   
                    </ul>        
                       
                    
                </div>

            </div>


        </nav>
        
    );
}