import NavContainer from "./components/navbar/navbar";
import Welcome from "./components/welcomeDiv/welcomeDiv";
import Details from "./components/details/details";
import Wonders from "./components/wonders/wonders";
import Destination from "./components/destination/destination";
import Ad from "./components/Ad/ad";
import Footer from "./components/footer/footer";
import "./App.css"

function App() {
  return (
    <>
      <div><NavContainer /></div>
      <div><Welcome/></div>
      <div><Details/></div>
      <div><Wonders/></div>
      <div><Destination/></div>
      <div><Ad/></div>
      <div><Footer/></div>
    </>
  );
}


export default App;