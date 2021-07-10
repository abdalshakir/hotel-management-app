import React from 'react';
import hotel4 from '../assets/hotel4.jpg';
import { Link } from 'react-router-dom';

const PostCard = () => {
    return (
        <div className="container w-75 postcard my-5">
            <div className="row w-100">
                <div className="col-md-6 postcardImage">
                    <img src={hotel4} className="w-auto p-2" style={{ height: "350px" }} alt="" />
                </div>
                <div className="col-md-6 postcardDetails">
                    <h1 className="pb-3">Luxury Hotel</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum sapiente, totam dolor
                        explicabo molestiae neque exercitationem facilis praesentium harum itaque ullam nemo
                        tempora ab optio sequi natus eum obcaecati laborum?</p>
                   <Link to='/login'> <button type="button" class="btn btn-outline-dark">Book Now</button> </Link>
                </div>
            </div>
        </div>
    )
}

export default PostCard
