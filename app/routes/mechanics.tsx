import type { ReactNode } from "react";
import type { Route } from "./+types/home";
import { Link } from "react-router";
import { OnThisPage } from "../components/OnThisPage";

const B = ({ children }: { children: ReactNode }) => (
  <span className="font-bold">{children}</span>
);

const I = ({ children }: { children: ReactNode }) => (
  <span className="italic">{children}</span>
);

const U = ({ children }: { children: ReactNode }) => (
  <span className="underline">{children}</span>
);

const BI = ({ children }: { children: ReactNode }) => (
  <span className="font-bold italic">{children}</span>
);

const IU = ({ children }: { children: ReactNode }) => (
  <span className="italic underline">{children}</span>
);

const BU = ({ children }: { children: ReactNode }) => (
  <span className="font-bold underline">{children}</span>
);

const BIU = ({ children }: { children: ReactNode }) => (
  <span className="font-bold italic underline">{children}</span>
);

const BlueLink = ({ children }: { children: ReactNode }) => (
  <span className="text-link-blue underline italic">{children}</span>
);

export function meta({}: Route.MetaArgs) {
  return [{ title: "Mechanics - Bizarre Adventure" }];
}

const sections = [
  ["rolling", "Rolling"],
  ["results", "Results"],
  ["DC", "DC"],
  ["actions", "Actions"],
  ["dual-heat", "Dual Heat"],
  ["advantage", "Advantage"],
  ["hits", "Hits"],
  ["retirement", "Retirement"],
  ["gambits", "Gambits"],
  ["hitLimit", "Hit Limit"],
  ["dark-determination", "Dark Determination"],
  ["turn-order", "Turn Order"],
] as const;

const sectionHeading =
  "w-full text-gr-h2 font-medium scroll-mt-24 underline text-center";

