import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Menu</h1>
            <p className='explore-menu-text'>Explore our menu: Fresh meals, fast delivery - from local favorites to global flavors!</p>
            <div className="explore-menu-list">
                {menu_list.map((items, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === items.menu_name ? 'All' : items.menu_name)} key={index} className='explore-menu-list-item'>
                            <img className={category === items.menu_name ? 'active' : ''} src={items.menu_image} alt="#nothing" />
                            <p>{items.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu