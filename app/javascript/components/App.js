import React from 'react'
import Squad from './Squad'

class App extends React.Component {
  squadList = {
    GK: [
      {
        name: 'Fabianski',
        position: 'GK',
      }
    ],
    DEF: [
      {
        name: 'Alonso',
        position: 'DEF',
      },
      {
        name: 'Alexander-Arnold',
        position: 'DEF',
      },
      {
        name: 'Wan-Bisaka',
        position: 'DEF',
      }
    ],
    MID: [
      {
        name: 'Fraser',
        position: 'MID',
      },
      {
        name: 'Sterling',
        position: 'MID',
      },
      {
        name: 'Mooy',
        position: 'MID',
      },
      {
        name: 'Felipe Anderson',
        position: 'MID',
      }
    ],
    FWD: [
      {
        name: 'Kane',
        position: 'FWD',
      },
      {
        name: 'Wilson',
        position: 'FWD',
      },
      {
        name: 'Aubameyang',
        position: 'FWD',
      }
    ],
    GKBench: [
      {
        name: 'Hamer',
        position: 'GK',
      }
    ],
    Bench: [
      {
        name: 'Sigurdsson',
        position: 'MID',
      },
      {
        name: 'Bennett',
        position: 'DEF',
      },
      {
        name: 'Duffy',
        position: 'DEF',
      }
    ]
  }

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