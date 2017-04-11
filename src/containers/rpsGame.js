import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


class rpsGame extends PureComponent {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Paper style={{ padding: 48, width: 500, margin: '50px auto' }} zDepth={1}>
        <h1>Game</h1>
          <div style={{ margin: '24px 0 0', textAlign: 'right' }}>
          <RaisedButton label="Rock" primary={true} style={{ marginRight: '1rem' }} />
          <RaisedButton label="Paper" primary={true} style={{ marginRight: '1rem' }} />
          <RaisedButton label="Scissors" primary={true} style={{ marginRight: '1rem' }} />
        </div>
      </Paper>
    )
  }
}

export default connect(null, { rpsGame })(rpsGame)
