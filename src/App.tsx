import "./App.css";
import { TypeAnimation } from "react-type-animation";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="homepage container mx-auto">
        <nav className="navbar relative flex flex-row px-16 py-10 border-b-0">
          <div className="flex w-full justify-between relative">
            <span className="font-semibold uppercase tracking-[4px]" id="hafie">
              hafie
            </span>
            <div className="flex">
              <a href="#" className="ml-10 capitalize" id="portofolio">
                home
              </a>
              <a href="#" className="ml-10 capitalize" id="home">
                Portofolio
              </a>
            </div>
          </div>
          {/* Underline */}
          <div className="nav-border absolute bottom-0 left-0 w-full">
            <div className="nav-border-line absolute left-[0] right-[0] mx-auto w-[calc(100%-6rem)] border-b-1 "></div>
          </div>
        </nav>

        <main className="main px-16">
          {/* Hero Section */}
          <section className="hero">
            <h1 className="hero-title text-[84px] bg-gradient-to-r from-green-hero to-pink-hero bg-clip-text text-transparent font-bold h-lvh flex justify-center items-center">
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  "Hi, I’m Hafie—just a normal person who loves discovering new things in tehc...",
                  1000,
                  "Hi, I’m Hafie—just a normal person who loves discovering new things in business...",
                  1000,
                  "Hi, I’m Hafie—just a normal person who loves discovering new things in anime...",
                  1000,
                  "Hi, I’m Hafie—just a normal person who loves discovering new things in etc...",
                  1000,
                ]}
                repeat={Infinity}
              />
            </h1>
            {/* Circular Gradients */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top-Left Gradient */}
              <div className="absolute -top-10 -left-10 w-35 h-35 rounded-full bg-emerald-400 opacity-75 blur-[75px]"></div>
              {/* Bottom Right Gradient */}
              <div className="absolute bottom-[25%] -right-10 w-35 h-35 rounded-full bg-blue-900 opacity-75 blur-[75px]"></div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
