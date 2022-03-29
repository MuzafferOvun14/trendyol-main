import { Route } from 'react-router-dom';
import './App.css';
import NewCompany from './pages/NewCompany';

import CenteredGrid from './pages/newLoginForm';
import NewUser from './pages/NewUser';
import standartMain from './standartPage/main';
function App() {

  return (
    <div className="App">
      <Route   path="/" component={standartMain}/>
      <Route  path="/login/" component={CenteredGrid}/>
      <Route  path="/newCompany/" component={NewCompany}/>
      <Route  path="/newUser/" component={NewUser}/>
     </div>
  );
}
export default App;
