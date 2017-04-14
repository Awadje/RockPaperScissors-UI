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
      <h1>{currentGame.title}</h1>
      <h1>CHOOSE YOUR WEAPON!</h1>
        <div className="board-row">
          <button onClick={() => {this.props.PostWeapon(1, GameId)}}><img src="https://static.independent.co.uk/s3fs-public/styles/story_medium/public/thumbnails/image/2014/08/21/10/dwayne-the-rock.jpg" /></button>
            <button onClick={() => {this.props.PostWeapon(2, GameId)}}><img src="https://previews.123rf.com/images/sundikov/sundikov0911/sundikov091100021/5910532-Money-on-white-background-Stock-Photo-money-falling-sky.jpg" /></button>
              <button onClick={() => {this.props.PostWeapon(3, GameId)}}><img src="http://www.hollywood-collectibles.com/store/images/D/Edward-Detail-62.jpg" /></button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ games }) => ({ games })
export default connect(mapStateToProps, { PostWeapon })(Playfield)
