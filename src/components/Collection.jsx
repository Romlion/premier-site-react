import React from 'react';
import Chicken from "../components/Chicken";

const Collection = () => {
    return (
        <div className='collection'>
            <Chicken
                img="https://cdn.pixabay.com/photo/2016/11/08/10/39/chicken-1807883_1280.jpg"
                title="Poulet roti"
                caption="Bien tendre, 😋"
            /> 
            <Chicken
                img="https://cdn.pixabay.com/photo/2019/04/07/17/22/chicken-4110212_1280.jpg"
                title="Poulet roti et tomatte bien fraiche"
                caption="Quelle délice, 😋"
            /> 
            <Chicken
                img="https://cdn.pixabay.com/photo/2015/03/11/00/31/chicken-667935_1280.jpg"
                title="Pillon de poulet"
                caption="Frie a souhait, 😋"
            /> 
        </div>
    );
};

export default Collection;