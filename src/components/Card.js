import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cards = () => {
    const state = useSelector(state => state)
    return (
        <div className="bg-light col-md-8 m-auto shadow rounded">
            <h1 className="text-center pt-3">HOTELS</h1>
            <div className="container">
                <div className="row">
                    {state.hotels.map((v, i) => {
                        return (
                            <div class="card col-md-3 m-3"  style={{ width: "30%" }}>
                                <img style={{ height: "200px" }} src={v.cardImage} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{v.cardTitle}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to='./login'> <button class="btn btn-dark">Book Now</button> </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
// className="d-flex justify-content-around" style={{ flexWrap: "wrap" }}

export default Cards
