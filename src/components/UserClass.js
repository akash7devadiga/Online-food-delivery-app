import React from 'react';
import UserContext from '../utils/UserContext';

class UserClass extends React.Component {

  constructor() {
    //console.log('Constructor called');

    super();

    this.state = {
      userInfo: {
        name: "",
        location: ""
      }
    }
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json()


    this.setState({
      userInfo: json,
    })

    console.log(json)

  }


  render() {
    const { name, location } = this.state.userInfo;

    return (

      <div className="user-card">
        <h2>Name: {name}  </h2>
        <h3>Location: {location} </h3>

      </div>
    )
  }

}

export default UserClass;