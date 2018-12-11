import React from 'react'
import Player from './Player'

class Squad extends React.Component {
  constructor(props) {
    super(props)
  }

  renderGK = () => {
    return (
      this.props.squadList.GK.map(player => <Player player={player} handleSub={this.props.handleGkSub} />)
    )
  }

  renderDEF = () => {
    return (
      this.props.squadList.DEF.map(player => <Player player={player} handleSub={this.props.handleSubOut} />)
    )
  }

  renderMID = () => {
    return (
      this.props.squadList.MID.map(player => <Player player={player} handleSub={this.props.handleSubOut} />)
    )
  }

  renderFWD = () => {
    return (
      this.props.squadList.FWD.map(player => <Player player={player} handleSub={this.props.handleSubOut} />)
    )
  }

  renderGKBench = () => {
    return (
      this.props.squadList.GKBench.map(player => <Player player={player} handleSub={this.props.handleGkSub} />)
    )
  }

  renderBench = () => {
    return (
      this.props.squadList.Bench.map(player => <Player player={player} handleSub={this.props.handleSubIn} />)
    )
  }


  render() {
    return (
      <div className="squad-container">
        {this.renderGK()}
        {this.renderDEF()}
        {this.renderMID()}
        {this.renderFWD()}
        <div className="bench-container">
          {this.renderGKBench()}
          {this.renderBench()}
        </div>
      </div>
    )
  }
}

export default Squad