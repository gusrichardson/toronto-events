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
        console.log(this.props.name, "this is this name", this.state, "this is the state")
        this.setState({
            selectedEvent: selectedEvent
        })
        dbRef.push(selectedEvent)
    }

    render() {
        return (
            <form className="responseItem" onSubmit={this.handleSaveToFB}>
                <a href={this.props.website}>
                    <div className="imgContainer">
                        <img src={this.props.image} alt={this.props.name} />
                    </div>
                </a>
                <div className="descriptionContainer">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.description}</p>
                </div>
                <button className="saveEvent">Save this Event!</button>
            </form>
        )
    }
}

export default ResponseContainer;