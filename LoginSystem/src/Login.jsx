import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Login = () => {
  const [username, setUserName]=useState('');
  const [password, setNewPassword] = useState('');
  const navaigate = useNavigate();
  const loginCheck=(e)=>{
    e.preventDefault();
    if(validationUser()){
      fetch("http://localhost:8000/user/" + username).then((res)=>{
       return res.json();
      }).then((response)=>{
        console.log(response);
      }).catch((error)=>{
        toast.error('Login Failed: ' +error.message);
      })
    }
  }

  function validationUser(){
      let result = true;
      if(username === ''|| username === null){
        result = false;
        toast.warning('Please Fill the Username');
      }
      if(password === ''|| password === null){
        result = false;
        toast.warning('Please Fill the PassWord');
      }


      return result;
  }

  return (
    <>
      <div className="container">
      <div className="card p-4">
      <h1 className='text-center'>User Registraion</h1>
         <form action="" onSubmit={loginCheck}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <fieldset>
                                            <label htmlFor="">User Name:</label> <span className='error text-red'>*</span>
                                            <input type="text" value={username} onChange={e => setUserName(e.target.value)} className='form-control mt-3' />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-6">
                                        <fieldset>
                                            <label htmlFor="">PassWord</label> <span className='error text-red'>*</span>
                                            <input type="text" value={password} onChange={e => setNewPassword(e.target.value)} className='form-control mt-3' />
                                        </fieldset>
                                    </div>
      
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className='btn btn-primary' type='submit'>Login</button>
                                <Link className='btn btn-secondary ms-4' to={'/registraion'}>New user</Link>

                            </div>
                        </form>
                        </div>
      </div>
    </>
  )
}

export default Login