import './App.css';
import Navigation from './Components/Navigation/Navigation'
import ProfileCard from './Components/ProfileCard/ProfileCard'
import ActionButtons from './Components/ActionButtons/ActionButtons'
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <ProfileCard />
        <ActionButtons />
      </header>
    </div>
  );
}

export default App;
