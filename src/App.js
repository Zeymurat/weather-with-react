
import React, { Component } from 'react'
import Search from './components/Search';
import CityDetails from './components/CityDetails';
import Alert from './components/Alert';

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherInfo: "",
      error: null
    }
  }
  searchCity=(keyword) => {
    if(keyword.length > 0){
      this.setState();
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + keyword + "&units=metric&appid=e763c3a4c7d7983d557f48eaf57baba8")
        .then(response => response.json())
        .then(data => this.setState({ weatherInfo: data,}));
    }
  }
  displayAlert = (msg, type) => {
    this.setState({error:{msg: msg, type:type}});
    setTimeout(()=>{
      this.setState({error:null});
    }, 3000);
  }
  render() {
    return (
      <div style={{background:'#eaeaea73', borderRadius: '30px', maxWidth:'max-width: 25%'}}className="card">
        <Search displayAlert={this.displayAlert} searchCity={this.searchCity}/>
        <Alert error={this.state.error} />
        <CityDetails weatherInfo={this.state.weatherInfo}/>
      </div>
    )
  }
}

export default App;
