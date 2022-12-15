import ProfileCard from "./ProfileCard";

const App = () => {
  return (
    <div>
      <div>Personal Digital Assistants</div>

      <ProfileCard title="Alexa" handle="@alexa" />
      <ProfileCard title="Cortana" handle="@cortana" />
      <ProfileCard title="Siri" handle="@siri" />
    </div>
  );
};

export default App;
