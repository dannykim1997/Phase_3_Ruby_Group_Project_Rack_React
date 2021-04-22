import React from 'react';
import './App.css';
import EventContainer from './components/EventContainer';
import InfoCard from './components/InfoCard';

URL = "http://localhost:9393"
class App extends React.Component {

  state = {
    events: [],
    moreInfo: false,
    selected: {}
  }

  componentDidMount() {
    fetch(`${URL}/events`)
    .then(res => res.json())
    .then(eventData => {
      this.setState({
        events: eventData
      })
    })
  }

  sort(e) {
    fetch(`${URL}/${e.target.value}`)
    .then(res => res.json())
    .then(dateData => {
      console.log(e.target.value)
      this.setState({
        events: dateData
      })
    })
  }

  selected(e) {
    fetch(`${URL}/${e.target.value}`)
    .then(res => res.json())
    .then(byAttraction => {
      e.target.value !== "default" ? this.setState({selected: byAttraction}) : this.setState({selected: {}})
    })
  }

  showInfo = (e) => {
    this.setState({moreInfo: true})
    console.log(e.target.parentElement)
  }

  render() {
    
    return (
    
    <div>
      <header>🔥🔥🔥litnight🔥🔥🔥</header>
      <div>
        <form className="form">
          <select onChange={(e) => this.sort(e)} className="custom-select">
            <option value="events">default</option>
            <option value="dates">sort by dates</option>
            <option value="high"> sort by price high</option>
            <option value="low">sort by price low</option>
            <option value="max">most popular attraction</option>
            <option value="min">least popular attraction</option>
          </select>
        </form>
      </div>
      <div>
          <EventContainer eventData={this.state.events} showInfo={this.showInfo} moreInfo={this.state.moreInfo} selected={this.state.selected}/> 
      </div>
    </div>
  );  
  }
}

export default App;
