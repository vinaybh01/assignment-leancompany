import "./App.css";
import Body from "./Body";
import CompanyList from "./CompanyList";
import Last from "./Last";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Body />
      <CompanyList />
      <Last />
    </div>
  );
}

export default App;
