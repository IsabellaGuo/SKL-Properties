import React, { useState, useEffect } from "react";
import "../components/Contact.css";
import * as yup from "yup";
import axios from "axios";
import { postData } from "../components/FormService";
import * as emailjs from "emailjs-com";

function Contact() {
  //managing state for our form inputs
  const [formState, setFormState] = useState({
    /* keys matchup with the name in input. We have connection between our state accessing the state with the input with the name attribute */
    name: "",
    email: "",
    properties: "848 Yates Street",
    message: ""
  });
  // server error
  const [serverError, setServerError] = useState("");

  //control whether or not the form can be submitted if there are errors in form validation
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

  // managing state for errors. empty unless inline validation (validateInput) updates key/value pair to have error
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    properties: "",
    message: ""
  });

  // temporary state used to display response from API. this is not a commonly used convention
  const [post, setPost] = useState([]);

  const onFormSubmit = e => {
    e.preventDefault();
    //postData(formState)
    emailjs
      .sendForm("gmail", "skl", ".form", "user_DPycxJiGC1kXTQZlNkLZT")
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  //inline validaiton
  const validateChange = e => {
    yup
      // get the rules out of schema with reach at key "e.target.name" --> "formSchema[e.target.name]"
      .reach(formSchema, e.target.name)
      .validate(
        e.target.type === "checkbox" ? e.target.checked : e.target.value
      )
      .then(valid => {
        // the input is passing!
        // the reset of that input's error
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch(err => {
        // the input is breaking form schema
        // if failing validation, set error message into error state (this is used in JSX to display error)

        console.log("err", err);
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };
  // onSubmit function
  const formSubmit = e => {
    e.preventDefault(); // <form> onSubmit has default behavior from HTML!

    // send out POST request with obj as second param, for us that is formState.
    // trigger .catch by changing URL to "https://reqres.in/api/register" -> see step 7 in notion notes
    axios
      .post("https://reqres.in/api/users", formState)
      .then(resp => {
        // update temp state with value from API to display in <pre>
        setPost(resp.data);

        // if successful request, clear any server errors
        setServerError(null); // see step 7 in notion notes

        // clear state, could also use a predetermined initial state variable here
        setFormState({
          name: "",

          email: "",
          properties: "848 Yates Street",
          message: ""
        });
      })
      .catch(err => {
        // this is where we could create a server error in the form! if API request fails, say for authentication (that user doesn't exist in our DB),
        // set serverError
        setServerError("oops! something happened!");
      });
  };
  //onChange function
  const inputChange = e => {
    e.persist();
    // necessary because we're passing the event asyncronously and we need it to exist even after this function completes (which will complete before validateChange finishes)
    //e.target.name --> name of the input that fired the event
    //e.target.value --> current value of the input that fired the event
    const newFormState = {
      ...formState,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value
    };

    validateChange(e); // for each change in input, do inline validation
    setFormState(newFormState);
  };

  // Add a schema, used for all validation to determine whether the input is valid or not
  const formSchema = yup.object().shape({
    name: yup.string().required("Name is required."), // must be a string or else error

    email: yup.string().email(), // must have string present, must be of the shape of an email
    properties: yup
      .string()
      .oneOf([
        "848 Yates Street",
        "3990 Cydarwood St",
        "1700 Sheridan Rd",
        "135 Hampton Ave",
        "1678 Freeman Ave",
        "8040 East Saanich Rd",
        "1742 Townley Street",
        "2481 Trent St"
      ]),
    message: yup.string().required("Any question?")
  });

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      console.log("is my form valid?", valid);

      // valid is a boolean
      // !true === false
      // !false === true
      // if the form is valid, and we take the opposite --> we do not want disabled btn
      // if the form is invalid (false) and we take the opposite (!) --> we will disable the btn
      setButtonIsDisabled(!valid);
    });
  }, [formState]);

  console.log("formState", formState);
  return (
    <div className="contact__main">
      <form className="form" onSubmit={onFormSubmit}>
        {serverError && <p className="error">{serverError}</p>}
        <h2>Contact Me</h2>

        <label htmlFor="name">
          Name
          <input
            placeholder="Name"
            id="name"
            type="text"
            name="name"
            value={formState.name}
            onChange={inputChange}
          />
          {errors.name.length > 0 ? (
            <p className="error">{errors.name}</p>
          ) : null}
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
          {errors.email.length > 0 ? (
            <p className="error">{errors.email}</p>
          ) : null}
        </label>

        <label htmlFor="properties">
          Which home would you like to rent?
          {/* multiselect with select HTML Input w/ multiple attributes. 
        Value of option is what is passed into e.target.value when clicked. 
        Value of select is the way to keep formState in sync with the select. 
        We can also use this to preset values as shown with Tabling in formState's initial value. */}
          <select
            id="properties"
            name="properties"
            value={formState.properties}
            onChange={inputChange}
          >
            <option value="">--Choose One--</option>
            {/*e.target.value is value in <option> NOT <select>*/}
            <option value="848 Yates Street">848 Yates Street</option>
            <option value="3990 Cydarwood St">3990 Cydarwood St</option>
            <option value="1700 Sheridan Rd">1700 Sheridan Rd</option>
            <option value="135 Hampton Ave">135 Hampton Ave</option>
            <option value="8040 East Saanich Rd">8040 East Saanich Rd</option>
            <option value="1678 Freeman Ave">1678 Freeman Ave</option>
            <option value="1742 Townley Street">1742 Townley Street</option>
            <option value="2481 Trent St">2481 Trent St</option>
          </select>
          {errors.properties.length > 0 ? (
            <p className="error">{errors.properties}</p>
          ) : null}
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
          {errors.message.length > 0 ? (
            <p className="error">{errors.message}</p>
          ) : null}
        </label>

        <button type="submit" disabled={buttonIsDisabled}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
