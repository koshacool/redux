import React from 'react';
import { connect } from 'react-redux';
import './styles/index.scss';

class App extends React.Component {

  render() {      
    return (
      <div className="content">
        My counter: state {this.props.counter}
        <button onClick={this.props.onIcrement}> + </button>
        <button onClick={this.props.onDecrement}> - </button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIcrement() {
      dispatch({ type: 'INCREMENT' })
    },
    onDecrement() {
      dispatch({ type: 'DECREMENT' })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
