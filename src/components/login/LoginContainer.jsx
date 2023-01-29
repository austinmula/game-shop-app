import "./login.scss";
export default function LoginContainer() {
  const handleSubmit = () => {};
  const handleChange = () => {};
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
      </div>
    </div>
  );
}
