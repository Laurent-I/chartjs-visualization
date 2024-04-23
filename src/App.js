import './App.css';
import { Dashboard } from './components/layouts/Dashboard';
import { Menu } from './components/layouts/Menu';
import { Navigation } from './components/layouts/Navigation';

function App() {
  return (
    <div className="App">
      <div className="Navigation">
        <Navigation/>
      </div>
      <div className="Menu">
        <Menu/>
      </div>
      <div className="Dashboard">
        <Dashboard/>
      </div>
    </div>
  )
}

export default App;