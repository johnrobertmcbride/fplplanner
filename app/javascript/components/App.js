import React from 'react'
import Squad from './Squad'
import squadList from './squadList'
import _ from 'lodash'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squadLists: [
        _.cloneDeep(squadList),
        _.cloneDeep(squadList),
      ]
    }
  }

  handleSub = (squadIndex, clickedPlayer) => {
    this.setState(function (prevState) {
      let squadLists = prevState.squadLists
      let squadList = squadLists[squadIndex]
      const selectedPlayer = squadList.filter(player => player.selected)[0];

      // if no selected player
      if(!selectedPlayer) {
        squadList[clickedPlayer.index].selected = true;
        return { squadLists }
      }

      // if selectedPlayer reclicked
      if(clickedPlayer.index === selectedPlayer.index) {
        squadList[selectedPlayer.index].selected = false;
        return { squadLists }
      }

      // if both players are starting
      if(selectedPlayer.starting && clickedPlayer.starting) {
        return
      }

      // calculate newStartingPlayers
      const newStartingPlayers = squadList.filter(player => player.starting)
      let newStartingGKs = newStartingPlayers.filter(player => player.type === "GK").length
      let newStartingDEFs = newStartingPlayers.filter(player => player.type === "DEF").length
      let newStartingFWDs = newStartingPlayers.filter(player => player.type === "FWD").length
      if(selectedPlayer.type === "GK" && selectedPlayer.starting) {
        newStartingGKs--
      } else if(selectedPlayer.type ==="DEF" && selectedPlayer.starting) {
        newStartingDEFs--
      } else if(selectedPlayer.type === "FWD" && selectedPlayer.starting) {
        newStartingFWDs--
      } else if(selectedPlayer.type === "GK" && !selectedPlayer.starting) {
        newStartingGKs++
      } else if(selectedPlayer.type ==="DEF" && !selectedPlayer.starting) {
        newStartingDEFs++
      } else if(selectedPlayer.type === "FWD" && !selectedPlayer.starting) {
        newStartingFWDs++
      }
      if(clickedPlayer.type === "GK" && clickedPlayer.starting) {
        newStartingGKs--
      } else if(clickedPlayer.type ==="DEF" && clickedPlayer.starting) {
        newStartingDEFs--
      } else if(clickedPlayer.type === "FWD" && clickedPlayer.starting) {
        newStartingFWDs--
      } else if(clickedPlayer.type === "GK" && !clickedPlayer.starting) {
        newStartingGKs++
      } else if(clickedPlayer.type ==="DEF" && !clickedPlayer.starting) {
        newStartingDEFs++
      } else if(clickedPlayer.type === "FWD" && !clickedPlayer.starting) {
        newStartingFWDs++
      }

      // if constraints met
      if(newStartingGKs === 1 && newStartingDEFs > 2 && newStartingFWDs > 0) {
        // make the substitution
        const tempStarting = selectedPlayer.starting
        const tempBenchPosition = selectedPlayer.benchPosition
        squadList[selectedPlayer.index].starting = clickedPlayer.starting
        squadList[selectedPlayer.index].benchPosition = clickedPlayer.benchPosition

        squadList[clickedPlayer.index].starting = tempStarting
        squadList[clickedPlayer.index].benchPosition = tempBenchPosition

        squadList[selectedPlayer.index].selected = false
        return { squadLists }
      }
    })
  }

  render() {
    return (
      <div className="app-container">
        <Squad
        squadIndex={0}
        squadList={this.state.squadLists[0]}
        handleSub={this.handleSub}/>
        <Squad
        squadIndex={1}
        squadList={this.state.squadLists[1]}
        handleSub={this.handleSub}/>
      </div>
    )
  }
}

export default App