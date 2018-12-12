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
    let squadList = this.state.squadList;
    const selectedPlayer = squadList.filter(player => player.selected)[0]
    if(!selectedPlayer) {
      alert("No selected player")
      squadList[clickedPlayer.index].selected = true;
      this.setState({ squadList });
      return
    }
    if(selectedPlayer.index === clickedPlayer.index) {
      squadList[selectedPlayer.index].selected = false;
      this.setState({ squadList });
      return
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