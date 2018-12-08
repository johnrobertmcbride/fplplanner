import React from 'react'
import Squad from './Squad'
import squadList from './squadList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squadList1: squadList,
      squadList2: squadList,
      squadList3: squadList
    }
  }

  handleSub = (squadList, player) => {

  }

  render() {
    return (
      <div class="app-container">
        <Squad squadList={this.state.squadList1}/>
        <Squad squadList={this.state.squadList2}/>
        <Squad squadList={this.state.squadList3}/>
      </div>
    )
  }
}

export default App