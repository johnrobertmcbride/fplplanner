import React from 'react'
import Player from './Player'

class Squad extends React.Component {
  constructor(props) {
    super(props)
  }

  renderGK = () => {
    return (
      this.props.squadList.GK.map(player => <Player player={player} handleSub={this.props.handleSub} />)
    )
  }

  renderDEF = () => {
    return (
      this.props.squadList.DEF.map(player => <Player player={player} handleSub={this.props.handleSub} />)
    )
  }

  renderMID = () => {
    return (
      this.props.squadList.MID.map(player => <Player player={player} handleSub={this.props.handleSub} />)
    )
  }

  renderFWD = () => {
    return (
      this.props.squadList.FWD.map(player => <Player player={player} handleSub={this.props.handleSub} />)
    )
  }

  renderGKBench = () => {
    return (
      this.props.squadList.GKBench.map(player => <Player player={player} handleSub={this.props.handleSub} />)
    )
  }

  renderBench = () => {
    return (
      this.props.squadList.Bench.map(player => <Player player={player} handleSub={this.props.handleSub} />)
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