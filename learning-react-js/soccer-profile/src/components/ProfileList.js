import React from 'react';

const ProfileList = (props) => {
    console.log(props.profiles)
      const profiles = props.profiles.map((profile) => {
         return (
                
                <div key={profile.id}> 
                    <div>
                    <h1>{profile.firstname} {profile.lastname}</h1>
                    <img src={profile.photo} alt='Jurgen Klopp'/>
                    <br />
                    <br />
                    <p>Date of Birth: {profile.birth.date}</p>
                    <p>Nationality: {profile.nationality}</p> 
                    <p>Birthplace: {profile.birth.place}</p>
                    <p>Height: {profile.height}</p>
                    <p>Weight: {profile.weight}</p>
                    <p>Current Team: {profile.team.name}</p>
                    <img src={profile.team.logo} alt='Liverpool FC' />
                    </div>
                    <br />
                    <div>
                        <h2>Career</h2>
                        <p>{profile.firstname} {profile.lastname}, since starting his managerial career has coached the following teams: </p>
                        <div>
                            <h1>{profile.career[0].team.name}</h1>
                            <img src={profile.career[0].team.logo} alt={profile.career[0].team.name}/>
                            <p>Started Role As Head Coach: {profile.career[0].start}</p>
                            <p>Ended Role As Head Coach: {profile.career[0].end}</p>
                        </div>
                        <div>
                            <h1>{profile.career[1].team.name}</h1>
                            <img src={profile.career[1].team.logo} alt={profile.career[1].team.name}/>
                            <p>Started Role As Head Coach: {profile.career[1].start}</p>
                            <p>Ended Role As Head Coach: {profile.career[1].end}</p>
                        </div>
                        <div>
                            <h1>{profile.career[2].team.name}</h1>
                            <img src={profile.career[2].team.logo} alt={profile.career[2].team.name}/>
                            <p>Started Role As Head Coach: {profile.career[2].start}</p>
                            <p>Ended Role As Head Coach: {profile.career[2].end}</p>
                        </div>
                        
                    </div>
                </div>
         );
      });

     return (
            <div>
                {profiles}
            </div>
     );
};

export default ProfileList;