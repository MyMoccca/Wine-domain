import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactPage() {
  const [formData, setFormData] = useState({
    user_firstName: "",
    user_lastName: "",
    user_email: "",
    user_message: "",
  });
  const form = useRef();
  const [formError, setFormError] = useState({});
  const onChangeHandler = (event) => {
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  /* VALIDATION FORM */
  const validateForm = () => {
    const err = {};
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (formData.user_firstName === "") {
      err.user_firstName = "Il manque votre prenom!";
    }
    if (formData.user_lastName === "") {
      err.user_lastName = "Il manque votre nom!";
    }
    if (!regex.test(formData.user_email)) {
      err.user_email = "Pas de message sans votre email!";
    }
    setFormError({ ...err });
    return Object.keys(err).length < 1;
  };

  /* SEND FORM */
  const sendEmail = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      emailjs
        .sendForm(
          "service_dbwxt5z",
          "Template_narval01",
          form.current,
          "D_XtUCzs448Q6k9Ym"
        )
        .then(() => {
          // eslint-disable-next-line no-alert
          alert(
            "Merci pour le message ! Les Superheros sont à votre disoposition !"
          );
        })

        .catch(() => {
          // eslint-disable-next-line no-alert
          alert("Il y a un problème...");
        });
    } else {
      // eslint-disable-next-line no-alert
      alert(
        "Vous avez besoin des superpower pour remplir le forumulaire ? Essayez encore une fois!"
      );
    }
  };
  /* FORM HTML */
  return (
    <div>
      <div className="container-form">
        <h1 className="contactTitle">Contactez nous</h1>

        <h3>
          {" "}
          ☎️ <span className="big-number">06</span>🍇
          <span className="big-number">33</span>🍇
          <span className="big-number">11</span>🍇
          <span className="big-number">08</span>🍇
          <span className="big-number">07 </span>
        </h3>
        <h4>
          <a
            href="mailto: gaetan.esclarmonde@orange.fr"
            className="email-contact"
          >
            📩 envoyer le mail
          </a>
        </h4>
        <form className="ContactForm" ref={form} onSubmit={sendEmail}>
          <label className="LabelForm">
            Prénom
            <input
              name="user_firstName"
              type="text"
              id="firstName"
              className="firstname formEntry animated"
              placeholder="Prenom"
              value={formData.user_firstName}
              onChange={onChangeHandler}
            />
          </label>
          <span className="non-valid">{formError.user_firstName}</span>
          <label className="LabelForm">
            Nom
            <input
              name="user_lastName"
              type="text"
              id="lastName"
              className="name formEntry animated"
              placeholder="Nom"
              value={formData.user_lastName}
              onChange={onChangeHandler}
            />
          </label>
          <span className="non-valid">{formError.user_lastName}</span>
          <label className="LabelForm">
            Adresse mail
            <input
              name="user_email"
              type="text"
              id="email"
              className="email formEntry animated"
              placeholder="Email"
              value={formData.user_email}
              onChange={onChangeHandler}
            />
          </label>
          <span className="non-valid">{formError.user_email}</span>
          <label className="LabelForm">
            Message
            <textarea
              name="user_message"
              id="message"
              className="message formEntry"
              placeholder="Votre message"
              value={formData.user_message}
              onChange={onChangeHandler}
            />
          </label>
          <span className="non-valid">{formError.user_message}</span>
          <br />

          <button
            type="submit"
            className="btn-articles contact-btn send"
            value="Send Email"
          >
            <span className="btn__circle red__cercle" />
            <span className="btn__white-circle">
              <svg id="icon-arrow-right" viewBox="0 0 21 12">
                <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z" />
              </svg>
            </span>
            <span className="btn__text contact-btn-text"> Envoyer</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
