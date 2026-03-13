import "../App.css";

const ProfileCard = (props) => {
    return (
        <div className="profile-card">
            <h4>Hello My name is {props.name}</h4>
            <h4> My Role is {props.role}</h4>
            <h4>My experience is {props.experience}</h4>
            <h4>My favorite programming language is {props.favoriteLanguage}</h4>
            <h4>Status: {props.status}</h4>
        </div>
    );
}
export default ProfileCard;