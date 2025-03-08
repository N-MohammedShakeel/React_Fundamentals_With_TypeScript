import React from "react";
import Form from "./component/Form";
import ContactForm from "./component/ContactForm";
import EventHandling from "./component/EventHandling";
import FocusInput from "./component/FocusInput";

const App = () => {
  return (
    <div>
      <Form />
      <ContactForm />
      <EventHandling />
      <FocusInput />
    </div>
  );
};

export default App;
