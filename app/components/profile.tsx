import Image from 'next/image';
import React from 'react';
import profileData from '../data/profileData.json';
import Quote from './quote';
import BlogButton from './blogButton';
import Stars from './stars';
const Profile = () => {
    const { greeting, profileImage, description } = profileData;

    return (
        <div className='section'>
            <h2 className=''>stars</h2>
            <div>
            <div className='star star1'></div>
            <div className='star star2'></div>
            <div className='star star3'></div>
            <div className='star star4'></div>
            <div className='star star5'></div>
            <div className='star star6'></div>
            <div className='star star7'></div>
            <div className='star star8'></div>
            </div>
        </div>
    );
};

export default Profile;
