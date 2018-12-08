import React from 'react'

class Player extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div class="player-container">
        <span>{this.props.player.position}</span>
        <span>
        {this.props.player.name}
        </span>
      </div>
    )
  }
}

export default Player