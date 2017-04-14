import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import subscribeToGames from '../../actions/games/subscribe'
import subscribeToUsers from '../../actions/users/subscribe'
import postWeapon from '../../actions/rpsgame/postWeapon'
import './Playfield.sass'

export default class Playfield extends React.Component {

  submitWeapon(weapon) {
    console.log(weapon)
    // const weapon = this.refs.weapon.getValue().trim()
    // if (weapon === '') return
    // this.props.postWeapon(weapon)
    // this.setState({
    //   weapon: ''
    // })
  }

  render() {
    return (
      <div className="playfield">
        <h1>CHOOSE YOUR WEAPON!</h1>
        <div className="board-row">
          <button onClick={() => { this.submitWeapon("Rock") }}>ROCK</button>
            <button onClick={() => { this.submitWeapon("Paper") }}>PAPER</button>
              <button onClick={() => { this.submitWeapon("Scissors") }}>SCISSORS</button>
        </div>
      </div>
    );
  }
}
//
// const mapStateToProps = ({ games }) => ({ games })
// export default connect(mapStateToProps, { postWeapon })(Playfield)
