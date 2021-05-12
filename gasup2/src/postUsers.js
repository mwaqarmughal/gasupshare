import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function Register() {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
const history = useHistory()


async function SignUp(){
  let item={username,password,email}
  console.warn(item)
  let result = await fetch("http://localhost:4000/users", {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
  });
  result = await result.json()
  localStorage.setItem("user-info",JSON.stringify(result))
  history.push("/complaints")
}
  return (
    <div className="offset-3 col-sm-6">
      <h1>Register </h1>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        className="form-control "
        value={username}
        placeholder="username"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control "
        placeholder="password"
      />
      <br />
      <input
        type="text"
        className="form-control "
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        value={email}
      />
      <br />
      <button onClick={SignUp} className="btn btn-primary">Signup</button>
    </div>
  );
}

export default Register
