import React, { Component } from 'react';
import firebase from './firebase';
import axios from 'axios';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Header from './components/Header/Header';
import ResponseContainer from './components/ResponseContainer/ResponseContainer';
import Footer from './components/Footer/Footer';


const apiKey = `T4ppS0vgQo0YhVouBtsAnFcusw0O72e9rjlL7igvSTjfF2H_FsZYz17lO8d2A7Zpt1tz7TcTOrQmNgGsnUhDBu7wBtzbkZI7SeWxQTq_bXGtxcQ1jnQ1KnpJHhmxXHYx`

const url = `https://api.yelp.com/v3/events?location=toronto`;
const proxy = `https://cors-anywhere.herokuapp.com/`;



class App extends Component {

  constructor() {
    super();
    this.state = {
      category: "",
      start_date: 0,
      onlyFree: false,
      events: [],
      savedEvents: [],
      isLoading: "",
    }
  }

  // take user's event category preference and update state
  handleCategoryChoice = (event) => {
    this.setState({
      category: event.target.value
    })
    console.log(this.state);
  }

  handlePriceChoice = (event) => {
    let priceChoice = event.target.value;
    if (priceChoice === "true") {
      this.setState({
        onlyFree: true
      })
    } else {
      this.setState({
        onlyFree: false
      })
    }
  }

  //trigger API call when user submits form
  handleSubmit = (event) => {
    event.preventDefault();
    this.loadingResults();
    this.getEventsFromAPI();
    console.log(this.state)
  }

  //get a UNIX time stamp so that start date can be updated to today's date
  getTimeStamp = () => {
    //this returns milliseconds
    const time = Date.now();
    //convert millisecond time into regular seconds/ UNIX time and then subtract 14400 seconds to convert from UTC to ET
    const unixTime = Math.floor(time / 1000) - 14400;
    this.setState({
      start_date: unixTime
    })
  }

  // show that results are loading after user submits form
  loadingResults = () => {
    this.setState({
      isLoading: true
    })
  }


  getEventsFromAPI = () => {
    console.log('getting events from API')
    axios({
      url: proxy + url,
      method: `GET`,
      dataType: `json`,
      headers: {
        Authorization: `Bearer ${apiKey}`
      },
      params: {
        limit: 10,
        start_date: this.state.start_date,
        categories: this.state.category,
        is_free: this.state.onlyFree,
      }
    }).then((result) => {
      //filter the response and only include events that are not canceled
      const resultsArray = result.data.events.filter(event => event.is_canceled === false)
      if (resultsArray.length === 0) {
        alert('Sorry, not much going on. Why not try another category!')
      }
      this.setState({
        events: resultsArray,
        isLoading: false
      })
    }).catch((error) => {
      alert('Sorry, something went wrong');
    })
  }

  // When component mounts load saved Events from firebase and update state
  componentDidMount() {
    //Get timestamp when component mounts
    this.getTimeStamp();
    const dbRef = firebase.database().ref();
    dbRef.on('value', (event) => {
      const eventItem = event.val();
      const savedEvents = [];
      //take each item from firebase and push their values into state
      for (let key in eventItem) {
        //shorten the length of the event descriptions
        let shortDescription = eventItem[key].description.substring(0, 20) + '...';
        savedEvents.push({
          key: key,
          name: eventItem[key].name,
          description: shortDescription
          // description: eventItem[key].description
        })
      }
      this.setState({
        savedEvents: savedEvents
      })
    })
  }



  render() {
    return (
      <div className="App">
        <Header
          handleCategoryChoice={this.handleCategoryChoice}
          handlePriceChoice={this.handlePriceChoice}
          handleSubmit={this.handleSubmit}
        />
        <main className="results" id="responseContainer">
          {/* { if the isLoading state is set to false return the "here's what happening" notice. If isLoading is set to null do nothing} */}
          { //OPEN JAVASCRIPT
            this.state.isLoading === false ? (
              <div>
                <h2 className="resultsTitle">Here's what's happening!</h2>
                <AnchorLink href='#responseContainer'><i className="fa fa-arrow-circle-down"></i></AnchorLink>
              </div>
            ) : (null)
            //CLOSE JAVASCRIPT
          }
          <div className="responseFlex wrapper">
            {/* { if the isLoading state is set to True show the "loading your results" title} */}
            { //OPEN JAVASCRIPT
              this.state.isLoading ? (
                <div>
                  <h2 className="resultsTitle">Loading your results...</h2>
                  <i className="fa fa-spinner fa-spin resultsTitle"></i>
                </div>
              ) : (
                  // {if isLoading returns to False then the events have loaded. Map over the events and return their results in the ResponseContainer component}
                  this.state.events.map(event => {
                    return (
                      <ResponseContainer
                        name={event.name}
                        image={event.image_url}
                        description={event.description}
                        website={event.event_site_url}
                      />
                    )
                  })
                )
              //CLOSE JAVASCRIPT
            }
          </div>
          <div className="savedEvents wrapper" id="savedEvents">
            <h2 className="resultsTitle">Saved Events</h2>
            <AnchorLink href='#savedEvents'><i className="fa fa-arrow-circle-down"></i></AnchorLink>
            <div className="savedEventsFlex">
              {/* {once the saved events have been added to state map through each item and return its contents to the DOM}  */}
              { //OPEN JAVASCRIPT
                this.state.savedEvents.map((eventItem) => {
                  return (
                    <div className="savedEventItem">
                      <h3>{eventItem.name}</h3>
                      <p>{eventItem.description}</p>
                    </div>
                  )
                })
                //CLOSE JAVASCRIPT
              }
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
