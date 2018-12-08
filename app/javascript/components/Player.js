import React from 'react'

class Player extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div class="player-container">
        {this.props.player.name}
      </div>
    )
  }
}

export default Player