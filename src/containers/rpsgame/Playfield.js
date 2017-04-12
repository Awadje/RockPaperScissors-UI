import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Weapon from '../../components/rpsgame/Weapon'



export default class Playfield extends React.Component {
  renderWeapon(weapon) {
    return <Weapon weapon={weapon} />;
  }


  submitWeapon() {
     const weapon = this.refs.weapon.getValue().trim()
     if (weapon === '') return
     this.props.postMessage(weapon)
     this.setState({
       weapon: ''
     })
   }

  render() {

    return (
      <div>
        <div className="board-row">
          <p>Rock {this.renderWeapon("Rock")}</p>
          <p>Paper {this.renderWeapon("Paper")}</p>
          <p>Scissors{this.renderWeapon("Scissors")}</p>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = ({ weapons }) => ({ weapons })
// export default connect(mapStateToProps, { renderWeapon })(Playfield)
