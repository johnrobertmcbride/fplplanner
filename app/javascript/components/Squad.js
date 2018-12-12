import React from 'react'
import Player from './Player'

class Squad extends React.Component {
  constructor(props) {
    super(props)
  }
  startingPlayers = this.props.squadList.filter(squadPlayer => squadPlayer.starting)

  renderStartingPlayers = () => {
    return (
      this.startingPlayers.map(startingPlayer => <Player player={startingPlayer}/>)
    )
  }

  render() {
    return (
      <div className="squad-container">
        <div className="squad-group">
          {this.renderStartingPlayers()}
        </div>
      </div>
    )
  }
}

export default Squad