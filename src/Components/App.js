import ButtonMatch from './ButtonMatch';
import NavBar from './NavBar';

function App() {
  return (
    <div>
      <h1>Match It</h1>
      <NavBar as='h3' textAlign='center' />
      <ButtonMatch />
    </div>
  );
}

export default App;
