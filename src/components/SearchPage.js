import React, { useState } from "react";

export default function SearchPage(props) {
  console.log(props)
 
  return (
    <section className="search-page">
     
     <form>
       <label htmlFor = 'name'>Name</label>
       <input
         id = 'name'
         type = 'text'
         name = 'textfield'
         onChange = {props.handleChange}
         value = {props.searchBox}
         />
     </form>
    </section>
  );
}