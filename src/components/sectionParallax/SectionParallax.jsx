import React from 'react'
import parallax from '../../assets/images/home-parallax-img-1.jpg'
import testimonials from '../../assets/images/testimonials-quote-img.png'
import Classes from './sectionParallax.module.scss';

function SectionParallax() {
    return (
        <div className={Classes.parallax} style={{ background: `url(${parallax})` }}>
            <img src={testimonials} alt="" />
            <p className={Classes.firstP}>“For The Love Of Horses. A Farm Where You And <br /> Your Horse Will Feel At Home.”</p>
            <p className={Classes.secondP}>Davide Peterson</p>
        </div>
    )
}

export default SectionParallax