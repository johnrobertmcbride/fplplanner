import React from 'react'
import Squad from './Squad'
import squadList from './squadList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squadList: squadList,
      storedPlayer: {},
      firstPress: true,
      subStatus: ""
    }
  }

  handleSubOut = (player) => {
    // if first press store player and return
    if(this.state.firstPress) {
      this.setState({ storedPlayer: player, firstPress: false, subStatus: "subOut" })
      return
    }
    // if player = stored player then deselect and return
    if(player.name == this.state.storedPlayer.name) {
      this.setState({ storedPlayer: {}, firstPress: true })
      return
    }
    // if stored player was a subOut or gkSub return
    if(this.state.subStatus == "subOut" || this.state.subStatus == "gkSub") {
      return
    }
    // if player constraints met swap players
    alert("players would be swapped")
    this.setState({ storedPlayer: {}, firstPress: true })
  }

  handleSubIn = (player) => {
    // if first press store player and return
    if(this.state.firstPress) {
      this.setState({ storedPlayer: player, firstPress: false, subStatus: "subIn" })
      return
    }
    // if player = stored player then deselect and return
    if(player.name == this.state.storedPlayer.name) {
      this.setState({ storedPlayer: {}, firstPress: true })
      return
    }
    // if stored player was a gkSub return
    if(this.state.subStatus == "gkSub") {
      return
    }
    // if player constraints met swap players
    alert("players would be swapped")
    this.setState({ storedPlayer: {}, firstPress: true })
  }

  handleGkSub = (player) => {
    // if first press store player and return
    if(this.state.firstPress) {
      this.setState({ storedPlayer: player, firstPress: false, subStatus: "gkSub" })
      return
    }
    // if player = stored player then deselect and return
    if(player.name == this.state.storedPlayer.name) {
      this.setState({ storedPlayer: {}, firstPress: true })
      return
    }
    // if stored player was a gkSub return
    if(this.state.subStatus == "subIn" || this.state.subStatus == "subOut") {
      return
    }
    // if player constraints met swap players
    alert("players would be swapped")
    this.setState({ storedPlayer: {}, firstPress: true })
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