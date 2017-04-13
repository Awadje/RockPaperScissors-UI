import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Weapon from '../../components/rpsgame/Weapon'
import subscribeToGames from '../../actions/games/subscribe'
import subscribeToUsers from '../../actions/users/subscribe'
import postWeapon from '../../actions/rpsgame/postWeapon'




export default class Playfield extends React.Component {
  // renderWeapon(weapon) {
  //   return <Weapon weapon={weapon} />;
  // }

  // constructor() {
  //   super()
  //
  //   this.state = {
  //     weapon: ''
  //   }
  // }

  componentWillMount() {
    // this.props.subscribeToUsers()
  }

  componentDidUpdate(prevProps) {
    // if (prevProps.weapons.length === this.props.weapons.length) return
    //
    // console.debug(this.refs.weapon.scrollTop, this.refs.weapon.scrollHeight)
    // this.refs.weapon.scrollTop = this.refs.weapon.scrollHeight
  }

  submitWeapon(weapon) {
     const weaponpost = this.refs.weapon.getValue().trim()
     if (weapon === '') return
     this.props.postWeapon(weapon)
     this.setState({
       weapon: ''
     })
   }

  updateWeapon(event) {
    // this.setState({
    //   weapon: event.target.value,
    // })
  }


  render() {

    return (
      <div>
        <div className="board-row">
          <button onClick={() => { this.submitWeapon("Rock") }}>Rock</button>
            <button onClick={() => { this.submitWeapon("Paper") }}>Paper</button>
              <button onClick={() => { this.submitWeapon("Scissors") }}>Scissors</button>
        </div>
      </div>
    );
  }
}
//
// const mapStateToProps = ({ games }) => ({ games })
// export default connect(mapStateToProps, { renderWeapon, subscribeToGames, postWeapon, subscribeToUsers })(Playfield)
