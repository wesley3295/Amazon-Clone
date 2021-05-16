import React from 'react'
import '../CSS/Home.css'
import Product from './Product'
const Home = () => {
    return (
        <div className="home">
            <div className="home__conatainer">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2021/Other/RB-3968_SVOD_MultiTitle_GW_Test/AMZN_RB-3968_SVOD_MultiTitle_GW_Control_EN_GWBleedingHero_1500x600._CB654815209_.jpg" alt="Banner" />
                <div className="home__row">
                    <Product id={1} title="The Lean Startup"  image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" price="29.99" rating={3}/>
                    <Product id={2} title="The Lean Startup"  image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" price="29.99" rating={3}/>
                </div>
                <div className="home__row">
                <Product id={3} title="The Lean Startup"  image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" price="29.99" rating={3}/>
                <Product id={4} title="The Lean Startup"  image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" price="29.99" rating={3}/>
                <Product  id={5} title="The Lean Startup"  image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" price="29.99" rating={3}/>

                </div>
                <div className="home__row">
                <Product id={6} title="The Lean Startup"  image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" price="29.99" rating={3}/>

                </div>
            </div>
        </div>
    )
}

export default Home
