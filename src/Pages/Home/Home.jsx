import React from 'react'
import Logo from '../../assest/surprised-girl-standing-front-stage-light-holding-scripts.png'
import '../Home/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import GarbaCard from '../../components/Feature/Feature';

const Home = () => {
  return (
    <div>
      <div className="container Banner">
        <div className="row">
          <div className="col-sm-6 col-md-7 text-banner">
            <h2 className='title'>Casting the Stars of Tomorrow</h2>
            <p >At Book My Kids, we discover and nurture young
              talent, connecting aspiring actors and models with opportunities to shine.</p>

            <button className='Join-now'>Join Now</button>
          </div>
          <div className="col-6 col-md-5">
            <img src={Logo} className='Banner-Img' alt='banner-img' />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="paragraph">
          <h4>Join Bookmykids and start your journey to stardom</h4>
          <p>Book My Kids is your premier casting platform dedicated to discovering and nurturing young talent.
            We connect aspiring child actors, models, and performers with top-tier auditions and casting opportunities in the entertainment industry.
            Our expert team ensures a seamless process from talent discovery to stardom, providing the support and resources needed for your child to shine.
            Join Book My Kids today and watch your child's dreams come to life on the big stage.</p>
        </div>
      </div>
      <div className="container feature-job">
        <div className="row justify-content-between">
          <div className="col-4">
            <span>Featured job</span>
          </div>
          <div className="col-4 text-end">
            <button>View All <FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
        </div>
        <div>
      <GarbaCard
        title="Garba Dancers"
        location="Mumbai"
        daysRemaining={6}
        iconUrl="/path/to/your/icon.png" // Replace with actual icon URL
      />
    </div>
      </div>
    </div>
  )
}

export default Home
