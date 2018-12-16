import React from 'react'

class Player extends React.Component {
  constructor(props) {
    super(props)
  }
  randomFixture = () => {
    const num = Math.ceil(Math.random() * 5)
    if(num == 1) {
      return "-one"
    } else if (num == 2) {
      return "-two"
    } else if (num == 3) {
      return "-three"
    } else if (num == 4) {
      return "-four"
    } else {
      return "-five"
    }
  }

  render() {
    return (
      <div className="player-container">
        <span>{this.props.player.type}: </span>
        <span className="player-name">
          {this.props.player.name}
        </span>
        <span className={`substitute-button ${this.props.player.selected ? 'selected' : ''}`} onClick={() => this.props.handleSub(this.props.squadIndex, this.props.player)}>
          S
        </span>
        <span className={`fixture ${this.randomFixture()}`}>
          FIX
        </span>
      </div>
    )
  }
}

export default Player