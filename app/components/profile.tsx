import Image from 'next/image';
import React from 'react';
import profileData from '../data/profileData.json';
import Quote from './quote';
import BlogButton from './blogButton';
const Profile = () => {
    const { greeting, profileImage, description } = profileData;

    return (
        <div className='sm:h-screen sm:pt-0 flex flex-col items-center justify-center profile_section' id='profile'>
            <h1 className='heading'>
                {greeting}
            </h1>
            <div className='section_container'>
                <Image src={profileImage.src} height={profileImage.height} width={profileImage.width} alt={profileImage.alt} />
                <div className='description'>
                    <div className='content'>
                        <p dangerouslySetInnerHTML={{ __html: description.content.replace(/<highlight>/g, '<span class="highlight">').replace(/<\/highlight>/g, '</span>') }} />
                        <br />
                        <p>What I do :</p>
                        <ul>
                            {description.bulletedContent.map((bullet, index) => (
                                <li key={index} dangerouslySetInnerHTML={{ __html: bullet.replace(/<highlight>/g, '<span class="highlight">').replace(/<\/highlight>/g, '</span>') }} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='blog_button_2 flex items-center justify-center py-10'><BlogButton/></div>

            <div className='pt-0 pb-10 sm:py-10'>
                <Quote/>
            </div>
        </div>
    );
};

export default Profile;
