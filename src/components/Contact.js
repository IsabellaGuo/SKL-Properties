import React, { useState, useEffect } from "react";
import "../components/Contact.css";
import * as yup from "yup";
import axios from "axios";
import { postData } from '../components/FormService';
import * as emailjs from "emailjs-com";

function Contact() {

  const [formState, setFormState] = useState({
      /* keys matchup with the name in input. We have connection between our state accessing the state with the input with the name attribute */
      firstName: "",
      lastName: "",
      email: "",
      message: ""
  })
  // server error
  const [serverError, setServerError] = useState("");
  //control whether or not the form can be submitted if there are errors in form validation
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true)
  // managing state for errors. empty unless inline validation (validateInput) updates key/value pair to have error
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  // temporary state used to display response from API. this is not a commonly used convention
  const [post, setPost] = useState([]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    //postData(formState)
    emailjs.
      sendForm(
        'gmail', 
        'skl', 
        '.form', 
        'user_DPycxJiGC1kXTQZlNkLZT'
        )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
  }

  //inline validaiton
  const validateChange = (e) => {
    yup
      // get the rules out of schema with reach at key "e.target.name" --> "formSchema[e.target.name]"
      .reach(formSchema, e.target.name)
      .validate(
        e.target.type === "checkbox" ? e.target.checked : e.target.value
      )
      .then((valid) => {
        // the input is passing!
        // the reset of that input's error
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => {
        // the input is breaking form schema
        // if failing validation, set error message into error state (this is used in JSX to display error)

        console.log("err", err);
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };
  // onSubmit function
  const formSubmit = (e) => {
    e.preventDefault(); // <form> onSubmit has default behavior from HTML!

    

    // send out POST request with obj as second param, for us that is formState.
    // trigger .catch by changing URL to "https://reqres.in/api/register" -> see step 7 in notion notes
    axios
      .post("https://reqres.in/api/users", formState)
      .then((resp) => {
        // update temp state with value from API to display in <pre>
        setPost(resp.data);

        // if successful request, clear any server errors
        setServerError(null); // see step 7 in notion notes

        // clear state, could also use a predetermined initial state variable here
        setFormState({
          firstName: "",
          lastName:"",
          email: "",
          message: "",
          
        });
      })
      .catch((err) => {
        // this is where we could create a server error in the form! if API request fails, say for authentication (that user doesn't exist in our DB),
        // set serverError
        setServerError("oops! something happened!");
      });
  };
  //onChange function
  const inputChange = (e) => {
      e.persist();
      //e.target.name --> name of the input that fired the event
      //e.target.value --> current value of the input that fired the event
      const newFormState = {...formState, [e.target.name]:e.target.value}

      setFormState(newFormState)
  }

  // Add a schema, used for all validation to determine whether the input is valid or not
  const formSchema = yup.object().shape({
    firstName: yup.string().required("First name is required."), // must be a string or else error
    lastName: yup.string().required("Last name is required."),
    email: yup.string().email(), // must have string present, must be of the shape of an email
    message: yup.string().required("Any question?"),
    
  });

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      console.log("is my form valid?", valid);

      // valid is a boolean
      // !true === false
      // !false === true
      // if the form is valid, and we take the opposite --> we do not want disabled btn
      // if the form is invalid (false) and we take the opposite (!) --> we will disable the btn
      setButtonIsDisabled(!valid);
    });
  }, [formState]);

   console.log('formState', formState)
  return (
    <div className="contact__main">
      <form className="form" onSubmit={onFormSubmit}>
        <h2>Contact Me</h2>

        <label htmlFor="firstName">
          First Name
          <input
            placeholder="First Name"
            id="firstName"
            type="text"
            name="firstName"
            value={formState.firstname}
            onChange={inputChange}
          />
          {errors.firstName.length > 0 ? <p className="error">{errors.firstName}</p> : null}
        </label>

        <label htmlFor="lastName">
          Last Name
          <input
            placeholder="Last Name"
            id="lastName"
            type="text"
            name="lastName"
            value={formState.lastname}
            onChange={inputChange}
          />
          {errors.lastName.length > 0 ? <p className="error">{errors.lastName}</p> : null}
        </label>

        <label htmlFor="email">
          Email
          <input 
          placeholder="Email" 
          id="email" 
          type="text" 
          name="email"
          value={formState.email} 
          onChange={inputChange}
          />
          {errors.email.length > 0 ? <p className="error">{errors.email}</p> : null}
        </label>

        <label htmlFor="message">
          Message
          <textarea 
          placeholder="Message" 
          id="message" 
          name="message" 
          value={formState.message}
          onChange={inputChange} 
          />
          {errors.message.length > 0 ? <p className="error">{errors.message}</p> : null}
        </label>

        <button type="submit" disabled={buttonIsDisabled}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
