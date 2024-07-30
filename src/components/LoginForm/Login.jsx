import React, { useState } from "react";

/* primereact importings */
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";

const Login = () => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

  return (
    <>
    <div className='d-flex justify-content-center align-items-center' style={{height: '100vh', width: '100vw'}}>
        <div className='bg-primary p-5 d-flex justify-content-center align-items-center flex-column rounded-3' style={{width: '350px'}}>
            <span className="fs-3 fw-medium mb-2 ls-5">KuliConnect</span>
            
            <FloatLabel className="my-3" style={{width: '100%'}}>
                <InputText id="username" value={email} onChange={(e) => setemail(e.target.value)} style={{width: '100%'}} />
                <label htmlFor="username">Mobile Number or Email</label>
            </FloatLabel>
            <div className="flex justify-content-center my-3" style={{width: '100%'}}>
               <Password placeholder="*****" value={password} onChange={(e) => setpassword(e.target.value)} toggleMask className="w-100" />
            </div>
            <Button label="Log in" severity="success" className="rounded-3 w-100 mt-3" />

            <div className="d-flex justify-content-center align-items-center w-100 mt-2 text-white">
                <hr style={{ border: '1px solid #ffffff', width: '100%'}} /> <span className="m-3">or</span> <hr style={{ border: '1px solid #ffffff', width: '100%' }} />
            </div>
            <div className="d-flex justify-content-center align-items-center w-100">
                <span className="mr-2">Don't have an account? </span> <Link to='/signup' style={{color: 'red', textDecoration: 'none'}} > Sign up</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login;