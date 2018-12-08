import React from 'react'
import Player from './Player'

class Squad extends React.Component {
  constructor(props) {
    super(props)
  }

  renderGK = () => {
    return (
      this.props.squadList.GK.map(player => <Player player={player} />)
    )
  }

  renderDEF = () => {
    return (
      this.props.squadList.DEF.map(player => <Player player={player} />)
    )
  }

  renderMID = () => {
    return (
      this.props.squadList.MID.map(player => <Player player={player} />)
    )
  }

  renderFWD = () => {
    return (
      this.props.squadList.FWD.map(player => <Player player={player} />)
    )
  }

  renderGKBench = () => {
    return (
      this.props.squadList.GKBench.map(player => <Player player={player} />)
    )
  }

  renderBench = () => {
    return (
      this.props.squadList.Bench.map(player => <Player player={player} />)
    )
  }


  render() {
    return (
      <div class="squad-container">
        {this.renderGK()}
        {this.renderDEF()}
        {this.renderMID()}
        {this.renderFWD()}
        <div class="bench-container">
          {this.renderGKBench()}
          {this.renderBench()}
        </div>
      </div>
    )
  }
}

export default Squad