import React from 'react';
import './App.css';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }

render() {
  return(
    <div>
      <SignInAndSignUpPage />
    </div>
  );}
}

export default App;
