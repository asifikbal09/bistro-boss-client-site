import React from 'react';
import useFilter from '../../Hooks/useFilter';
import FoodCard from '../../component/FoodCard/FoodCard';

const OrderTab = ({foodName}) => {
    const items = useFilter(foodName)
    return (
        <div className='grid md:grid-cols-3 gap-10'> 
            {
                
              items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;