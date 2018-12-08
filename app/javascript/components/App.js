import React from 'react'
import Squad from './Squad'

class App extends React.Component {
  squadList = [
    {name: 'Fabianski'},
    {name: 'Hamer'},
    {name: 'Alonso'},
    {name: 'Alexander-Arnold'},
    {name: 'Wan-Bisaka'},
    {name: 'Bennett'},
    {name: 'Duffy'},
    {name: 'Fraser'},
    {name: 'Sterling'},
    {name: 'Mooy'},
    {name: 'Felipe Anderson'},
    {name: 'Sigurdsson'},
    {name: 'Kane'},
    {name: 'Wilson'},
    {name: 'Aubameyang'}
  ]

  render() {
    return (
      <div class="app-container">
        <Squad squadList={this.squadList}/>
        <Squad squadList={this.squadList}/>
        <Squad squadList={this.squadList}/>
      </div>
    )
  }
}

export default App