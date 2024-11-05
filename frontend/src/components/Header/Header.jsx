import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="header-content">
                <h2>Your Favorite Food, Delivered Fast!</h2>
                <p>QuickBite makes food delivery fast, easy, and reliable. Browse a wide
                    range of your favorite local restaurants, explore diverse cuisines, and
                    place orders effortlessly. You get your meal fresh and on time, every time!</p>
                <button>View Menu</button>
            </div>
        </div>
    )
}

export default Header