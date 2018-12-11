import React from 'react'
import Squad from './Squad'
import squadList from './squadList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squadList: squadList,
      substitute: []
    }
  }

  handleSub = (player) => {
    if(this.state.substitute.length < 1) {
      let substitute = this.state.substitute;
      substitute.push(player);
      this.setState({ substitute })
    } else {
      const substitute = this.state.substitute[0];
      if(substitute.name === player.name) return;
      if(substitute.type === 'GK' && player.type !== 'GK') return


      const substituteIndex = this.state.squadList[substitute.currentGroup].findIndex((element) => {
        return element.name === substitute.name;
      });
      const playerIndex = this.state.squadList[player.currentGroup].findIndex((element) => {
        return element.name === player.name;
      });
      let squadList = this.state.squadList
      squadList[substitute.currentGroup][substituteIndex] = player
      squadList[player.currentGroup][playerIndex] = substitute
      this.setState({
        squadList: squadList,
        substitute: []
      });
    }
  }

  render() {
    return (
      <div className="app-container">
        <Squad squadList={this.state.squadList} handleSub={this.handleSub}/>
      </div>
    )
  }
}

export default App