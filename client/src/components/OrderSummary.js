import React from 'react'
import hero from './../images/illustration-hero.svg'
import musicIcon from './../images/icon-music.svg'

const OrderSummary = () => {
    return (
        <div className="summary-container">
            <img src={hero} id="hero"></img>
            <h1 id="order-summary-title">Order Summary</h1>
            <p id="order-summary-description">{
            'You can now listen to millions of songs, \n \
            audiobooks, and podcasts on any device \n \
            anywhere you like!'
            }</p>
            <div className="selected-plan">
                <img src={musicIcon} id="musicIcon"></img>
                <div id="selected-plan-text-wrap">
                    <h1 id="changeplan-title">Annual Plan</h1>
                    <p id="changeplan-description">$59.99/year</p>
                </div>
                <button id="change-plan-button">Change</button>
            </div>
            <button id="checkout-button">Proceed to Payment</button>
            <button id="cancel-button">Cancel Order</button>
        </div>
    )
}

export default OrderSummary
