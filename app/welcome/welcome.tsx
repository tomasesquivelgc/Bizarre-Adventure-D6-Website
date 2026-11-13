export function Welcome() {
  return (
    <>
      {/* Hero Banner spans full screen width */}
      <section
        aria-label="Bizarre Adventures D6"
        className="w-full overflow-hidden"
      >
        <div className="w-full h-auto">
          <img
            src="/D6BannerFinal.webp"
            alt="JoJo protagonists and BAD6 logo"
            className="block h-auto w-full"
          />
        </div>
      </section>

      {/* Main content remains constrained and centered */}
      <main className="mx-auto flex flex-1 flex-col bg-bg pb-4 md:w-gr-big">
        <div className="mx-auto flex flex-q flex-col items-center justify-center px-[9%]">
          <h2 className="text-gr-h1 bg-bg-purple w-full">
            What Is This?
          </h2>
          <div className="flex gap-2">
            <p>
              A Tabletop RPG System, made with the intention of emulating <span className="underline">JoJo's Bizarre Adventure,</span> a popular Manga and Anime series.
              <br />
              <br />
              The <span className="underline">Players</span> create characters (PCs) to play as, and lead the story. They are the active movers and decision-makers of the game, as a group of 3-6 people.
              <br />
              The <span className="underline">Narrator</span> (GM) controls the flow of the world and NPCs. They are the final arbiter of any rulings made at their table, this rulebook is only a guideline.
              <br />
              <br />
              The core conceit of JJBA is the Stand User, one wielding a manifestation of their soul.
              <br />
              Every Stand has a unique <span className="underline">Ability</span>, <span className="underline">Typing</span>, & <span className="underline">Properties</span>.
              <br />
              <br />
              Stands & Users share damage and senses. If one is hurt, so is the other.
              <br />
              Stands can only be seen or harmed by other Stand Users.
              <br />
              Stands are selectively intangible.
              <br />
              Stands are strongest when close to the User.
              <br />
              <span className="underline">Exceptions</span> to these rules are common.
              <br />
              Certain non-Stand Users may be able to see or hurt Stands, by Narrator decision.
              <br />
              <br />
              For the detailed rules on Stands, <a href="https://mangadex.org/chapter/24555/2" className="underline">read this chapter</a>.
              Text is read from right to left, as opposed to a typical book's left to right.
              The television adaptation can be viewed on Crunchyroll <a href="http://www.crunchyroll.com/jojos-bizarre-adventure" className="underline">here</a>, or pirated on nyaa.si
            </p>
          </div>
          <h2 className="text-gr-h2 pt-10">Needed Materials</h2>
          <div className="flex w-full">
            <p>
              A handful of six-sided dice (D6) to roll when needed.
              <br />
              A pencil + paper to write down stats and make maps.
              <br />
              Alternatively, a paid account on Roll20 or Foundry VTT for online play.
              <br />
              <br />
              BAD6 Discord now operational.
              <br />
              Changelog here, and v.0.75b can be found here.
              <br />
              Roll20 & Foundry content can be found in Additional Links.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
