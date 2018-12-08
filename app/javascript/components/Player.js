import React from 'react'

class Player extends React.Component {
  constructor(props) {
    super(props)
  }

  handleSub = () => {
    alert(`Sub ${this.props.player.name}`)
  }

  render() {
    return (
      <div class="player-container">
        <span>{this.props.player.position}</span>
        <span>
          {this.props.player.name}
        </span>
        <span onClick={this.handleSub}>
          Sub
        </span>
      </div>
    )
  }
}

export default Player