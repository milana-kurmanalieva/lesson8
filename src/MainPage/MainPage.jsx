import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, userFunction } from '../store/PostSlice'

const MainPage = () => {

    const dispatch = useDispatch()
    const {user} = useSelector(state => state.PostSlice)
    const [form, setForm] = useState({
        name: '',
        password: '',
        email: ''
    }) 
    const formValue = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const {name, password, email} = form
        if(setForm(form === user) && name && password&& email) {
            alert('Заполните все поля ')
        } else {
            dispatch(userFunction(form))
        }
    }
  return (
    <div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" name='name' onChange={(e) => formValue(e)}/>
            <input type="password" name='password'onChange={(e) => formValue(e)} />
            <input type="email" name='email' onChange={(e) => formValue(e)}/>
            <button onClick={(e) => handleSubmit(e)}>submit</button>
        </form>
    </div>
  )
}

export default MainPage