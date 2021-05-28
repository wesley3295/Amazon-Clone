import React from 'react'
import '../CSS/Home.css'
import Product from './Product'
const Home = () => {
    return (
        <div className="home">
            <div className="home__conatainer">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2021/Other/RB-3968_SVOD_MultiTitle_GW_Test/AMZN_RB-3968_SVOD_MultiTitle_GW_Control_EN_GWBleedingHero_1500x600._CB654815209_.jpg" alt="Banner" />
                <div className="home__row">
                    <Product id={1} title="The Lean Startup" image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" price="29.99" rating={3} />
                    <Product id={2} title="5MP ptz Camera Outdoor 4X Optical Zoom WiFi IP auto-Tracking Camera Built-in Two Way Audio for Video Security Surveillance,Support 355°pan 90°tilt/Motion & Human-Shape Detection/ONVIF protol" image="https://images-na.ssl-images-amazon.com/images/I/61STECK9TZL._AC_SL1500_.jpg" price="9.99" rating={3} />
                </div>
                <div className="home__row">
                    <Product id={3} title="Liquid I.V. Hydration Multiplier - Passion Fruit - Hydration Powder Packets" image="https://images-na.ssl-images-amazon.com/images/I/715U91nwgFL._AC_SL1500_.jpg" price="58.99" rating={3} />
                    <Product id={4} title="AMD Ryzen 9 5900X 12-core, 24-Thread Unlocked Desktop Processor" image="https://images-na.ssl-images-amazon.com/images/I/616VM20%2BAzL._AC_SL1384_.jpg" price="687.99" rating={3} />
                    <Product id={5} title="
ASUS ROG STRIX NVIDIA GeForce RTX 3090 Gaming Graphics Card- PCIe 4.0"  image="https://images-na.ssl-images-amazon.com/images/I/91XyrUFYKfL._AC_SL1500_.jpg" price="3999.99" rating={3} />

                </div>
                <div className="home__row">
                    <Product id={6} title="
ARCTIC MX-4 (4 Grams) - Thermal Compound Paste, Carbon Based High Performance"  image="https://images-na.ssl-images-amazon.com/images/I/61Gm1upecsL._AC_SL1500_.jpg" price="5.99" rating={3} />

                </div>
            </div>
        </div>
    )
}

export default Home
