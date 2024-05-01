import React from 'react'
import "./MenuCard.css"

const MenuCard = ({menuData}) => {
  return (
    <div className='flex-container'>
    <>
    {menuData.map((currElem) => {

        const {id, name, category, Image, description} = currElem;

        return(
            <>
            <div style={{padding: '20px'}} key = {id}>
            <div className="card" style={{ width: '20rem' }}>
            <div className="card-body">
                <p className = "numbers"> {id} </p>
                <h6 style={{fontWeight: 'lighter'}}> {category} </h6>
                <img src={Image} alt='Indian Food' className='image'></img>
                <h3 className="card-title"><b> {name} </b></h3>
                <p> {description} </p>
                <hr/>
                <button type="button" class="btn btn-outline-secondary">Order Now</button>
            </div>
            </div>
            </div>
            </>
        );
    })}
    </>
    </div>
  )
}

export default MenuCard