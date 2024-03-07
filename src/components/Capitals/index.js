import './index.css'

import {Component} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {capital: countryAndCapitalsList[0].id}

  changeState = event => {
    const capital2 = event.target.value
    this.setState({capital: capital2})
  }

  render() {
    const {capital} = this.state
    const country = countryAndCapitalsList.filter(
      eachItem => eachItem.id === capital,
    )
    const resCountry = country[0].country
    return (
      <div className="main">
        <div className="card">
          <h1 className="h1">Countries And Capitals</h1>
          <div className="selectContainer">
            <select
              onChange={this.changeState}
              value={capital}
              id="select"
              className="select"
            >
              {countryAndCapitalsList.map(eachItem => (
                <option value={eachItem.id} key={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="p1"> is capital of which country?</p>
          </div>
          <p className="p2">{resCountry}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
