import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './component/Home';
import Delete from './component/Delete/Delete'
import { UserProvider } from './component/UserContext/UserContext';
import Read from './component/Read/Read';
import Edit from './component/Edit/Edit';
import Create from './component/Create/Create';

function App() {
  return (
    <UserProvider>
      <div className="app">
        <Router>
          <Routes>
            <Route path="/create" element={<Create />}>
            </Route>

            <Route path="/read/:id" element={<Read />}>
            </Route>

            <Route path="/edit/:id" element={<Edit />}>
            </Route>

            <Route path="/delete/:id" element={<Delete />}>
            </Route>

            <Route path="/" element={<Home />}>
            </Route>
          </Routes>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
