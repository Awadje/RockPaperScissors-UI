import React, { PureComponent } from 'react'
import { connect } from 'react-redux'




class Weapon extends React.Component {
  constructor() {
    super();
    this.state = {
      value: null,
    };
  }


  render() {
    console.log(this.props)
    return (



      <button onClick={() => (actions.change('', ''))}>
      Choose
      </button>

    );
  }
}

// const mapStateToProps = ({ weapon }) => ({ weapon })
export default Weapon
