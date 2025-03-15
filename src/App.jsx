import "./index.css";

function App() {
  return (
    <section className="min-h-screen [background:radial-gradient(130%_130%_at_50%_20%,#4c1d95_10%,#1e3a8a_50%,#000_90%)] p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-white dark:bg-slate-950 rounded-xl shadow-xl overflow-hidden">
        <div className="relative flex flex-col gap-2 bg-gradient-to-r from-violet-600 to-indigo-700 p-8 md:p-12 text-white overflow-hidden">

          <div className="flex gap-4">
            <a className="flex items-center">
              <button className="i bg-white/20 px-3 py-1 rounded-full text-white text-sm font-semibold">Disponible para trabajar</button>
            </a>
          </div>

          <h1 className="text-6xl font-bold mt-2">Julian Restrepo</h1>

          <p className="text-3xl font-medium">Frontend Developer</p>

          <div className="mt-4 flex gap-4">
            <button className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-xl text-white text-sm">
              <i class="ri-mail-line text-base font-semibold"></i>
              <span>Julicode07@gmail.com</span>
            </button>
            <button className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-xl text-white text-sm">
              <i class="ri-map-pin-line text-base font-semibold"></i>
              <span>Rionegro, Antioquia</span>
            </button>
          </div>

          <div className="mt-4 flex gap-2">
            <a href="https://github.com/Julicode07" target="_blank" className="inline-block bg-white/20 p-2 rounded-full text-white text-sm">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="" className="inline-block bg-white/20 p-2 rounded-full text-white text-sm">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
