import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PostWeapon from '../../actions/rpsgame/postWeapon'
import './Playfield.sass'




class Playfield extends React.Component {



PostWeapon(weapon) {
   if (weapon==="Rock") {
   window.alert("You chose the Rock as your weapon! Let's fight");
   }
   else if (weapon==="Paper") {
     window.alert("You chose money as your weapon! Let's fight!");
   }
   else {
     window.alert("You chose Edward Scissorhands as your weapon! Let's fight!")
   }
 }

  render() {
    const { GameId } = this.props.params
    const currentGame =
      this.props.games.filter(function(element) {
        return element._id === GameId
      })[0]



    return (
      <div className = "playfield">
      <h1>Welcome to {currentGame.title}</h1>
      <h1>CHOOSE YOUR WEAPON!</h1>

          <div className="board-row">
          <center><button onClick={() => {this.props.PostWeapon(1, GameId)}}><img src="https://res.cloudinary.com/dnbyfobad/image/upload/v1492276214/rock-eyebrow_g7yazh.jpg" /><p>the ROCK </p></button>
            <button onClick={() => {this.props.PostWeapon(2, GameId)}}><img src="https://res.cloudinary.com/dnbyfobad/image/upload/v1492276269/money2_pzai3c.jpg" /><p>$$$ PAPER $$$</p></button>
              <button onClick={() => {this.props.PostWeapon(3, GameId)}}><img src="https://res.cloudinary.com/dnbyfobad/image/upload/v1492276208/scissors_arodfu.jpg" /><p>SCISSORS guy? </p></button></center>
        </div>
        <h1>WINNER: {currentGame.winner}</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ games }) => ({ games })
export default connect(mapStateToProps, { PostWeapon })(Playfield)
