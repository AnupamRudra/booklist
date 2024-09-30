/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { useCustomContext } from "../../Context/ContextApi";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const UserSignUp = () => {

    const toastOptions = {
        position: "bottom-right",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };
    const { setUser } = useCustomContext();

    const navigate = useNavigate()
    const [validMailMsg, setValidMailMsg] = useState('')
    const [validCPass, setValidCPass] = useState('')
    const [validPassMsg, setValidPassMsg] = useState('')
    const [input, setInput] = useState({
        username: "",
        email: "",
        password: "",
        confirm_password: "",
    })

    const handleInputValue = (e) => {
        e.preventDefault();
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        setValidMailMsg('')
        setValidPassMsg('')
    }

    const validateEmail = (email) => {
        // Regular expression for a simple email validation
        const isValid = emailRegex.test(email);
        //true for valid mail
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.email) {
            setValidMailMsg('Please set the email')
        }
        else if (!validateEmail(input.email)) {
            setValidMailMsg('Invalid Email')
        }
        else if (!input.password) {
            setValidCPass('Please set the password')
        }
        else if (input.password !== input.confirm_password) {
            setValidPassMsg('Password is not matched')
        }
        else {
            try {
                await axios.post('http://localhost:8001/user/signup', input).then(res => {
                    localStorage.setItem('user_token', res.data.token)
                    setUser(res.data.user)
                    toast.success(res.data.message, toastOptions)
                    setTimeout(() => {
                        navigate('/')
                    }, 2000);
                })
            } catch (error) {
                toast.error(error, toastOptions)
            }
        }
    }

    return (
        <>
            <main className="form-signin w-100 h-100 m-auto">
                <form className="w-lg-40 w-md-60 w-sm-100 mx-auto my-5 p-6rem bg-white radius-5 box-shadow">
                    <h1 className="h3 mb-3 fw-normal">SIGN UP</h1>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput0"
                            placeholder="Username"
                            name='username'
                            onChange={handleInputValue}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput"
                            placeholder="name@example.com"
                            name="email"
                            onChange={handleInputValue}
                        />
                        {validMailMsg ? <span className="text-danger fs-14px fw-500">{validMailMsg}</span> : ''}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleFormControlInput2"
                            placeholder="*******"
                            name="password"
                            onChange={handleInputValue}
                        />
                        {validCPass ? <span className="text-danger fs-14px fw-500">{validCPass} </span> : ''}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleFormControlInput3"
                            placeholder="*******"
                            name="confirm_password"
                            onChange={handleInputValue}
                            aria-describedby="match_pass"
                        />
                        {validPassMsg ? <span className="text-danger fs-14px fw-500">{validPassMsg} </span> : ''}
                    </div>
                    <button
                        className={`btn btn-primary py-2 px-4 my-4 `}
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Sign up
                    </button>
                    <p className="d-flex"> Existing User ! <Link to='/user/login' className="ms-2" >Log In</Link> </p>
                </form>
            </main>
            <ToastContainer />
        </>
    );
};
