import { useState } from "react";
import Heading from "../Heading";
import "./contacts.scss";
import { messages } from "../../data/messages";

const ContactsContainer = () => {
  const [Inputdata, setInputData] = useState({});
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
    console.log(Inputdata);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Inputdata.message && Inputdata.email && Inputdata.name) {
      messages.push(Inputdata);
      alert(JSON.stringify(messages, null, 4));
    }
  };
  return (
    <>
      <Heading
        title="Contact Us"
        subtitle="Lets address all your questions, concerns and issues."
      />
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 mt-9 p-6">
        <div className="contacts-content">1</div>
        <div className="contacts-form p-3">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <input
                placeholder="Your name"
                type="text"
                tabIndex="1"
                required
                autoFocus
                name="name"
                onChange={handleChange}
              />
            </fieldset>
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
                placeholder="Subject"
                type="list"
                tabIndex="3"
                required
                name="subject"
                onChange={handleChange}
              />
            </fieldset>
            <fieldset>
              <textarea
                placeholder="Your Message Here...."
                tabIndex="4"
                required
                name="message"
                onChange={handleChange}
              ></textarea>
            </fieldset>
            <button name="submit" type="submit" id="contact-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactsContainer;
