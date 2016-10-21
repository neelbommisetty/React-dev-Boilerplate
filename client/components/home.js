import React from 'react';

/*
    Webpack cannot hot reload stateless functions even though it is the best practice here.
    for the sake of hot reloading we disbale lint.
    for further similar cases use the same comment // eslint-disable-line react/prefer-stateless-function
 */

class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <h1>It works awesome Okay one more try!!</h1>
    );
  }
}
export default Home;
