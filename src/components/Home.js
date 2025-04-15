import React from 'react';
import { motion } from 'framer-motion';
import myImage from '../img/my-image.jpg';  // Your image file (update the path)

const Home = () => {
    return (
        <section className="home-container">
            <motion.div
                className="home-content"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="home-header">
                    <h1>Hello, I'm Alyssa 👋</h1>
                    <p>Welcome to my personal portfolio site!</p>
                </div>
                <div className="home-image">
                    <img src={myImage} alt="Alyssa" />
                </div>
            </motion.div>
        </section>
    );
};

export default Home;
