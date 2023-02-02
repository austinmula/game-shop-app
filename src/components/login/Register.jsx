import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./login.scss";
export default function Register() {
  const [Inputdata, setInputData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    let currentItem = {
      [name]: value,
    };

    const updatedInput = {
      ...Inputdata,
      ...currentItem,
    };

    setInputData(updatedInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Inputdata.password && Inputdata.email) {
      registerUser(Inputdata);
    }
  };

  const registerUser = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:4001/auth/register",
        data
      );
      if (response.data) {
        navigate("/login");
      }
    } catch (error) {}
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <h3>Register</h3>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <input
              placeholder="Email Address"
              type="email"
              tabIndex="2"
              required
              name="email"
              onChange={handleChange}
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="User Name"
              type="name"
              tabIndex="2"
              required
              name="name"
              onChange={handleChange}
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Enter password"
              type="password"
              tabIndex="3"
              required
              name="password"
              onChange={handleChange}
            />
          </fieldset>

          <button name="submit" type="submit" id="contact-submit">
            Submit
          </button>
        </form>
        <p className="pt-4 text-sm">
          Already have an account ? <Link to="/login">Log in</Link>{" "}
        </p>
      </div>
    </div>
  );
}
