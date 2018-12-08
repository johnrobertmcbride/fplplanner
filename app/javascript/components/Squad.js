import React from 'react'
import Player from './Player'

class Squad extends React.Component {
  constructor(props) {
    super(props)
  }

  renderSquadList = () => {
    return (
      this.props.squadList.map(player => <Player player={player} />)
    )
  }

  render() {
    return (
      <div>
        {this.renderSquadList()}
      </div>
    )
  }
}

export default Squad