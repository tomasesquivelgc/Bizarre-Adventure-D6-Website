import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Mechanics - Bizarre Adventure" }];
}

export default function Mechanics() {
  return (
    <main className="mx-auto w-gr-big bg-bg">
      <div className="mx-auto flex flex-q flex-col items-center justify-center px-[9%] py-[5.5%]">
        <h1 className="text-gr-h1 font-semibold mb-4">Mechanics</h1>
        <h2 className="text-gr-h2 font-medium mb-2">Rolling</h2>
        <p>
          Each character will have a pool of D6s to roll, when attempting to perform an Action. The amount is depicted as Xd6, 5d6 means 5 six-sided dice are rolled.
          This is depends on the Stat used and its rank, E/D/C/B/A ranks give 1/2/3/4/5 dice
        </p>
        <h2 className="text-gr-h2 font-medium mb-2">Results</h2>
        <p>
          When a given D6 is rolled, there are two possibilities.
          Rolls of 1/2/3/4 are Dead, adding +0.
          If it's a 5/6, that die is Live and adds +1.
          Add all +1s rolled for the Sum.
          If 5d6 is rolled, and 3 dice are a 5 or 6, then 3 is the Sum.
        </p>
        <h2 className="text-gr-h2 font-medium mb-2">DC</h2>
        <p>
          Rolls have a Difficulty (DC) assigned by the Narrator.
          A Sum of (6) minus a DC of (4) would make a +2 Difference.
          Ties cause a bizarre complication, neither success nor failure.
          Higher Differences mean higher severity of success/failure.
          A +3 difference is an ☆OVERPOSE☆, the player adds a bonus detail.
          A -3 difference is an ☆UNDERPOSE☆, so awry it opens a new path.
        </p>
        <h2 className="text-gr-h2 font-medium mb-2">Actions</h2>
        <p>
          An Action is what the subject is trying to do on their turn.
          A target can React to defend or interfere with the Action.
          After both are declared, the Narrator determines the Stats rolled.
          Actions roll Two Stats together for the Action's Sum, not one.
          Reactions roll the same way, and their Sum is the DC.
          Reactions are declared after Actions, influencing which Stats an Action can viably use.

          If an Action is to stab, a Reaction could be a parry or a dirty trick.
          If the Action is to legally corner someone, the Reaction may be a technicality around it.

          Ties cause a clash, neither side wins and a complication changes the scenario.
          Afterwards, the attacker immediately attempts another Action.

          An ☆OVERPOSER☆ in a contest adds a boon to their victory, sweetening the deal.
          Meanwhile, the ☆UNDERPOSER☆ adds a twist to that boon that may be exploited.
        </p>
        <h2 className="text-gr-h2 font-medium mb-2">Dual Heat</h2>
        <p>
          Actions and Reactions can be Passed to an ally instead.
          A Dual Heat is when half of an Action/Reaction is passed.
          Dual Heats lets an ally do the setup or the execution, with their Stat.
          Dual Heats still count a character's full turn, it's good manners to return the favor.
        </p>
        <h2 className="text-gr-h2 font-medium mb-2">Advantage</h2>
        <p>
          Actions that embrace JoJo's style can expand the Live Dice range by a maximum of 3.
          One Advantage makes it (4) Live, two makes (3) Live, and three makes (2) Live.
          With all three Advantages, 2, 3, 4, 5, and 6 all add +1 to the Sum.
          Actions & Reactions are locked in before Stats & Advantages are assigned.
        </p>
        <br />
        <p>
          +Hype (Nani?) is gained through Rule Of Cool and novelty.
          Turning the mundane into a spectacle, instead of repetition or expectation.
          I'm gonna fix that spaghetti!
        </p>

        <br />
        <p>
          +Ruse (Toyu!) - Seizing the upper hand with outside-the-box tactics.
          Using your brains over your brawn, instead of "do slap with big number".
          Your next line is...
        </p>
        <br />
        <p>
          +Moxie (Muda...) - Loyalty to convictions, detrimental or not.
          Acting on Bio/personal philosophy, instead of a blank avatar of yourself.
          But I refuse.
        </p>
        <h2 className="text-gr-h2 font-medium mb-2">Hits</h2>
        <p>
          If an Action targeting an enemy succeeds, it will deal a Hit.
          Hits are handicaps, which make certain actions impossible.
          A hit is a hit, whether it succeeds by 1 or 5.
          But while a 1 would disable a hand, a 5 would take the arm.
          This difference is the Hit's Severity, how debilitating it is.
          There is only one Hit from the one Sum.
          Hits can be mental or abstract limits, not just bodily harm.
          Reactions only interfere with Actions, they do not create Hits when succeeding.
        </p>
        <h2 className="text-gr-h2 font-medium mb-2">Retirement</h2>
        <p>
          A character can only take so many Hits before being Retired.
          Retired characters are out of commission, unable to take further Actions.
          An enemy's retirement is typically the end of their appearance in the plot.
          The Speedwagon Effect allows Retired players to continue talking in most scenes.
          Hits & Retirement are temporary; usually resetting after a fight.

          The Retirement state occurs when the Hit Limit reaches 0.
          Death occurs when the Hit Limit goes into -2.
          You usually can't instant-kill someone above 0 due to plot armor.
          Retired PCs are rarely targeted past 0, as they pose little threat.

        </p>
        <h2 className="text-gr-h2 font-medium mb-2">Gambits</h2>
        <p>
          During a contest, a Gambit may be placed together with the Action during your turn.
          This is a hidden trap that may turn the tides in one's favor, if the Trigger is met.
          Crucially, Gambits are never activated during that turn.
          They may activate at any other time, even after Retirement or Death.

          Gambits use the Luck Stat. Unlike most Stats, Luck is a resource rather than rolled.
          In normal cases, resource-type Stats are spent, or "burned", for a variety of bonuses.
          With a successful Gambit, these bonuses can be gained at no cost.

          To place a Gambit, decide which Luck Burn you'd like to benefit from.
          Then, attach a wager for half that number of Luck Ranks, rounded up.
          These Luck Ranks will remain unusable until the Gambit is activated or cancelled.
          Detail what the plan is, and its Trigger, on a face down paper and flip over if activated.
          If using an online medium, use a private text channel invisible to all Players.

          If the Gambit is activated, use that Luck Burn and recover the wagered Luck.
          If a Gambit is cancelled, the wagered Luck is spent for no effect.
          Gambits exist retroactively if activated. If a Gambit is cancelled, the trap never existed.
          Gambits can activate or cancel other Gambits as well, if the Triggers happen to line up.

        </p>
        <h2 className="text-gr-h2 font-medium mb-2">Hit Limit</h2>
        <p>
          The Hit Limit is a form of HP, determined by the character's role.
          Hit limits are flexible, and may change with the party size or tone.
          1-2 Hit Limit - Mooks, NPCs, stage hazards, wildlife.
          2-3 Hit Limit - PCs in a party, minor Antagonists.
          3-5 Hit Limit - Major antagonists, solo/duo PCs.

          Whether a Hit is physical or abstract, it is still a hit. Same meter, both can Retire or Kill.
          Death can also be non-physical. It may be trauma, or Fate's winds moving them away.
          If an injury is fully healed or a restriction lifted, the Hit is considered gone.
          Healing (Hamon/Vampire) only reduces or removes Hits affected by that source.
        </p>
        <h2 className="text-gr-h2 font-medium mb-2">Dark Determination</h2>
        <p>
          Though Retirement occurs at 0 Hit Limit and death occurs at -2, there's an exception.
          A character can choose to rise again after Retirement.
          Doing so adds a hit from the strain, putting them at -1.
          They can't be healed in any way, the next Hit will be fatal.

          Dark Determination is fueled by an immediate, single-minded obsession.
          The User cannot revert to the safety of Retirement until the goal is reached or they die.
        </p>
        <h2 className="text-gr-h2 font-medium mb-2">Turn Order</h2>
        <p>
          Every Action has a Turn for its execution.
          Each character has at least one Turn per Round, and those Rounds make up a Fight.
          Turns account for movement (~15-25 Meters) and potential setups.

          The parties get an equal amount of Turns, and always alternate between each side. 
          PCs can choose when to take their cue in the Party-Enemy-Party-Enemy turn flow.
          Initial Order can be done by player choice, drop-in, narrative flow, randomly, or rolled.

          In a 4v4 situation, all characters
          get one Turn per Round.
          In a 4v2 situation, the Duo members
          would each get two Turns per Round.
          In a 4v1 situation, the Sole fighter
          has all 4 of their side’s Turns.
          In a 4v3 situation, an Extra Turn is given to one of the Trio each Round, alternating.
        </p>
      </div>
    </main>
  );
}
