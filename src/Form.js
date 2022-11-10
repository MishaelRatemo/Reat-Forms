import React, { useState } from 'react'

function MyForm() {
    const [formData, setFormData] = useState({
        firstName:"", lastName:"", email:""
    })
    
    function handleChange(event){
        setFormData(prevFormData =>{
            return{
                ...prevFormData,
                [event.target.name]:event.target.value
            }
        })
    }

    console.log(formData)

  return (
    <form>
        <h2>Sign Up</h2>
        <input 
            type="text"
            placeholder='First Name'
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}        
        />
        <input 
            type="text"
            placeholder='Last Name'
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}        
        />
        <input 
            type="email"
            placeholder='Email Address'
            onChange={handleChange}
            name="email"
            value={formData.email}        
        />

    </form>
  )
}

export default MyForm