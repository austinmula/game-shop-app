import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../actions/auth";
import "./login.scss";
export default function LoginContainer() {
  const [Inputdata, setInputData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  const { isLoggedIn } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Inputdata.password && Inputdata.email) {
      dispatch(loginUser(Inputdata));
    }
  };
  return (
    <div className="login-container">
      <div className="login-form">
        <h3>Login</h3>
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
          Don't have an acoount ? <Link to="/register">Sign Up</Link>{" "}
        </p>
      </div>
    </div>
  );
}
