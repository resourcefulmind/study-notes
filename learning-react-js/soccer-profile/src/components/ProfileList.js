import React from 'react';

const ProfileList = (props) => {
    console.log(props.profiles)
      const profiles = props.profiles.map((profile) => {
         return (
                <div> 
                    {profile.career} 
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