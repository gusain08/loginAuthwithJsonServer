import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Registraion = () => {

    const [fname, setFname] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("Male");

    const navigate = useNavigate();

    const isvalidate = () => {
        let isprocedd = true;
        let errormessage = 'Please Enter the Value of ';
        if (fname === null || fname === '') {
            isprocedd = false;
            errormessage += ' Username';
        }
        if (name === null || name === '') {
            isprocedd = false;
            errormessage += ' Last Name Not Blank';
        }
        if (email === null || email === '') {
            isprocedd = false;
            errormessage += ' Email';
        }
        if (password === null || password === '') {
            isprocedd = false;
            errormessage += ' Password ';
        }

        if (!isprocedd) {
            toast.warning(errormessage)
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

            } else {
                isprocedd = false;
                toast.warning('Please enter the valid email ')
            }
        }
        return isprocedd;
    }

    function handleForm(e) {
        e.preventDefault();
        let newData = { fname, name, email, password, phone, country, address, gender }

        if (isvalidate()) {
            fetch('http://localhost:8000/user', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                }, body: JSON.stringify(newData)
            }).then((result) => {
                toast.success('Registerd Succesfully');
                navigate('/login');
            }).catch((error) => {
                toast.error('Faild', +error.message);
            })
        }

    }

    return (
        <>
            <div className='page_wrapper mt-5'>
                <div className="container">
                    <div className="card p-4">
                        <h1 className='text-center'>User Registraion</h1>
                        <form action="" onSubmit={handleForm}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <fieldset>
                                            <label htmlFor="">Name:</label> <span className='error text-red'>*</span>
                                            <input type="text" value={fname} onChange={e => setFname(e.target.value)} className='form-control mt-3' />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-6">
                                        <fieldset>
                                            <label htmlFor="">Last Name:</label> <span className='error text-red'>*</span>
                                            <input type="text" value={name} onChange={e => setName(e.target.value)} className='form-control mt-3' />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-6">
                                        <fieldset>
                                            <label htmlFor="">email:</label> <span className='error text-red'>*</span>
                                            <input type="text" value={email} onChange={e => setEmail(e.target.value)} className='form-control mt-3' />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-6">
                                        <fieldset>
                                            <label htmlFor="">Password:</label> <span className='error text-red'>*</span>
                                            <input type="text" value={password} onChange={e => setPassword(e.target.value)} className='form-control mt-3' />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-6">
                                        <fieldset>
                                            <label htmlFor="">Phone:</label> <span className='error text-red'>*</span>
                                            <input type="number" value={phone} onChange={e => setPhone(e.target.value)} className='form-control mt-3' />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-6">
                                        <fieldset>
                                            <label htmlFor="">Country:</label> <span className='error text-red'>*</span>
                                            <select name="" id="" value={country} onChange={e => setCountry(e.target.value)} className='form-control mt-3'>
                                                <option value="india">India</option>
                                                <option value="usa">USA</option>
                                                <option value="singapure">Singapur</option>
                                            </select>
                                        </fieldset>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <fieldset>
                                            <label htmlFor="" className=' mb-4'  >Address:</label> <span className='error text-red'>*</span>
                                            <textarea value={address} onChange={e => setAddress(e.target.value)} style={{ width: '100%' }} name="" id="" cols="12" rows="2"></textarea>
                                        </fieldset>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <fieldset>
                                            <label htmlFor="" value className=' mt-4'>Gender:</label> <span className='error text-red'>*</span>
                                            <input type="radio" checked={gender === 'Male'} name='gender' value="Male" onChange={e => setGender(e.target.value)} className='m-2' />Male
                                            <input type="radio" name='gender' checked={gender === 'Female'} value="Female" onChange={e => setGender(e.target.value)} className='m-2' />Female

                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className='btn btn-primary' type='submit'>Register</button>
                                <a className='btn btn-secondary ms-4'>Register</a>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Registraion