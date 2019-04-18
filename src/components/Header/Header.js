import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="titleContainer">
                    <h1>Toronto Events</h1>
                    <h2>find out what's going on in the city!</h2>
                </div>
                <form className="eventForm" onSubmit={this.props.handleSubmit}>
                    <h3>Pick an Event Category and Max Price</h3>
                    <label htmlFor="category">Category</label>
                    <select placeholder="Type event category" id="category" onChange={this.props.handleCategoryChoice}>
                        <option value="music">Music</option>
                        <option value="visual-arts">Visual Arts</option>
                        <option value="performing-arts">Performing Arts</option>
                        <option value="film">Film</option>
                        <option value="lectures-books">Lectures and Books</option>
                        <option value="fashion">Fashion</option>
                        <option value="food-and-drink">Food and Drink</option>
                        <option value="festivals-fairs">Festivals and Fairs</option>
                        <option value="charities">Charities</option>
                        <option value="sports-active-life">Sports and Active Life</option>
                        <option value="nightlife">Nightlife</option>
                        <option value="kids-family">Kids and Family</option>
                        <option value="other">Other</option>
                    </select>
                    <label htmlFor="maxPrice">Choose a Maximum Price</label>
                    <input type="number" placehold="Enter max price in dollars" id="maxPrice" onChange={this.props.handleMaxPrice} />
                    <input type="submit" id="submitForm" value="Submit form" />
                </form>
            </header>
        )
    }

}

export default Header; 