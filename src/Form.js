import React, { useState } from 'react'

function MyForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    // console.log(firstName,lastName)

    function handleFNChange(event){
        setFirstName(event.target.value)
    }
    function handleLNChange(event){
        setLastName(event.target.value)
    }
  return (
    <form>
        <h2>Sign Up</h2>
        <input 
            type="text"
            placeholder='First Name'
            onChange={handleFNChange}        
        />
        <input 
            type="text"
            placeholder='Last Name'
            onChange={handleLNChange}        
        />

    </form>
  )
}

export default MyForm