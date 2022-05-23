import './ProfileList.css'
import React from 'react';

const ProfileList = (props) => {
    console.log(props.profiles)
      const profiles = props.profiles.map((profile) => {
         return (
                
                <div className='container' key={profile.id}>
                    <h1>{profile.firstname} {profile.lastname}</h1>
                    <div className='section'>
                            <div className='first-sub'>
                                <img src={profile.photo} alt='Jurgen Klopp'/>
                                <br />
                                <br />
                            </div>
                            <div className='second-sub'>
                                <p><span>Date of Birth:</span> {profile.birth.date}</p>
                                <p><span>Nationality:</span> {profile.nationality}</p> 
                                <p><span>Birthplace:</span> {profile.birth.place}</p>
                                <p><span>Height:</span> {profile.height}</p>
                                <p><span>Weight:</span> {profile.weight}</p>
                            </div>
                            <div className='third-sub'>
                                <p><span>Current Team:</span> {profile.team.name}</p>
                                <img src={profile.team.logo} alt='Liverpool FC' />
                            </div>
                    </div>
                    <br />
                    <h2>Career</h2>
                    <p>{profile.firstname} {profile.lastname}, since starting his managerial career has coached the following teams: </p>
                    <div>
                        <div className='clubs-section'>
                            <div>
                                <h1>{profile.career[0].team.name}</h1>
                                <img src={profile.career[0].team.logo} alt={profile.career[0].team.name}/>
                            </div>
                            <div>
                                <p>Started Role As Head Coach: {profile.career[0].start}</p>
                                <p>Ended Role As Head Coach: {profile.career[0].end}</p>
                            </div>
                        </div>
                        <div className='clubs-section'>    
                            <div>
                                <h1>{profile.career[1].team.name}</h1>
                                <img src={profile.career[1].team.logo} alt={profile.career[1].team.name}/>
                            </div>
                            <div>
                                <p>Started Role As Head Coach: {profile.career[1].start}</p>
                                <p>Ended Role As Head Coach: {profile.career[1].end}</p>
                            </div>
                        </div>
                        <div className='clubs-section bottom'>
                            <div>
                                <h1>{profile.career[2].team.name}</h1>
                                <img src={profile.career[2].team.logo} alt={profile.career[2].team.name}/>
                            </div>
                            <div>
                                <p>Started Role As Head Coach: {profile.career[2].start}</p>
                                <p>Ended Role As Head Coach: {profile.career[2].end}</p>
                            </div>
                        </div>
                    </div>
                </div>
         );
      });

     return (
            <div className='profile-list'>
                {profiles}
            </div>
     );
};

export default ProfileList;