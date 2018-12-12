import React from 'react'
import Player from './Player'

class Squad extends React.Component {
  constructor(props) {
    super(props)
  }
  startingPlayers = this.props.squadList.filter(squadPlayer => squadPlayer.starting)
  benchPlayers = this.props.squadList.filter(squadPlayer => !squadPlayer.starting)

  renderStartingPlayers = (group) => {
    return (
      <div className="squad-group">
        {this.startingPlayers.filter(startingPlayer => startingPlayer.type === group).map(startingPlayer => <Player player={startingPlayer} handleSub={this.props.handleSubOut} />)}
      </div>
    )
  }

  renderBenchPlayers = (index) => {
    return (
      this.benchPlayers.filter(benchPlayer => benchPlayer.benchPosition === index).map(benchPlayer => <Player player={benchPlayer}/>)
    )
  }

  render() {
    return (
      <div className="squad-container">
        {this.renderStartingPlayers("GK")}
        {this.renderStartingPlayers("DEF")}
        {this.renderStartingPlayers("MID")}
        {this.renderStartingPlayers("FWD")}
        <div className="squad-group bench-container">
        {this.renderBenchPlayers(0)}
        {this.renderBenchPlayers(1)}
        {this.renderBenchPlayers(2)}
        {this.renderBenchPlayers(3)}
        </div>
      </div>
    )
  }
}

export default Squad