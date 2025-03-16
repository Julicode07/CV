import "./index.css";
import Header from "./components/Header";
import Information from "./components/Information/Information";

function App() {
  return (
    <section className="min-h-screen [background:radial-gradient(130%_130%_at_50%_20%,#2d3748_10%,#1a202c_50%,#000_90%)] p-3 md:p-8">
      <div className="max-w-5xl mx-auto rounded-xl shadow-xl overflow-hidden">
        <Header />
        <Information />
      </div>
    </section>
  );
}

export default App;
