import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Formik, Field, Form } from "formik";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoggedIn } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submitted");
    // Fake network request for JWT token
    const jwtToken = "fake-jwt-token";
    login(jwtToken);
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="card flex flex-column md:flex-row gap-3">
      <h1>Login</h1>
      <div className="p-inputgroup flex-1">
        <span className="p-inputgroup-addon">
          <i className="pi pi-user"></i>
        </span>

        <Formik
          initialValues={{
            name: "",
          }}
          onSubmit={(value) => {
            console.log(value);
          }}
        >
          <Form onSubmit={handleSubmit}>
            <InputText
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="Username"
            />
            <InputText
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              placeholder="Password"
            />
            <Button type="submit" label="Submit" />
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login;
