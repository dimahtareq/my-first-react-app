import ProfileCard from './ProfileCard';
import "../App.css";

const CardContainer = () => {
  return (
    <div className="cards-container">
    <ProfileCard name="John Doe" role="Software Engineer" experience="5 years" favoriteLanguage="JavaScript" status="Available 🟢" />
    <ProfileCard name="Jane Smith" role="Product Manager" experience="8 years" favoriteLanguage="Python" status="Busy 🔴" />
    <ProfileCard name="Alice Johnson" role="UX Designer" experience="3 years" favoriteLanguage="Ruby" status="Available 🟢" />
    <ProfileCard name="Bob Brown" role="Data Scientist" experience="6 years" favoriteLanguage="R" status="Busy 🔴" />  
    </div>
  );
};

export default CardContainer;
