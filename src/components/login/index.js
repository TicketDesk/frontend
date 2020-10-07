import { composePlugins } from "next-compose-plugins/lib/compose";
import React, { useState } from "react";
import styles from "../../styles/login.scss";
import axios from "../../utils/axiosDefaults";
import NavBar from "../../page_components/navbar";

<<<<<<< HEAD:src/components/login/index.js
const Login = (props) => {

=======
const Login = () => {
  axios.defaults.baseURL = process.env.API_URL;
  console.log(axios.defaults.baseURL);
>>>>>>> 930b5d4c850d48a3fbe6af5b1a81f0a3043d72ce:pages/login/index.js
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/login", credentials)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <NavBar />
      <div className={styles.login} style={{ background: "blue" }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
