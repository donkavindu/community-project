import Form from "./From";

function ContactUs() {
  return (
    <div className="w-full">
      <div className="w-[95%] mx-auto pt-16">
        <div className="text-center">
          <h3 className="text-2xl">LET’S ANSWER FOR YOUR QUERIES</h3>
          <p>
            Have a question or want to get started? Fill out the form below, and
            we’ll get back to you as soon as possible:
          </p>
        </div>
        <div className="py-16">
            <Form/>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
