import React from 'react';
import PricingFeature from './PricingFeature';
 
 

const PricingCard = ({pricing}) => {
            const {name, price, description, features} = pricing;
    return (
        <div className='border bg-cyan-300 rounded-2xl m-4 p-4 '>
            {/* card header  */}
            <div>
                <h1 className='text-4xl '>{ name}</h1>
                <h4 className='text-3xl '>{ price}$</h4>
            </div>
            {/* card body  */}
            <div className='bg-amber-50 p-4 rounded-2xl mt-10'>
                <p>{ description}</p>

                {
                     features.map( (feature, index) =>  <PricingFeature
                     key={index}
                     feature={feature}></PricingFeature>)
                }
            </div>
            <button className="btn w-full mt-4">Subscribe</button>
        </div>
    );
};

export default PricingCard;