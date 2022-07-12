// Here we create the Header Component that will receive props and we know we want to have a users
//     first and last name
import React, {useState} from 'react';
    
const Profile = (props) => {
    const [ birthday, setBirthday ] = useState(props.currentAge);
    return (
        <div>
            <h1>
                {props.lastName}, {props.firstName}
            </h1>
            <p>
                Age: {props.age}
            </p>    
            <p>
                Hair Color: {props.hairColor}
            </p>
            <p>Birthday: { birthday }</p>
            <button onClick={ (event) => setBirthday(birthday + 1)}>Happy Birthday {props.firstName} {props.lastName}</button>
        </div>
    );
}
export default Profile;