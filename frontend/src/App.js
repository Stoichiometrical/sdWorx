import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import EmployeeView from "./components/EmployeeView";
import ManagerView from "./components/ManagerView";
import Tasks from "./pages/Tasks";
import Reports from "./pages/Reports";
import CareerGrowth from "./pages/CareerGrowth";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Add side menus and navigation links here */}
        <Switch>
          <Route path="/tasks" component={Tasks} />
          <Route path="/reports" component={Reports} />
          <Route path="/career-growth" component={CareerGrowth} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
