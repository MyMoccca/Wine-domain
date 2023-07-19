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
        navigate("/admin/articles");
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="form-container" onSubmit={(event) => login(event)}>
      <input
        type="email"
        name="email"
        value={userToLog.email}
        onChange={(event) => handleUser(event)}
        className="basic-input"
        required
        pattern="^[\w-\.]+@([\w-])+\.([\w-]{2,4})$"
      />
      <label className="form-label" htmlFor="form2Example1">
        Email address
      </label>

      <input
        type="password"
        value={userToLog.password}
        onChange={(event) => handleUser(event)}
        name="password"
        className="basic-input"
        required
      />
      <label className="form-label" htmlFor="form2Example2">
        Password
      </label>

      <button type="submit">Connexion</button>
    </form>
  );
}

export default Auth;
