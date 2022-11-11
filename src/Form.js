import React, { useState } from "react";

function MyForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    java: false,
    csharp: false,
    python: false,
    javascript: false,
    education:"",
    bank: ""
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        // [event.target.name]: event.target.value,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

function handleSubmit(event){
      event.preventDefault()

      console.log(formData)

}

  // console.log(formData);

  return (
    <form onSubmit={handleSubmit}>
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
        <div className="checkbox">
          <input
            type="checkbox"
            onChange={handleChange}
            checked={formData.java}
            id="java"
            name="java"
          />
          <label htmlFor="java">Java</label>

          <input
            type="checkbox"
            onChange={handleChange}
            checked={formData.csharp}
            id="csharp"
            name="csharp"
          />
          <label htmlFor="csharp">C Sharp</label>

          <input
            type="checkbox"
            onChange={handleChange}
            checked={formData.python}
            id="python"
            name="python"
          />
          <label htmlFor="python">Python</label>

          <input
            type="checkbox"
            onChange={handleChange}
            checked={formData.javascript}
            id="javascript"
            name="javascript"
          />
          <label htmlFor="javascript">JavaScript</label>
        </div>
        <div className="">
          <h2>Radio Buttons</h2>
           <fieldset >
            <legend>Highest Level of Education</legend>
            <div >
              <input
                type="radio"
                name="education"
                value="masters"
                id="masters"
                onChange={handleChange}
                checked={formData.education === "masters"}
              />
              <label htmlFor="masters">Masters</label> <br />
              <input
                type="radio"
                name="education"
                value="bachelors"
                id="bachelors"
                onChange={handleChange}
                checked={formData.education === "bachelors"}
              />
              <label htmlFor="bachelors">Bachelor</label> <br />
              <input
                type="radio"
                name="education"
                value="diploma"
                id="diploma"
                onChange={handleChange}
                checked={formData.education === "diploma"}
              />
              <label htmlFor="diploma">Diploma</label><br />
              <input
                type="radio"
                name="education"
                value="other"
                id="other"
                onChange={handleChange}
                checked={formData.education === "other"}
              />
              <label htmlFor="other">Other</label> <br />
            </div>
          </fieldset>           
        </div>
      </div>
      <div className="box">
        <h2>Select & Option Elements</h2>
        <label htmlFor="bank">Select Your Best Bank</label>
        <select 
                name="bank" 
                id="bank"
                onChange={handleChange}
                value={formData.bank}
                >
                <option value="">--Select--</option>
                <option value="DTB">DTB</option>
                <option value="KCB">KCB</option>
                <option value="ABSA">ABSA</option>
                <option value="COOP">COOP</option>
                <option value="Other">OTHER</option>
        </select>
      </div>
      <button>Sign Up</button>
    </form>
  );
}

export default MyForm;
