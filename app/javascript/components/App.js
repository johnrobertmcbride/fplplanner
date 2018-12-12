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
    let squadList = this.state.squadList
    let storedPlayer = this.state.storedPlayer
    const storedPlayerIndex = squadList["Bench"].findIndex((element) => {
      return element.name === storedPlayer.name;
    });
    const playerIndex = squadList[player.type].findIndex((element) => {
      return element.name === player.name;
    });

    squadList["Bench"].splice(storedPlayerIndex, 1)
    squadList["Bench"].push(player)
    squadList[player.type].splice(playerIndex, 1)
    squadList[storedPlayer.type].push(storedPlayer)

    if(squadList.DEF.length < 3 || squadList.FWD.length < 1) {
      return
    }

    this.setState({ squadList: squadList, storedPlayer: {}, firstPress: true })
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
    // if stored player was a subOut
    if(this.state.subStatus == "subOut") {
      let squadList = this.state.squadList
      let storedPlayer = this.state.storedPlayer
      const storedPlayerIndex = squadList[storedPlayer.type].findIndex((element) => {
        return element.name === storedPlayer.name;
      });
      const playerIndex = squadList["Bench"].findIndex((element) => {
        return element.name === player.name;
      });

      squadList[storedPlayer.type].splice(storedPlayerIndex, 1)
      squadList[player.type].push(player)
      squadList["Bench"].splice(playerIndex, 1)
      squadList["Bench"].push(storedPlayer)

      if(squadList.DEF.length < 3 || squadList.FWD.length < 1) {
        return
      }

      this.setState({ squadList: squadList, storedPlayer: {}, firstPress: true })
    }
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
    let squadList = this.state.squadList
    let storedPlayer = this.state.storedPlayer
    const storedPlayerOldGroup = storedPlayer.currentGroup
    const playerOldGroup = player.currentGroup
    player.currentGroup = storedPlayerOldGroup
    storedPlayer.currentGroup = playerOldGroup
    squadList[storedPlayerOldGroup][0] = player
    squadList[playerOldGroup][0] = storedPlayer
    this.setState({ squadList: squadList, storedPlayer: {}, firstPress: true })
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