import React from 'react'
import Player from './Player'

class Squad extends React.Component {
  constructor(props) {
    super(props)
  }

  calculateFixture = (player) => {
    return this.props.fixtures[player.team]
  }

  renderStartingPlayers = (group) => {
    const startingPlayers = this.props.squadList.filter(squadPlayer => squadPlayer.starting)
    return (
      <div className="squad-group">
        {startingPlayers.filter(startingPlayer => startingPlayer.type === group).map(startingPlayer =>
          <Player
            key={`squad${this.props.squadIndex}-player${startingPlayer.index}`}
            squadIndex={this.props.squadIndex}
            player={startingPlayer} handleSub={this.props.handleSub}
            fixture={this.calculateFixture(startingPlayer)}
          />
        )}
      </div>
    )
  }

  renderBenchPlayers = (index) => {
    const benchPlayers = this.props.squadList.filter(squadPlayer => !squadPlayer.starting)
    return (
      benchPlayers.filter(benchPlayer => benchPlayer.benchPosition === index).map(benchPlayer =>
        <Player
          key={`squad${this.props.squadIndex}-player${benchPlayer.index}`}
          squadIndex={this.props.squadIndex}
          player={benchPlayer}
          handleSub={this.props.handleSub}
          fixture={this.calculateFixture(benchPlayer)}
        />
      )
    )
  }

  render() {
    return (
      <div className="squad-container">
        <h2>{`Gameweek ${this.props.squadIndex}`}</h2>
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