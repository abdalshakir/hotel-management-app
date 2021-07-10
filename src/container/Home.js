import React from 'react'
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel'
import PostCard from '../components/PostCard';
import Card from '../components/Card'

const Home = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <PostCard />
            <Card />
        </>
    )
}

export default Home
