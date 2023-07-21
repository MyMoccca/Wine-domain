import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import connexion from "../services/connexion";
import { useCurrentUser } from "../contexts/UserContexts";

function Auth() {
  const [userToLog, setUserToLog] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useCurrentUser();
  const navigate = useNavigate();

  const handleUser = (event) => {
    setUserToLog({ ...userToLog, [event.target.name]: event.target.value });
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      const log = await connexion.post("/login", userToLog);
      setUser(log.msg);
      setTimeout(() => {
        navigate("/admin");
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form className="form-container" onSubmit={(event) => login(event)}>
        <h1>Connexion</h1>
        <label className="form-label" htmlFor="form2Example1">
          Email address
        </label>
        <input
          type="email"
          name="email"
          value={userToLog.email}
          onChange={(event) => handleUser(event)}
          className="basic-input"
          required
          pattern="^[\w-\.]+@([\w-])+\.([\w-]{2,4})$"
        />

        <label className="form-label" htmlFor="form2Example2">
          Password
        </label>
        <input
          type="password"
          value={userToLog.password}
          onChange={(event) => handleUser(event)}
          name="password"
          className="basic-input"
          required
        />

        <button className="btn" type="submit">
          <span className="btn__circle" />
          <span className="btn__white-circle">
            <svg id="icon-arrow-right" viewBox="0 0 21 12">
              <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z" />
            </svg>
          </span>
          <span className="btn__text"> Se connecter</span>
        </button>
      </form>
    </div>
  );
}

export default Auth;
