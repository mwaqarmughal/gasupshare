import React from "react";

import axios from "axios";

export default class GetUser extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
      console.log('working')
    axios.get(`http://localhost:4000/complaints`).then(res => {
        //const user = res.data;
        console.log(res.data)
        this.setState({users: res.data})
        console.log(this.state.users)
        console.log('end')
    })   
}
  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((person) => (
            <li className='list-unstyled'>
              <span className="text-success">Email:</span> {person.email}{" "}
              <br /> <span className="text-success">Complaint:</span>{" "}
              {person.complaints}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
