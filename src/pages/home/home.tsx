import CircularGallery from "../../components/circulargallery/CircularGallery";
import SpotlightCard from "../../components/SpotlightCard";
import "./home.scss";
import ElectricBorder from "../../components/ElectricBorder";


const items = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Cricket",
    subtitle: "Swing, Spin & Sixes",

    borderColor: "#f59e0b",
    gradient: "linear-gradient(145deg, #b45309, #000)",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Football",
    subtitle: "Goals, Saves & Glory",

    borderColor: "#fb923c",
    gradient: "linear-gradient(180deg, #ea580c, #000)",
  },
  {
    image: "https://i.pravatar.cc/300?img=3",
    title: "Basketball",
    subtitle: "Dunks & Dribbles",
    borderColor: "#f97316",
    gradient: "linear-gradient(145deg, #c2410c, #000)",
  },
];

const Home = () => {
  const handleDownloadPDF = (pdfType: "rulebook" | "championship") => {
    const pdfUrls: Record<typeof pdfType, string> = {
      rulebook: "/pdfs/rulebook.pdf",
      championship: "/assets/pdfs/general-championship.pdf",
    };

    const link = document.createElement("a");
    link.href = pdfUrls[pdfType];
    link.download =
      pdfType === "rulebook" ? "GC_Rulebook.pdf" : "General_Championship.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    
      <div className="   home-bg relative min-h-screen overflow pt-5 pb-1  text-slate-50">
        {/* background layer – brown glow over black */}

        <div className="popup mx-auto my-5 flex max-w-6xl flex-col gap-16 px-4 pb-20 md:px-6 lg:px-8">
          {/* HERO */}
          <section className="w-full ">
            <SpotlightCard spotlightColor="rgba(139, 76, 39, 0.55)">
              <div className="grid items-stretch gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
                {/* left: text */}
                <div className="flex flex-col gap-13 py-8">
                  <div>
                    <h1 className="text-balance text-3xl font-bold font-[Brave81] tracking-wide leading-tight text-amber-100 sm:text-4xl md:text-5xl">
                      General{" "}
                      <span className="font-bold font-[Brave81] tracking-wide text-amber-400">
                        {" "}
                        Championship{" "}
                      </span>{" "}
                    </h1>

                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-200/80 md:text-base">
                      General Championship (GC) brings together the best teams
                      and athletes for an electrifying showdown of skill,
                      passion and sportsmanship. Track points, cheer your team,
                      and witness history being made.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      className="cursor-target inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-2 text-sm font-medium text-black shadow-[0_0_32px_rgba(251,191,36,0.5)] transition hover:bg-amber-300 hover:shadow-[0_0_40px_rgba(251,191,36,0.7)]"
                      onClick={() => handleDownloadPDF("championship")}
                    >
                      <span className="text-base">🏆</span>
                      General Championship Info
                    </button>

                    <button
                      className="cursor-target inline-flex items-center gap-2 rounded-full border border-slate-200/20 bg-slate-900/60 px-6 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-900/90"
                      onClick={() => handleDownloadPDF("rulebook")}
                    >
                      📘 Rulebook
                    </button>
                  </div>

                  <dl className="mt-2 grid max-w-md grid-cols-3 gap-4 text-xs text-slate-200/80">
                    <div>
                      <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400">
                        Sports
                      </dt>
                      <dd className="text-base font-semibold text-amber-100">
                        10+
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400">
                        Teams
                      </dt>
                      <dd className="text-base font-semibold text-amber-100">
                        9
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-400">
                        Events
                      </dt>
                      <dd className="text-base font-semibold text-amber-100">
                        100+
                      </dd>
                    </div>
                  </dl>
                </div>
                {/* right: image */}
                <div className="flex items-center justify-center">
                  <img
                    src="/assets/gclogo.png"
                    alt="Sports illustration"
                    className="max-h-70 w-full object-contain md:max-h-80 lg:max-h-100"
                  />
                </div>
              </div>
            </SpotlightCard>
          </section>

          {/* CIRCULAR GALLERY */}
          <section className="space-y-6 ">
            <div className="flex justify-center pt-4">
              <ElectricBorder
                color="#f59e0b"
                speed={0.9}
                chaos={0.5}
                thickness={4}
                style={{ borderRadius: 16 }}
              >
                <div className="inline-flex items-center gap-3 rounded-full border border-[#6b4626cc] bg-black/70 px-6 py-2 shadow-[0_0_24px_rgba(0,0,0,0.85)]">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                  <h2 className="text-center text-2xl md:text-3xl font-bold font-[Brave81] tracking-wide text-amber-300">
                    Event Highlights
                  </h2>
                </div>
              </ElectricBorder>
            </div>

            <div className=" relative h-[500px] rounded-[1.75rem] border border-[#6b4626cc] bg-[radial-gradient(circle_at_0%_0%,#3b2416_0,#050302_55%,#000)] py-2 px-3.5 shadow-[0_0_32px_rgba(0,0,0,0.85)]">
              <CircularGallery
                bend={0.1}
                textColor="#fbbf24"
                borderRadius={0.08}
                scrollEase={0.02}
              />
            </div>
          </section>

          {/* UPCOMING EVENTS – CHROMA GRID */}
          <section className="space-y-6 pb-4">
            <div className="flex flex-col items-center pt-4">
              <ElectricBorder
                color="#f59e0b"
                speed={0.9}
                chaos={0.5}
                thickness={4}
                style={{ borderRadius: 16 }}
              >
                <div className="inline-flex items-center gap-3 rounded-full border border-[#6b4626cc] bg-black/70 px-6 py-2 shadow-[0_0_24px_rgba(0,0,0,0.85)]">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                  <h2 className="text-center text-2xl md:text-3xl font-bold font-[Brave81] tracking-wide text-amber-300">
                    Upcoming Events
                  </h2>
                </div>
              </ElectricBorder>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
    {items.map((item) => (
     <SpotlightCard
  key={item.title}
  spotlightColor="rgba(139, 76, 39, 0.45)"
  className="p-0 overflow-hidden rounded-3xl"
>
  <div className="flex flex-col h-full">
    {/* Image — FULL WIDTH, NO INNER PADDING */}
    <div className="relative w-full h-60 md:h-64 lg:h-72">
      <img
        src={item.image}
        alt={item.title}
        className=" rounded-2xl absolute inset-0 h-full w-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>

    {/* Text Section — SMALL, CLEAN */}
    <div className=" pt-3 pb-0">
      <h3 className="text-xl font-semibold text-amber-100 leading-tight">
        {item.title}
      </h3>
      <p className="mt-1 text-sm text-slate-300">
        {item.subtitle}
      </p>
    </div>
  </div>
</SpotlightCard>

    ))}
  </div>
          </section>
        </div>
      </div>
  );
};

export default Home;
