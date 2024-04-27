import React, { useState } from 'react'

const Form = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        emaill: '',
        password: ''
    })
   const handleInput = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    const {name, value} = e.target;
    setFormData({...formData,
        [name]: value
    })
   }

    // const handleName = (e) => {
    //     setName(e.target.value);
    // }
    // const handleEmail = (e) => {
    //     setName(e.target.value);
    // }
    // const handlePassword = (e) => {
    //     setName(e.target.value);
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
       
    }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type='text' name="name" onChange={handleInput}></input>
      </label>
      <label>
        <br/>
        Email
        <input type='email' name="email" onChange={handleInput}></input>
      </label>
      <label>
      <br/>
        Password
        <input type='password' name="password" onChange={handleInput}></input>
      </label>
      <br/>
      <label>
        Submit
        <input type='submit'></input>
      </label>
    </form>
  )
}

export default Form
