import React from 'react'

class Player extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="player-container">
        <span>{this.props.player.position}</span>
        <span>
          {this.props.player.name}
        </span>
        <span className="substitute-button" onClick={() => this.props.handleSub(this.props.player)}>
          Sub
        </span>
      </div>
    )
  }
}

export default Player