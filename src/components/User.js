import React from 'react'
import { faCircle, faCircleCheck, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const User = ({user}) => {
  let iconColor=  user.state?"#89C54C" :"#1F2A48";
  let icon=user.state?faCircleCheck:faCircle;

  return (
    
        
        <div className="card">
        <p><FontAwesomeIcon style={{color:iconColor }} icon={faUser} />
        </p>

          <p className='userName'>{user.name} </p>
          <p>
           
              <FontAwesomeIcon style={{color:iconColor}}  icon={icon} />
           
          </p>

          {/* <p>jihan najjar</p> */}
        </div>
  )
}

export default User