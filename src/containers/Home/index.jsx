import React from 'react'
// import { push } from 'react-router-redux'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addFundsToAddress } from '../../redux/modules/address';

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Welcome home!</p>
    <button onClick={() => props.addFundsToAddress("By9G8M6X1fHMQ4EAJhqhzx8dJchcnBofcN", 1000)}>Add Funds</button>
  </div>
);

export default connect(
  state => ({
    loading: state.loading
  }), {
    addFundsToAddress
  }
)(Home);
