/* eslint-disable react/prop-types */
// import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
function Data({user}){
    console.log(user);
    return(
        <div>
        
        
        <h2>name : {user.name}</h2>
        <h2>Age : {user.age}</h2>
        <h2>School : {user.school}</h2>
        </div>
    );
}
// Data.PropTypes = {
//     user : PropTypes.shape({
//         name : PropTypes.string.isRequired,
//         age : PropTypes.number.isRequired,
//         school : PropTypes.isRequired
// }).isRequired,
// }

export default Data;