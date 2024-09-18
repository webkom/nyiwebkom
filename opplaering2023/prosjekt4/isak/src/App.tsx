import EventList from "./components/EventList";
import "./App.css";

function App() {
  return (
    <>
      <div className="title">
        <img src="/abakule.png" />
        <h1>Abakus Arrangementer</h1>
      </div>
      <EventList />
    </>
  );
}

export default App;
