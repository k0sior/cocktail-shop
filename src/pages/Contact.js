import React from 'react'

const Contact = () => {

  function submitMessageForm () {
    let email = document.getElementById("email-input").value;
    let message = document.getElementById("message-textarea").value;
    let yourMessage = `Email: ${email}, wiadomość: ${message}`
    document.getElementById("message-preview").innerHTML = yourMessage;
  }

  const handleSubmit = (e) => {
    submitMessageForm();
    e.preventDefault();
  }

  return (
    <section className="section-contact">
      <fieldset className="contact-fieldset">
        <legend>Formularz kontaktowy</legend>
        <form className="contact-form" id="message-form">
          <label htmlFor="email" id="email-label">
            Twój email
            <br />
            <input
              name="email"
              type="email"
              id="email-input"
              required
            />
          </label>
          <label
            htmlFor="message"
            id="message-label"
            form="message-form"
          >
            Twoja wiadomość
          <textarea
              name="message"
              id="message-textarea"
              cols="70"
              rows="10"
              form="message-form"
              required
            >
            </textarea>
          </label>
          <label htmlFor="permission" id="permission-label">
            <input
              type="checkbox"
              name="permission"
              id="permission"
              value="agreed"
              required
            />
            Zgadzam się na przetwarzanie moich danych osobowych przez Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis laborum quidem vitae eaque. Repudiandae itaque unde vel officia rerum pariatur dignissimos vero eveniet fuga, alias iure quo numquam repellendus fugiat.
          </label>
          <button
            type="submit"
            className="btn btn-primary btn-send-message"
            onClick={handleSubmit}
          >
            Wyślij
          </button>
        </form>
      </fieldset>
      <br/>
      <h4 id="message-preview">podgląd</h4>
    </section>
  )
}

export default Contact
