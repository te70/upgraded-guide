import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Plus from './components/Plus/Plus';
import Form from './components/Form/Form';
import Verify from './components/Verify/Verify';
import Result from './components/Result/Result';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Plus />} ></Route>
          <Route exact path="/form" element={<Form />} ></Route>
          <Route exact path="/verify" element={<Verify />} ></Route>
          <Route path="/result/:status" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
