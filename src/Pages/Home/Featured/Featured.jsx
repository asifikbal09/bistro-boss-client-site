import React from 'react';
import featuredImg from '../../../assets/home/featured.jpg'
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item py-10 bg-fixed my-20 px-10 text-white'>
            <SectionTitle subHeading='Check it out' heading='from out menu'></SectionTitle>

           <div className='md:flex justify-center items-center gap-5 mb-20 px-20 bg-slate-600 bg-opacity-20'>
           <div>
                <img src={featuredImg} alt="" />
            </div>
            <div>
                <p>
                    Jun 8, 2030
                </p>
                <h3 className='uppercase'>
                WHERE CAN I GET SOME?
                </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nostrum cum quos, debitis exercitationem accusamus illo temporibus rerum velit quasi. Qui autem doloribus expedita aliquid, quasi doloremque excepturi veniam reprehenderit quo, nemo optio amet ratione necessitatibus at vitae molestias perspiciatis animi id mollitia, esse corporis illum ipsam? Dicta, cupiditate quo!
                </p>
                <button className='btn btn-outline border-0 border-b-4 mt-4'>Order now</button>
            </div>
           </div>

        </div>
    );
};

export default Featured;