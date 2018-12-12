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

  handleSub = (clickedPlayer) => {
    console.log("Clicked:")
    console.log(clickedPlayer.name)
    let squadList = this.state.squadList;
    const selectedPlayer = squadList.filter(player => player.selected)[0]
    if(selectedPlayer) {
      console.log("Selected:")
      console.log(selectedPlayer.name)
    }
    // if no selected player
    if(!selectedPlayer) {
      console.log("No player selected")
      squadList[clickedPlayer.index].selected = true;
      this.setState({ squadList });
      return
    }
    // if selectedPlayer reclicked
    if(clickedPlayer.index === selectedPlayer.index) {
      console.log("Selected player reclicked")
      squadList[selectedPlayer.index].selected = false;
      this.setState({ squadList });
      return
    }
    // if both players are starting
    if(selectedPlayer.starting && clickedPlayer.starting) {
      console.log("Both players are starting")
      return
    }
    // make the substitution
    console.log("Make the substitution")
    const tempStarting = selectedPlayer.starting
    const tempBenchPosition = selectedPlayer.benchPosition
    squadList[selectedPlayer.index].starting = clickedPlayer.starting
    squadList[selectedPlayer.index].benchPosition = clickedPlayer.benchPosition

    squadList[clickedPlayer.index].starting = tempStarting
    squadList[clickedPlayer.index].benchPosition = tempBenchPosition

    squadList[selectedPlayer.index].selected = false

    // if constraints met then commit the substition
    const newStartingPlayers = squadList.filter(player => player.starting)
    const newStartingGKs = newStartingPlayers.filter(player => player.type === "GK").length
    const newStartingDEFs = newStartingPlayers.filter(player => player.type === "DEF").length
    const newStartingFWDs = newStartingPlayers.filter(player => player.type === "FWD").length
    console.log(newStartingGKs)
    console.log(newStartingDEFs)
    console.log(newStartingFWDs)

    if(newStartingGKs === 1 && newStartingDEFs > 2 && newStartingFWDs > 0) {
      console.log("Constraints met!")
      this.setState({ squadList })
    } else {
      console.log("Constraints not met!")
    }

  }

  render() {
    return (
      <div className="app-container">
        <Squad
        squadList={this.state.squadList}
        handleSub={this.handleSub}/>
      </div>
    )
  }
}

export default App