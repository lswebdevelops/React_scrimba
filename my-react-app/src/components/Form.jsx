import React from "react";

const Form = () => {
  
  const signUp = (formData) => {
    const data = Object.fromEntries(formData)

    const diataryData = formData.getAll("diataryRestrictions")

    console.log({
      ...data, 
      diataryData
    });
   
   
   
  };
  return (
    <div>
      <section>
        <h1>Signup form</h1>
        <form action={signUp}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            defaultValue="sardanhaluciano@gmail.com"
            name="email"
            placeholder="joe@schmoe.com"
            autoComplete="username email"
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="*****"
            defaultValue="somePassword"
            autoComplete="current-password"
          />
          <br />
          <label htmlFor="description"></label>
          <textarea
            name="description"
            id="description"
            defaultValue="just some text"
          ></textarea>
          <fieldset>
            <legend>Employment Status:</legend>
            <label>
              <input type="radio" name="employmentStatus" value="unemployed" />
              Unemployed
            </label>
            <label>
              <input
                type="radio"
                defaultChecked
                name="employmentStatus"
                value="full-time"
              />
              Full-time
            </label>
            <label>
              <input type="radio" name="employmentStatus" value="part-time" />
              Part-time
            </label>
          </fieldset>
          <hr />

          <fieldset>
            <legend>Dietary restrictions:</legend>
            <label>
              <input
                type="checkbox"
                name="dietaryRestrictions"
                value="Kosher"
              />
              Kosher
            </label>
            <label>
              <input type="checkbox" name="dietaryRestrictions" value="vegan" />
              Vegan
            </label>
            <label>
              <input
                type="checkbox"
                name="dietaryRestrictions"
                value="gluten-free"
              />
              Gluten-free
            </label>
            <label>
              <input
                type="checkbox"
                name="dietaryRestrictions"
                defaultChecked={true}
                value="dairy-free"
              />
              Dairy-free
            </label>
            <label>
              <input
                type="checkbox"
                name="dietaryRestrictions"                
                value="no-restrictions"
              />
              No-Restrictions
            </label>
          </fieldset>

         

          <fieldset>
            <legend>What is your favorite color?</legend>
          <select required name="favColor"  id="favColor">
          <option value="" >-- Choose a color --</option>
            <option value="Red">Red</option>
            <option value="Orange">Orange</option>
            <option value="Yellow">Yellow</option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Gray">Gray</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="Indigo">Indigo</option>
            <option value="Violet">Violet</option>
          </select>

          </fieldset>
          <hr />
          <input type="submit" value="Submit" />
          <hr />

        </form>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
    </div>
  );
};

export default Form;
