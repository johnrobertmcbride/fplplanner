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
    }
    console.log(this.state.squadList[`${player.position}`])
  }

  render() {
    return (
      <div class="app-container">
        <Squad squadList={this.state.squadList} handleSub={this.handleSub}/>
      </div>
    )
  }
}

export default App