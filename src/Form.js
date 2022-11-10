import React, { useState } from 'react'

function MyForm() {
    const [formdata, setFormData] = useState({
        firstName:"", lastName:""
    })
    
    function handleChange(event){
        setFormData(prevFormData =>{
            return{
                ...prevFormData,
                [event.target.name]:event.target.value
            }
        })
    }

    console.log(formdata)

//     function handleFNChange(event){
//         setFirstName(event.target.value)
//     }
//     function handleLNChange(event){
//         setLastName(event.target.value)
//     }
  return (
    <form>
        <h2>Sign Up</h2>
        <input 
            type="text"
            placeholder='First Name'
            onChange={handleChange}
            name="firstName"        
        />
        <input 
            type="text"
            placeholder='Last Name'
            onChange={handleChange}
            name="lastName"        
        />

    </form>
  )
}

export default MyForm