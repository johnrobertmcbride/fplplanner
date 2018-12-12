import React from 'react'
import Squad from './Squad'
import squadList2 from './squadList2'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squadList: squadList2,
    }
  }

  handleSubOut = (clickedPlayer) => {
    let squadList = this.state.squadList
    const index = squadList.findIndex(function(player) {
      return player.name == clickedPlayer.name
    })
    squadList[index].selected = true
    this.setState({ squadList })
  }

  handleSubIn = (clickedPlayer) => {
    alert(clickedPlayer)
  }

  handleGkSub = (clickedPlayer) => {
    alert(clickedPlayer)
  }

  render() {
    return (
      <div className="app-container">
        <Squad
        squadList={this.state.squadList}
        handleSubOut={this.handleSubOut}
        handleSubIn={this.handleSubIn}
        handleGkSub={this.handleGkSub}/>
      </div>
    )
  }
}

export default App