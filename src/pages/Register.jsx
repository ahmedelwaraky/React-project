import React from 'react'
import  '../Style/Register.css'
import Logo from '../assets/images/logo.png'
import Exam from '../assets/images/Exams-bro.png'

export default function Register() {
return (
    <div>
        <section className='register sec-gap'>
            <div className='exam '>
                <img src={Exam} className="w-25" alt=''/>  
            </div>
            <div className="container">
            <form className="form  w-50 bg-light rounded-5 p-5">
                <div className='main-img'>
                    <img src={Logo} className="w-75" alt=''/>  
                </div>
                <div className='main-header text-center pb-3'>
                    <h1>Sign up Your Account</h1>
                </div>
                <div className='row'>
                    <div className="col-md-6">
                        <div className='firstName py-2'>
                            <label for="firstName" class="form-label">First Name</label>
                            <input type="text" class="form-control rounded-5 " id="firstName" placeholder=""/>
                        </div>                          
                        <div className='grade py-2'>
                            <label for="gender" class="form-label">Gender</label>
                            <input type="text" class="form-control rounded-5" id="gender" placeholder=""/>
                        </div>                
                        <div className='grade py-2'>
                            <label for="grade" class="form-label">Grade Level | Specialization</label>
                            <select class="form-select rounded-5" aria-label="Default select example">
                                <option value="1">Select your grade</option>
                                <option value="1">Grade 1</option>
                                <option value="2">Grade 2</option>
                                <option value="2">Grade 3</option>
                                <option value="2">Grade 4</option>
                                <option value="2">Grade 5</option>
                                <option value="2">Grade 6</option>
                                <option value="2">Grade 7</option>
                                <option value="2">Grade 8</option>
                                <option value="2">Grade 9</option>
                            </select>
                        </div>                
                    </div>

                    <div className="col-md-6">
                        <div className='lastName py-2'>
                            <label for="lastName" class="form-label">Last Name</label>
                            <input type="text" class="form-control rounded-5" id="lastName" placeholder=""/>
                        </div>     
                        <div className='type py-2'>
                            <label for="type" class="form-label">Type</label>
                            <select class="form-select rounded-5" aria-label="Default select example">
                                <option value="1">Select you type</option>
                                <option value="1">Teacher</option>
                                <option value="2">Student</option>
                            </select>
                        </div>  
                        <div className='birthdata py-2'>
                            <label for="birthdata" class="form-label">Birthdate</label>
                            <input type="date" class="form-control rounded-5" id="birthdata" placeholder=""/>
                        </div>     
                    </div>

                    <div className='phoneNumber py-2'>
                        <label for="phoneNumber" class="form-label">Phone Number</label>
                        <input type="tel" class="form-control rounded-5" id="phoneNumber" placeholder=""/> 
                    </div>

                    <div className='email py-2'>
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control rounded-5" id="email" placeholder=""/> 
                    </div>
                    <div className='password py-2'>
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control rounded-5" id="password" placeholder=""/> 
                    </div>
                </div>
                <div className='py-2'>
                    <span>You have an account? <a className='text-dark'>Sign in</a></span>
                </div>
                <div  className='signupBtn'>
                    <button className='btn rounded-5 col-12 text-white'>Sign Up</button>
                </div>
                </form>
            </div>
        </section>
    </div>
)
}
