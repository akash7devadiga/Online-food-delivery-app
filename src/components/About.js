
import UserContext from '../utils/UserContext';
import UserClass from './UserClass';
import { Component } from 'react';

class About extends Component {
  constructor(props) {
    //console.log('Parent Constructor called');

    super(props);
  }

  componentDidMount() {
    //console.log('Parent Mounted');

  }

  render() {
    // console.log('Parent render called')
    return (
      <>
        <h1>Food App</h1>
        <div>
          user info:
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass />
      </>
    );
  }
}

export default About;