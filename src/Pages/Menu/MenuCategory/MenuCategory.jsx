import React from 'react';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import Banner from '../../../component/Banner/Banner';

const MenuCategory = ({title,bannerImg,items}) => {
    return (
        <div className='py-6'>
            {title && <Banner bgImg={bannerImg} title={title} subTitle='would you like to try our dish?'></Banner>}
            <div className="grid md:grid-cols-2 gap-5 mt-16">
        {items.map((menu) => (
          <MenuItem key={menu._id} menu={menu}></MenuItem>
        ))}
      </div>
        </div>
    );
};

export default MenuCategory;