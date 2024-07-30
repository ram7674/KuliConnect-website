import React, { useState } from "react";
import './signup.css';
import { Link } from "react-router-dom";

/* primereact importings */
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

const Signup = () => {

    const [email, setemail] = useState('');
    const [name, setname] = useState('');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

  return (
    <>
        <div className='container-fluid d-flex justify-content-center align-items-center' style={{height: '100vh', width: '100vw'}}>
            <div className="row">
                <div className='col-12 bg-primary p-5 d-flex justify-content-center align-items-center flex-column rounded-3 w-100 sign-page'>
                    <span className="fs-3 fw-medium mb-2">KuliConnect</span>
                    
                    <FloatLabel className="my-3" style={{width: '100%'}}>
                        <InputText id="username" value={email} onChange={(e) => setemail(e.target.value)} style={{width: '100%'}} />
                        <label htmlFor="username">Mobile Number or Email</label>
                    </FloatLabel>
                    <FloatLabel className="my-3" style={{width: '100%'}}>
                        <InputText id="username" value={name} onChange={(e) => setname(e.target.value)} style={{width: '100%'}} />
                        <label htmlFor="username">Full Name</label>
                    </FloatLabel>
                    <FloatLabel className="my-3" style={{width: '100%'}}>
                        <InputText id="username" value={username} onChange={(e) => setusername(e.target.value)} style={{width: '100%'}} />
                        <label htmlFor="username">Username</label>
                    </FloatLabel>
                    <div className="flex justify-content-center my-3" style={{width: '100%'}}>
                    <Password placeholder="*****" value={password} onChange={(e) => setpassword(e.target.value)} toggleMask className="w-100" />
                    </div>
                    <Button label="Sign up" severity="success" className="rounded-3 w-100 mt-3" />

                    <div className="d-flex justify-content-center align-items-center w-100 mt-2 text-white">
                        <hr style={{ border: '1px solid #ffffff', width: '100%'}} /> <span className="m-3">or</span> <hr style={{ border: '1px solid #ffffff', width: '100%' }} />
                    </div>
                    <div className="d-flex justify-content-center align-items-center w-100">
                        <span className="mr-2">Have an account? </span><Link to='/login' style={{color: 'red', textDecoration: 'none'}}> Log in</Link>
                    </div>
                </div>
            </div>
        </div>

       {/* <div className='container-fluid d-flex justify-content-center align-items-center' style={{height: '100vh', width: '100vw'}}>
            <div className="row">
                <div className='col-12 bg-primary p-5 d-flex justify-content-center align-items-center flex-column rounded-3 w-100' style={{ maxWidth: '350px' }}>
                    
                </div>
            </div>
        </div> */}
    </>
  )
}

export default Signup;