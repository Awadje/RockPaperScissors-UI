import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PostWeapon from '../../actions/rpsgame/postWeapon'




class Playfield extends React.Component {


  render() {
    const { GameId } = this.props.params
    const currentGame =
      this.props.games.filter(function(element) {
        return element._id === GameId
      })[0]


    return (
      <div>
      <h1>{currentGame.title}</h1>
        <div className="board-row">
          <button onClick={() => {this.props.PostWeapon("Rock", GameId)}}>Rock</button>
            <button onClick={() => {this.props.PostWeapon("Paper", GameId)}}>Paper</button>
              <button onClick={() => {this.props.PostWeapon("Scissors", GameId)}}>Scissors</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ games }) => ({ games })
export default connect(mapStateToProps, { PostWeapon })(Playfield)
