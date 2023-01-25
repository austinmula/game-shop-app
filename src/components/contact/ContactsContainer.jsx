import Heading from "../Heading";
import "./contacts.scss";
const ContactsContainer = () => {
  return (
    <>
      <Heading
        title="Contact Us"
        subtitle="Lets address all your questions, concerns and issues."
      />
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 mt-9 p-6">
        <div className="contacts-content">1</div>
        <div className="contacts-form p-3">
          <form id="contact">
            <fieldset>
              <input
                placeholder="Your name"
                type="text"
                tabindex="1"
                required
                autofocus
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Email Address"
                type="email"
                tabindex="2"
                required
              />
            </fieldset>
            <fieldset>
              <input placeholder="Subject" type="list" tabindex="3" required />
            </fieldset>
            <fieldset>
              <textarea
                placeholder="Your Message Here...."
                tabindex="4"
                required
              ></textarea>
            </fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactsContainer;
