import React, { useState } from 'react'
import './NewUserForm.css'
import { v4 as RandomNumbers } from 'uuid'


function NewUserForm({ AddNewUsers }) {

    const [UserForm, setUserForm] = useState({
        image: "",
        firstname: "",
        secondname: "",
        age: null,
        job: "",
        location: "",
        gender: "",
        id: RandomNumbers()
    })


    const handleUserForms = (e) => {
        e.preventDefault()
        AddNewUsers(UserForm)
    }



  return (
    <div className='modal-wrapper'>
        <div className='overlay'>
            <div className='modal'>
                <form onSubmit={handleUserForms}>
                    <label>
                        <span> Enter img URL </span>
                        <input type="img" required onChange={(e) => {setUserForm((previousData) => {
                            return {...previousData, image: e.target.value}
                        })}}/>
                    </label>
                    <label >
                        <span> Enter your firstname </span>
                        <input type="text" required onChange={(e) => {setUserForm((previousData) => {
                            return {...previousData, firstname: e.target.value}
                        })}}/>
                    </label>
                    <label >
                        <span> Enter your secondname </span>
                        <input type="text" required onChange={(e) => {setUserForm((previousData) => {
                            return {...previousData, secondname: e.target.value}
                        })}}/>
                    </label>
                    <label >
                        <span> Enter your age </span>
                        <input type="number" required onChange={(e) => {setUserForm((previousData) => {
                            return{...previousData, age: e.target.value}
                        })}}/>
                    </label>
                    <label >
                        <span> Enter your location </span>
                        <input type="text" required onChange={(e) => {setUserForm((previousData) => {
                            return {...previousData, location: e.target.value}
                        })}}/>
                    </label>
                    <label >
                        <span> Enter your job </span>
                        <input type="text" required onChange={(e) => {setUserForm((previousData) => {
                            return {...previousData, job: e.target.value}
                        })}}/>
                    </label>
                    <div className='gender'>
                        <span> Enter your gender </span>
                        <label>
                            <small> Female </small>
                            <input type="radio" onChange={(e) => {setUserForm((previousData) => {
                                return {...previousData, gender: e.target.value}
                            })}} name='gender' required value="Female"/>
                        </label>
                        <label>
                            <small> Male </small>
                            <input type="radio" onChange={(e) => {setUserForm((previousData) => {
                                return {...previousData, gender: e.target.value}
                            })}} name='gender' required value="Male"/>
                        </label>
                    </div>
                    <button className='modal-btn'> Submit </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default NewUserForm