export default function Mechanics() {
  return (
    <>
      <OnThisPage
        sections={sections}
        ariaLabel="Mechanics sections"
        className="z-40 mx-auto mb-4 w-[calc(100%-2rem)] rounded-xl border border-fg/14 bg-bg-lt/72 p-4 md:w-gr-big lg:fixed lg:top-24 lg:left-[max(0.5rem,calc(19.1%-12.25rem))] lg:mb-0 lg:w-[11.25rem] [&_a]:rounded-md [&_a]:px-2 [&_a]:py-1.5 [&_a]:text-sm [&_a]:text-fg [&_a]:no-underline [&_a:hover]:bg-bg-hl [&_a:focus-visible]:bg-bg-hl [&_a:focus-visible]:outline-none [&_nav]:grid [&_nav]:gap-0.5 max-lg:[&_nav]:grid-cols-2"
      />
      <main className="mx-auto flex w-full flex-1 flex-col bg-bg pb-8 md:w-gr-big">
        <div className="w-full bg-bg-green md:px-[9%] py-5 sm:px-10 sm:py-6">
          <h2 className="w-full text-right text-gr-h1">Mechanics</h2>
        </div>

        <div className="mx-auto px-4 flex w-full flex-col gap-10 md:px-[9%] pt-8 leading-[1.7]">
          <section className="flex w-full flex-col gap-4">
            <h3 id="rolling" className={sectionHeading}>
              Rolling
            </h3>
            <p>
              Each character will have a <U>pool of D6s</U> to roll, when
              attempting to perform an Action. The amount is depicted as Xd6,{" "}
              <B>5d6</B> means <B>5</B> six-sided dice are rolled.
              <br />
              This is depends on the{" "}
              <Link
                to="/character-creation#user-stats"
                className="text-link-blue underline font-bold italic"
              >
                Stat
              </Link>{" "}
              used and its rank, <BI>E/D/C/B/A</BI> ranks give{" "}
              <BI>1/2/3/4/5</BI> dice
            </p>
          </section>

          <section className="w-full flow-root">
            <div className="xl:flex xl:items-stretch xl:gap-6">
              <img
                src="/mechanics/rolling_results.webp"
                alt="Close-up of a six-sided die"
                className="float-left mt-1 mr-3 mb-2 w-32 border-4 border-black sm:w-36 md:mr-4 md:w-48 xl:float-none xl:mt-0 xl:mr-0 xl:mb-0 xl:h-full xl:w-auto xl:min-h-0 xl:self-stretch xl:object-cover"
              />
              <div className="xl:flex xl:min-w-0 xl:flex-1 xl:flex-col xl:justify-center">
                <h3 id="results" className={`${sectionHeading} text-center`}>
                  Results
                </h3>
                <p className="mt-4 xl:text-right">
                  When a given D6 is rolled, there are two possibilities.
                  <br />
                  Rolls of <B>1/2/3/4</B> are <BIU>Dead</BIU>, adding <B>+0</B>.
                  <br />
                  If it&apos;s a <B>5/6</B>, that die is <BIU>Live</BIU> and adds{" "}
                  <B>+1</B>.
                  <br />
                  <U>Add</U> all +1s rolled for the <BIU>Sum</BIU>.
                  <br />
                  If <B>5d6</B> is rolled, and <B>3</B> dice are a <U>5 or 6</U>,
                  then <B>3</B> is the Sum.
                </p>
              </div>
            </div>
          </section>

          <section className="w-full">
            <h3 id="DC" className={`${sectionHeading} text-center`}>
              DC
            </h3>
            <p className="mt-4">
              Rolls have a Difficulty (<BIU>DC</BIU>) assigned by the Narrator.
              <br />A <IU>Sum</IU> of <B>(6)</B> minus a <IU>DC</IU> of{" "}
              <B>(4)</B> would make a <BIU>+2 Difference</BIU>.
              <br />
              <BIU>Ties</BIU> cause a bizarre complication, neither success nor
              failure.
              <br />
              Higher <I>Differences</I> mean <I>higher severity</I> of
              success/failure.
            </p>
            <img
              src="/mechanics/dc_actions.webp"
              alt="A hand sketching a figure"
              className="float-right mt-4 mb-4 ml-6 hidden border-4 border-red-900 xl:block xl:w-[min(28rem,calc(100%-34rem))]"
            />
            <p className="mt-4">
              A <B>+3</B> difference is an <B>☆OVERPOSE☆</B>, the player adds a
              bonus detail.
              <br />A <B>-3</B> difference is an <B>☆UNDERPOSE☆</B>, so awry it
              opens a new path.
            </p>
            <img
              src="/mechanics/dc_actions.webp"
              alt="A hand sketching a figure"
              className="mx-auto mt-6 block w-full max-w-lg border-4 border-red-900 xl:hidden"
            />

            <div className="mt-8 space-y-4">
              <h3 id="actions" className={`${sectionHeading} text-center`}>
                Actions
              </h3>
              <p>
                An <U>Action</U> is what the subject is{" "}
                <B>trying to do on their turn</B>.
                <br />A target can <BI>React</BI> to{" "}
                <B>defend or interfere</B> with the Action.
                <br />
                After both are declared, the Narrator determines the{" "}
                <Link
                  to="/character-creation#user-stats"
                  className="text-link-blue underline italic font-bold"
                >
                  Stats
                </Link>{" "}
                rolled.
                <br />
                Actions roll <B>Two Stats together</B> for the Action&apos;s{" "}
                <I>Sum</I>, not one.
                <br />
                Reactions roll the same way, and their <IU>Sum</IU> is the{" "}
                <Link
                  to="#DC"
                  className="text-link-blue italic underline font-bold"
                >
                  DC
                </Link>
                .
                <br />
                Reactions are declared after Actions, influencing which Stats an
                Action can viably use.
              </p>
              <p>
                If an Action is to <U>stab</U>, a Reaction could be a parry or a
                dirty trick.
                <br />
                If the Action is to <U>legally corner</U> someone, the Reaction
                may be a technicality around it.
              </p>
              <p>
                <BIU>Ties</BIU> cause a clash, neither side wins and a
                complication changes the scenario.
                <br />
                Afterwards, the attacker immediately attempts <I>another</I>{" "}
                Action.
              </p>
              <p>
                An <B>☆OVERPOSER☆</B> in a contest adds a <U>boon</U> to their
                victory, sweetening the deal.
              </p>
            </div>
            <div className="clear-both" />
          </section>

          <section className="flex w-full flex-col gap-4">
            <h3 id="dual-heat" className={sectionHeading}>
              Dual Heat
            </h3>
            <p>
              <IU>Actions and Reactions</IU> can be <BI>Passed</BI> to an ally
              instead.
              <br />A <BIU>Dual Heat</BIU> is when half of an Action/Reaction is
              passed.
              <br />
              <IU>Dual Heats</IU> lets an ally do the <I>setup</I> or the{" "}
              <I>execution</I>, with their <BI>Stat</BI>.
              <br />
              Dual Heats still count a character&apos;s full turn, it&apos;s good
              manners to return the favor.
            </p>
          </section>

          <section className="flex w-full flex-col gap-4">
            <h3 id="advantage" className={sectionHeading}>
              Advantage
            </h3>
            <p>
              Actions that <I>embrace JoJo&apos;s style</I> can expand the{" "}
              <Link
                to="#results"
                className="underline text-link-blue font-bold italic"
              >
                Live Dice
              </Link>{" "}
              range by a maximum of 3.
              <br />
              One <I>Advantage</I> makes it <B>(4)</B> Live, two makes <B>(3)</B>{" "}
              Live, and three makes <B>(2)</B> Live.
              <br />
              With <I>all three Advantages</I>, <B>2, 3, 4, 5, and 6</B> all add
              +1 to the Sum.
              <br />
              <IU>Actions & Reactions</IU> are locked in <B>before</B>{" "}
              <IU>Stats & Advantages</IU> are assigned.
            </p>

            <div className="mt-2 flex w-full flex-col gap-6">
              <div className="flex items-center gap-4 sm:gap-6">
                <img
                  src="/mechanics/hype.webp"
                  alt="A stand bursting through a pile of cash"
                  className="w-32 shrink-0 border-4 border-gray-500 sm:w-40 md:w-44"
                />
                <p className="min-w-0 flex-1 text-center">
                  <BIU>+Hype</BIU> (<I>Nani?</I>) is gained through Rule Of Cool
                  and <U>novelty</U>.
                  <br />
                  <I>
                    Turning the <U>mundane</U> into a <B>spectacle</B>, instead
                    of repetition or expectation.
                  </I>
                  <br />
                  <IU>I&apos;m gonna fix that spaghetti!</IU>
                </p>
              </div>

              <div className="flex items-center gap-4 sm:gap-6">
                <img
                  src="/mechanics/ruse.webp"
                  alt="A young man pointing forward"
                  className="w-32 shrink-0 border-4 border-green-600 sm:w-40 md:w-44"
                />
                <p className="min-w-0 flex-1 text-center">
                  <BIU>+Ruse</BIU> (<I>Toyu!</I>) - Seizing the{" "}
                  <U>upper hand</U> with outside-the-box tactics.
                  <br />
                  <I>
                    Using your <B>brains</B> over your <B>brawn</B>, instead of
                    &apos;do slap with big number&apos;.
                  </I>
                  <br />
                  <IU>Your next line is...</IU>
                </p>
              </div>

              <div className="flex items-center gap-4 sm:gap-6">
                <img
                  src="/mechanics/moxie.webp"
                  alt="A close-up of a glaring face"
                  className="w-32 shrink-0 border-4 border-blue-500 sm:w-40 md:w-44"
                />
                <p className="min-w-0 flex-1 text-center">
                  <BIU>+Moxie</BIU> (<I>Muda...</I>) - Loyalty to{" "}
                  <U>convictions</U>, detrimental or not.
                  <br />
                  <I>
                    Acting on <B>Bio/personal philosophy</B>, instead of a{" "}
                    <U>blank avatar</U> of yourself.
                  </I>
                  <br />
                  <IU>But I refuse.</IU>
                </p>
              </div>
            </div>
          </section>

          <section className="w-full flow-root">
            <h3 id="hits" className={`${sectionHeading} text-center`}>
              Hits
            </h3>
            <img
              src="/mechanics/hits.webp"
              alt="Gyro Zeppeli shouting"
              className="float-left mt-4 mr-4 mb-2 w-40 border-4 border-amber-300 sm:w-56 md:w-64 xl:w-96 2xl:w-[28rem]"
            />
            <p className="mt-4 text-right">
              If an Action targeting an enemy succeeds, it will deal a{" "}
              <BIU>Hit</BIU>.
              <br />
              Hits are <I>handicaps</I>, which make certain actions{" "}
              <U>impossible</U>.
              <br />
              <BI>A hit is a hit</BI>, whether it succeeds by 1 or 5.
              <br />
              But while a <B>1</B> would disable a hand, a <B>5</B> would take
              the arm.
              <br />
              This difference is the Hit&apos;s <BI>Severity</BI>, how
              debilitating it is.
              <br />
              There is only <BI>one Hit</BI> from the one{" "}
              <Link
                to="#results"
                className="text-link-blue underline font-bold italic"
              >
                Sum
              </Link>
              .
              <br />
              Hits can be <I>mental or abstract limits</I>, not just{" "}
              <I>bodily harm</I>.
              <br />
              Reactions only interfere with Actions, they do not create Hits
              when succeeding.
            </p>
          </section>

          <section className="@container w-full flow-root">
            <h3 id="retirement" className={`${sectionHeading} text-center`}>
              Retirement
            </h3>
            <p className="mt-4">
              A character can only take so many <I>Hits</I> before being{" "}
              <BI>Retired</BI>.
              <br />
              <I>Retired</I> characters are out of commission, unable to take
              further Actions.
              <br />
              An enemy&apos;s retirement is typically the <U>end</U> of their
              appearance in the plot.
              <br />
              The <BI>Speedwagon Effect</BI> allows <I>Retired</I> players to
              continue talking in most scenes.
              <br />
              <IU>Hits & Retirement</IU> are temporary; usually <B>resetting</B>{" "}
              after a fight.
            </p>
            <img
              src="/mechanics/retirement.webp"
              alt="A panel reading Retired"
              className="float-right mt-4 mb-2 ml-5 hidden border-4 border-black @[45rem]:block @[45rem]:w-[min(28rem,calc(100cqw-32.5rem))]"
            />
            <p className="mt-4">
              The Retirement state occurs when the{" "}
              <Link
                to="#hitLimit"
                className="underline italic font-bold text-link-blue"
              >
                Hit Limit
              </Link>{" "}
              reaches <B>0</B>.
              <br />
              <B>Death</B> occurs when the Hit Limit goes into <B>-2</B>.
              <br />
              You usually can&apos;t instant-kill someone above <B>0</B> due to{" "}
              <U>plot armor</U>.
              <br />
              Retired <U>PCs</U> are <I>rarely</I> targeted past <B>0</B>, as
              they pose little threat.
            </p>
            <img
              src="/mechanics/retirement.webp"
              alt="A panel reading Retired"
              className="mx-auto mt-6 block w-full max-w-md border-4 border-black @[45rem]:hidden"
            />
          </section>

          <section className="flex w-full flex-col gap-4">
            <h3 id="gambits" className={sectionHeading}>
              Gambits
            </h3>
            <p>
              During a contest, a <BI>Gambit</BI> may be placed together with the
              Action during your turn.
              <br />
              This is a <I>hidden trap</I> that may turn the tides in one&apos;s
              favor, if the <BI>Trigger</BI> is met.
              <br />
              Crucially, <U>Gambits</U> are <B>never</B> activated during that
              turn.
              <br />
              They may activate at <I>any other time</I>, even after Retirement
              or Death.
            </p>
            <p>
              <U>Gambits</U> use the <B>Luck</B> Stat. Unlike most Stats, Luck is
              a <I>resource</I> rather than rolled.
              <br />
              In normal cases, resource-type Stats are spent, or <I>&apos;burned&apos;</I>,
              for a variety of bonuses.
              <br />
              With a successful Gambit, these bonuses can be gained at{" "}
              <U>no cost</U>.
            </p>
            <p>
              To place a Gambit, decide which{" "}
              <Link
                to="/character-creation#luckBurn"
                className="italic underline font-bold text-link-blue"
              >
                Luck Burn
              </Link>{" "}
              you&apos;d like to benefit from.
              <br />
              Then, attach a wager for half that number of <U>Luck Ranks</U>,
              rounded up.
              <br />
              These Luck Ranks will remain unusable until the Gambit is activated
              or cancelled.
              <br />
              Detail what the plan is, and its <U>Trigger</U>, on a face down
              paper and flip over if activated.
              <br />
              If using an online medium, use a private text channel invisible to
              all Players.
            </p>
            <p>
              If the Gambit is <B>activated</B>, use that Luck Burn <I>and</I>{" "}
              recover the wagered Luck.
              <br />
              If a Gambit is <B>cancelled</B>, the wagered Luck is spent for no
              effect.
              <br />
              Gambits exist retroactively if activated. If a Gambit is cancelled,
              the trap never existed.
              <br />
              Gambits can activate or cancel other Gambits as well, if the{" "}
              <I>Triggers</I> happen to line up.
            </p>
          </section>

          <section className="w-full">
            <div className="grid">
              <div className="col-start-1 row-start-1">
                <h3 id="hitLimit" className={sectionHeading}>
                  Hit Limit
                </h3>
                <p className="mt-4 text-left sm:pr-32 md:pr-36">
                  The <BIU>Hit Limit</BIU> is a form of HP, determined by the
                  character&apos;s <U>role</U>.
                  <br />
                  <I>Hit limits</I> are flexible, and may change with the party
                  size or tone.
                  <br />
                  <B>1-2</B> Hit Limit -{" "}
                  <I>Mooks, NPCs, stage hazards, wildlife.</I>
                  <br />
                  <B>2-3</B> Hit Limit -{" "}
                  <I>PCs in a party, minor Antagonists.</I>
                  <br />
                  <B>3-5</B> Hit Limit - <I>Major antagonists, solo/duo PCs.</I>
                </p>
              </div>
              <img
                src="/mechanics/hit_limit.webp"
                alt="A silver ribbon marked with blood"
                className="col-start-1 row-start-1 hidden w-28 justify-self-end self-start border-4 border-black sm:block md:w-32"
              />
            </div>
            <img
              src="/mechanics/hit_limit.webp"
              alt="A silver ribbon marked with blood"
              className="mx-auto mt-4 block w-28 border-4 border-black sm:hidden"
            />
            <p className="mt-4">
              Whether a Hit is <I>physical or abstract</I>, it is still a hit.
              Same meter, <B>both</B> can <IU>Retire</IU> or <IU>Kill</IU>.
              <br />
              <U>Death</U> can also be non-physical. It may be trauma, or
              Fate&apos;s winds moving them away.
              <br />
              If an injury is <U>fully healed</U> or a restriction <U>lifted</U>,
              the Hit is considered <B>gone</B>.
              <br />
              Healing (
              <Link
                to="/character-creation#hamon"
                className="underline text-link-blue"
              >
                Hamon
              </Link>
              /
              <Link
                to="/character-creation#vampire"
                className="underline text-link-blue"
              >
                Vampire
              </Link>
              ) only reduces or removes Hits affected by that source.
            </p>
          </section>

          <section className="w-full">
            <h3 id="dark-determination" className={sectionHeading}>
              Dark Determination
            </h3>
            <p className="mt-4 flow-root">
              Though Retirement occurs at 0 <IU>Hit Limit</IU> and death occurs
              at -2, there&apos;s an exception.
              <br />
              <img
                src="/mechanics/dark_determination.webp"
                alt="A close-up of intense blue eyes"
                className="float-left mt-1 mr-4 mb-2 w-40 border-4 border-red-600 sm:w-52 md:w-64"
              />
              A character can choose to <I>rise again</I> after Retirement.
              <br />
              Doing so <U>adds a hit</U> from the strain, putting them at -1.
              <br />
              They <I>can&apos;t</I> be healed in any way, the next <BI>Hit</BI>{" "}
              will be fatal.
            </p>
            <p className="mt-4">
              <IU>Dark Determination</IU> is fueled by an immediate,
              single-minded <B>obsession</B>.
              <br />
              The User <B>cannot</B> revert to the safety of <I>Retirement</I>{" "}
              until the goal is <U>reached</U> or they <U>die</U>.
            </p>
          </section>

          <section className="w-full">
            <div className="flex flex-col gap-4">
              <h3 id="turn-order" className={`${sectionHeading} text-center`}>
                Turn Order
              </h3>
              <p>
                Every <I>Action</I> has a <I>Turn</I> for its execution.
                <br />
                Each character has at least one <I>Turn</I> per <I>Round</I>, and
                those Rounds make up a <I>Fight</I>.
                <br />
                Turns account for <U>movement</U> (~15-25 Meters) and potential
                setups.
              </p>
              <p>
                The parties get an <B>equal</B> amount of <I>Turns</I>, and always{" "}
                <B>alternate</B> between each side.
                <br />
                PCs can choose when to take their <U>cue</U> in the
                Party-Enemy-Party-Enemy turn flow.
                <br />
                <I>
                  Initial Order can be done by player choice, drop-in, narrative
                  flow, randomly, or rolled.
                </I>
              </p>
              <p>
                <img
                  src="/mechanics/turn_order.webp"
                  alt="Four glasses of iced tea lined up in a row"
                  className="float-left mb-2 mr-4 w-52 border-4 border-[#c4a035] sm:w-72"
                />
                In a 4v4 situation, <I>all</I> characters get <U>one</U> Turn per
                Round.
                <br />
                In a 4v2 situation, the <I>Duo</I> members would each get{" "}
                <U>two</U> Turns per Round.
                <br />
                In a 4v1 situation, the <I>Sole</I> fighter has all 4 of their
                side&apos;s Turns.
                <br />
                In a 4v3 situation, an Extra Turn is given to one of the{" "}
                <I>Trio</I> each Round, alternating.
              </p>
            </div>
            <div className="clear-both" />
          </section>
        </div>
      </main>
    </>
  );
}
