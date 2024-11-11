import React from 'react';

const Chicken = ({img, title, caption}) => {
    return (
        <div className='chicken'>
            <img className='chicken_img' src={img} alt={title} />
            <h3 className='chicken_title'>{title}</h3>  
            <p className='chicken_caption'>{caption}</p>
        </div>
    );
};

export default Chicken;