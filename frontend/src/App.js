import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Permit from './components/permit/Permit';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Permit/>}/>
      
      
    </Routes>
   </Router>
  );
}

export default App;
