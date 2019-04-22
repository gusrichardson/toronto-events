import React, { Component } from 'react';
import firebase from '../../firebase';
import './ResponseContainer.css';

class ResponseContainer extends Component {
    constructor() {
        super();
        this.state = {
            selectedEvent: []
        }
    }

    handleSaveToFB = (e) => {
        e.preventDefault();
        const dbRef = firebase.database().ref();
        const selectedEvent = {
            name: this.props.name,
            description: this.props.description
        }
        this.setState({
            selectedEvent: selectedEvent
        })
        dbRef.push(selectedEvent)
    }

    render() {
        // { let shortDescription = this.props.description.substring(0, 200) + '...' }
        return (
            <form className="responseItem" onSubmit={this.handleSaveToFB}>
                <a href={this.props.website}>
                    <div className="imgContainer">
                        <img src={this.props.image} alt={this.props.name} />
                    </div>
                </a>
                <div className="descriptionContainer">
                    <h3>{this.props.name}</h3>
                    {/* {cut down the size of the description to 100 characters}  */}
                    <p>{this.props.description.substring(0, 100) + '...'}</p>
                    {/* {Split up date props to show date and time seperately} */}
                    <p>Date: {this.props.date.substring(0, 10)} Time: {this.props.date.substring(11)}</p>
                </div>
                <button className="saveEvent">Save this Event!</button>
            </form>
        )
    }
}

export default ResponseContainer;