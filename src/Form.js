import React, { useState } from "react";

function MyForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    java: false,
    csharp:false,
    python:false,
    javascript:false
  });

  function handleChange(event) {
    const {name, value,type,checked} = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        // [event.target.name]: event.target.value,
        [name]: type==="checkbox" ?checked : value
      };
    });
  }

  console.log(formData);

  return (
    <form>
      <div className="box">
        <h2>Inputs</h2>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />
        <input
          type="email"
          placeholder="Email Address"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
      </div>

      <div className="box">
            <h2>Textarea</h2>
            <textarea
                type="text"
                placeholder="Your Comment goes here"
                onChange={handleChange}
                name="comment"
                value={formData.comment}
            />
      </div>
      <div className="box">
        <h2>CheckBox</h2>
        <label htmlFor="">Programming languages</label>    
        <div className="">
            <input 
                type="checkbox" 
                onChange={handleChange}
                checked={formData.java} 
                id="java"
                name="java"/>    
            <label htmlFor="java">Java</label> 

            <input 
                type="checkbox" 
                onChange={handleChange}
                checked={formData.csharp} 
                id="csharp"
                name="csharp"/>    
            <label htmlFor="csharp">C Sharp</label> 

            <input 
                type="checkbox" 
                onChange={handleChange}
                checked={formData.python} 
                id="python"
                name="python"/>    
            <label htmlFor="python">Python</label> 

            <input 
                type="checkbox" 
                onChange={handleChange}
                checked={formData.javascript} 
                id="javascript"
                name="javascript"/>    
            <label htmlFor="javascript">JavaScript</label> 
        </div>
    </div>          
    </form>
  );
}

export default MyForm;
