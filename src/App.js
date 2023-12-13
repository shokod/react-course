import { Route, Routes,} from  'react-router-dom';
import AllMeetups from './pages/AllMeetups';
import NewMeetups from './pages/NewMeetups'
import Favorites from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
      <Route path='/' element={<AllMeetups />}>
        
      </Route>
      <Route path='/new-meetup' element={<NewMeetups />}>
        
      </Route>
      <Route path='/favorites' element={<Favorites />}>
        
      </Route>
      </Routes>
    </div>
  );
}

export default App;
