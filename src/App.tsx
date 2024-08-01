import Footer from "./components/Footer";
import Header from "./components/Header";
import TableBody from "./components/TableBody";
import TableFoot from "./components/TableFoot";
import TableHead from "./components/TableHead";
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <table>
        <TableHead />
        <TableBody />
        <TableFoot />
      </table>
      <Footer />
    </div>
  )
}

export default App
