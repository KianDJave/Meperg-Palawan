import { Home, Search } from "lucide-react";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img
        src="/9701.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-700/60 to-blue-600/70 -z-10" />

      {/* TOP NAV */}
      <header className="bg-blue-900/90 text-white py-3 px-4 md:px-6 flex items-center justify-between relative z-10">
        {/* Home */}
        <div className="flex items-center gap-2">
          <Home className="w-6 h-6 md:w-7 md:h-7" />
          <span className="font-semibold text-sm md:text-base">Home</span>
        </div>

        {/* Search */}
        <div className="flex-1 mx-4 max-w-md relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/70" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-1.5 rounded-full bg-white/10 border border-white/30 text-white placeholder:text-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>

        {/* User */}
        <span className="text-sm">Admin</span>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 py-8 md:py-10 lg:py-12">
        <div className="flex items-center justify-center gap-10 md:gap-20 px-4">
          {/* LEFT LOGO */}
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center border-4 border-white">
            <img
              src="/public/pcg.png"
              alt="Philippine Coast Guard Seal"
              className="w-[90%] h-[90%] object-contain"
            />
          </div>

          {/* TITLE */}
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide">
              MEPERG-PALAWAN
            </h1>
            <p className="text-xl md:text-2xl text-amber-400 font-semibold mt-2">
              Vessels Monitoring and Inspection
            </p>
          </div>

          {/* RIGHT LOGO */}
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center border-4 border-white">
            <img
              src="/public/cgdpal.png"
              alt="CG District Palawan Seal"
              className="w-[90%] h-[90%] object-contain"
            />
          </div>
        </div>
      </section>

      {/* STATION GRID */}
      <section className="relative z-10 py-6 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl mx-auto">
          {[
            "CGS Central Palawan - Puerto Princesa",
            "CGS South Central Palawan - Brooke’s Point",
            "CGS Southern Palawan - Bataraza",
            "CGSS Northeastern Palawan - Coron",
            "CGS Kalayaan Island Group",
            "CGS Northern Palawan - El Nido",
            "CGS North Central Palawan - Roxas",
            "CGS Eastern Palawan - Cuyo",
          ].map((text) => (
            <div
              key={text}
              className="bg-white text-blue-900 px-4 py-5 text-center text-sm font-semibold rounded shadow"
            >
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-900/90 text-white/80 text-center py-3 text-sm relative z-10">
        © 2026 CGDPAL Paperless System
      </footer>
    </div>
  );
}

export default App;
