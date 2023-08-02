import React from 'react';

const MenuItem = ({menu}) => {
    const {name, image, price, recipe} = menu
    return (
        <div className='flex space-x-4 items-center '>
            <img className='w-[100px] rounded-b-[200px] rounded-tr-[200px]' src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}-------------</h3>
                <p>{recipe}</p>
            </div>
            <h3  className='text-yellow-600'>${price}</h3>
        </div>
    );
};

export default MenuItem;