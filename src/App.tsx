import { Home, Search } from "lucide-react";
import bg from "./assets/9701.jpg";
import pcg from "./assets/pcg.png";
import cgdpal from "./assets/cgdpal.png";


function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background - Ship Image */}
      <div className="absolute inset-0 z-0">
        <img
  src={bg}
  alt="Coast Guard Facility"
  className="w-full h-full object-cover object-center"
/>

        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/75 via-blue-700/60 to-blue-600/70" />
      </div>

      {/* Top Navigation Bar */}
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
  <div className="flex items-center gap-4">
    <span className="text-sm">Admin</span>
  </div>
  </header>
      {/* Hero Section */}
      <div className="relative z-10 header-gradient py-8 md:py-10 lg:py-12">
        <div className="flex items-center justify-center gap-8 sm:gap-12 md:gap-20 lg:gap-32 px-4">
          {/* Left Logo */}
          <div className="logo-circle w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-white flex items-center justify-center border-4 border-white overflow-hidden flex-shrink-0">
           <img
  src={pcg}
  alt="Philippine Coast Guard Seal"
  className="w-[90%] h-[90%] object-contain"
/>

          </div>

          {/* Center Title */}
          <div className="text-center">
            <h1 className="title-shadow text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-wide">
              MEPERG-PALAWAN
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-400 font-semibold mt-2 tracking-wide drop-shadow">
              Vessels Monitoring and Inspection
            </p>
          </div>

          {/* Right Logo */}
          <div className="logo-circle w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full bg-white flex items-center justify-center border-4 border-white overflow-hidden flex-shrink-0">
            <img
  src={cgdpal}
  alt="Coast Guard District Palawan Seal"
  className="w-[90%] h-[90%] object-contain"
/>

          </div>
        </div>
      </div>

      {/* Main Content - Ship visible area */}
      <main className="flex-1 flex flex-col items-center justify-end relative z-10"></main>

      {/* Station Cards */}
      <div className="relative z-10 py-6 px-4">
        {/* First 8 items in 4-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl mx-auto">
          <a
            href="https://docs.google.com/spreadsheets/d/1h9N0MMweJEOrejAzZhrdSjuevu5Et7l5CTxP7s40QXs/edit?usp=drivesdk"
            className="group"
          >
            <div className="station-card text-blue-900 px-4 py-5 text-center text-sm font-semibold rounded-sm flex items-center justify-center h-full min-h-[70px]">
              CGS Central Palawan - Puerto Princesa City, Palawan
            </div>
          </a>

          <a
            href="https://docs.google.com/spreadsheets/d/1jmyr8EHGrqBj5JB6E56kAMvPO_pVGoWi/edit?gid=1176732448#gid=1176732448"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="station-card text-blue-900 px-4 py-5 text-center text-sm font-semibold rounded-sm flex items-center justify-center h-full min-h-[70px]">
              CGS South Central Palawan - Brooke's Point, Palawan
            </div>
          </a>

          <a
            href="https://docs.google.com/spreadsheets/d/1jmyr8EHGrqBj5JB6E56kAMvPO_pVGoWi/edit?gid=1176732448#gid=1176732448"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="station-card text-blue-900 px-4 py-5 text-center text-sm font-semibold rounded-sm flex items-center justify-center h-full min-h-[70px]">
              CGS Southern Palawan - Brookes Point / Bataraza, Palawan
            </div>
          </a>

          <a href="/reports" className="group">
            <div className="station-card text-blue-900 px-4 py-5 text-center text-sm font-semibold rounded-sm flex items-center justify-center h-full min-h-[70px]">
              CGSS Northeastern Palawan - Coron, Palawan
            </div>
          </a>

          <a href="/reports" className="group">
            <div className="station-card text-blue-900 px-4 py-5 text-center text-sm font-semibold rounded-sm flex items-center justify-center h-full min-h-[70px]">
              CGS Kalayaan Island Group - Pag-asa Island (West Philippine Sea)
            </div>
          </a>

          <a
            href="https://docs.google.com/spreadsheets/d/1jmyr8EHGrqBj5JB6E56kAMvPO_pVGoWi/edit?gid=1176732448#gid=1176732448"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="station-card text-blue-900 px-4 py-5 text-center text-sm font-semibold rounded-sm flex items-center justify-center h-full min-h-[70px]">
              CGS Northern Palawan - El Nido, Palawan
            </div>
          </a>

          <a href="/reports" className="group">
            <div className="station-card text-blue-900 px-4 py-5 text-center text-sm font-semibold rounded-sm flex items-center justify-center h-full min-h-[70px]">
              CGS North Central Palawan - Roxas, Palawan
            </div>
          </a>

          <a
            href="https://docs.google.com/spreadsheets/d/1jmyr8EHGrqBj5JB6E56kAMvPO_pVGoWi/edit?gid=1176732448#gid=1176732448"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="station-card text-blue-900 px-4 py-5 text-center text-sm font-semibold rounded-sm flex items-center justify-center h-full min-h-[70px]">
              CGS Eastern Palawan - Cuyo, Palawan
            </div>
          </a>
        </div>

        {/* Last 2 items centered */}
        <div className="flex justify-center gap-3 mt-3 max-w-6xl mx-auto">
          <a href="/reports" className="group w-full md:w-[calc(25%-9px)]">
            <div className="station-card text-blue-900 px-4 py-5 text-center text-sm font-semibold rounded-sm flex items-center justify-center h-full min-h-[70px]">
              CGS Western Palawan - Rizal, Palawan
            </div>
          </a>

          <a
            href="https://docs.google.com/spreadsheets/d/1jmyr8EHGrqBj5JB6E56kAMvPO_pVGoWi/edit?gid=1176732448#gid=1176732448"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full md:w-[calc(25%-9px)]"
          >
            <div className="station-card text-blue-900 px-4 py-5 text-center text-sm font-semibold rounded-sm flex items-center justify-center h-full min-h-[70px]">
              CGS South Western Palawan - Balabac, Palawan
            </div>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900/90 text-white/80 text-center py-3 text-sm relative z-10">
        © 2026 CGDPAL Paperless System
      </footer>
    </div>
  );
}

export default App;
