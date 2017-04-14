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
          <button onClick={() => { this.submitWeapon("Rock") }}><img src="http://www.clker.com/cliparts/i/w/5/M/Y/x/cartoon-stone-hi.png" /></button>
            <button onClick={() => { this.submitWeapon("Paper") }}><img src="https://s-media-cache-ak0.pinimg.com/236x/36/f3/41/36f3412fe8ff1220a0e74f6b984a73ff.jpg" /></button>
              <button onClick={() => { this.submitWeapon("Scissors") }}><img src="http://www.clipartbest.com/cliparts/Kcn/X4g/KcnX4gg9i.png" /></button>
        </div>
      </div>
    );
  }
}
//
// const mapStateToProps = ({ games }) => ({ games })
// export default connect(mapStateToProps, { postWeapon })(Playfield)
