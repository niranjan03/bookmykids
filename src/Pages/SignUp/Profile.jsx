import React from 'react';
import Carousel from '../../components/Carousel/Carousel'

const Profile = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-danger mb-3">Build Your Profile and Stand Out!</h1>
      <p className="text-muted mb-4">
        Showcase your unique talent and get noticed! Craft a compelling profile to highlight your skills, 
        experience, and personality. Connect with industry professionals and unlock exciting opportunities to 
        kickstart your career.
      </p>
      
      <h5 className="mb-4">What type of job are you looking for?</h5>
      
      <Carousel />
      
      <div className="mb-4">
        <input type="text" className="form-control" placeholder="Looking for something else?" />
      </div>
      
      <div className="text-center">
        <button className="btn btn-danger px-5">Next</button>
      </div>
    </div>
  );
};

export default Profile;