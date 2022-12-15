import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

const App = () => {
  return (
    <div>
      <div>Personal Digital Assistants</div>

      <ProfileCard title="Alexa" handle="@alexa" image={AlexaImage} />
      <ProfileCard title="Cortana" handle="@cortana" image={CortanaImage} />
      <ProfileCard title="Siri" handle="@siri" image={SiriImage} />
    </div>
  );
};

export default App;
