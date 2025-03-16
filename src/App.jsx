import "./index.css";
import Header from "./components/Header";

function App() {
  return (
    <section className="min-h-screen [background:radial-gradient(130%_130%_at_50%_20%,#4c1d95_10%,#1e3a8a_50%,#000_90%)] p-3 md:p-8">
      <div className="max-w-5xl mx-auto rounded-xl shadow-xl overflow-hidden">
        <Header />
      </div>
    </section>
  );
}

export default App;
