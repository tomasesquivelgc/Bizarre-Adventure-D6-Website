import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Character Creation - Bizarre Adventure" }];
}

const sections = [
  ["point-buy-tiers", "Point buy tiers"],
  ["bios", "Bios"],
  ["user-stats", "User Stats"],
  ["stand-stats", "Stand Stats"],
  ["rank-burns", "Rank Burns"],
  ["range-learning-ranks", "Range/Learning Ranks"],
  ["properties", "Properties"],
  ["abilities", "Abilities"],
  ["stand-types", "Stand Types"],
  ["alternative-character-options", "Alternative Character Options"],
  ["alternative-user-types", "Alternative User Types"],
  ["alternative-power-sources", "Alternative Power Sources"],
  ["alternative-source-range-stats", "Alternative Source Range Stats"],
] as const;

export default function CharacterCreation() {
  return (
    <>
      <aside
        className="z-40 mx-auto mb-4 w-[calc(100%-2rem)] rounded-xl border border-fg/14 bg-bg-lt/72 p-4 md:w-gr-big lg:fixed lg:top-24 lg:left-[max(0.5rem,calc(19.1%-12.25rem))] lg:mb-0 lg:max-h-[calc(100vh-7rem)] lg:w-[11.25rem] lg:overflow-y-auto [&_a]:rounded-md [&_a]:px-2 [&_a]:py-1.5 [&_a]:text-sm [&_a]:text-fg [&_a]:no-underline [&_a:hover]:bg-bg-hl [&_a:focus-visible]:bg-bg-hl [&_a:focus-visible]:outline-none [&_nav]:grid [&_nav]:gap-0.5 max-lg:[&_nav]:grid-cols-2"
        aria-label="Character creation sections"
      >
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.08em]">On this page</p>
        <nav>
          {sections.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </aside>
      <main id="character-content" className="mx-auto md:w-gr-big bg-bg px-4 pb-16 pt-16 leading-[1.7]">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">Player guide</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Character Creation</h1>
          <p className="mt-3 text-lg text-muted">
            Build a User, Stand, or alternative character source by choosing stats, abilities, and properties within
            your setting&apos;s point-buy budget.
          </p>
        </header>

          <div className="min-w-0 [&_p]:mb-5 [&_p]:whitespace-pre-line [&_li]:whitespace-pre-line [&_ul]:mb-6 [&_ul]:grid [&_ul]:gap-3 [&_ul]:pl-5 [&_li::marker]:text-brand [&_ul_ul]:mt-3">
      <p>
        Stats determine the dice pool for their uses, and are different for Users and Stands.
        Each Stat has a rank from E to A, with niche instances of Ø (Always Failure), ∞ (10d6), and S (Special/Other, is not an A+)

        Stats cost points, and the total amount for Point Buys scales with the setting chosen.
        These pay for User Stats, Stand Stats, Abilities, and Properties.

        The smaller pool (left) is used for Users.
        The larger pool (right) is used for Stands.

        Most games run on a Medium-range setting.
        1-2 points can be moved from one pool to the other.
        Some settings invert them, using the large pool for Users and small pool for Stands.
      </p>
      <h2 id="point-buy-tiers" className="mt-12 scroll-mt-4 border-t border-fg/18 pt-4 text-xl font-medium max-md:mt-10">Point buy tiers</h2>
      <ul className="mb-6 grid list-none gap-0 overflow-hidden rounded-xl border border-fg/14 bg-bg-lt/58 p-0 [&>li]:grid [&>li]:grid-cols-[minmax(7rem,0.7fr)_minmax(7rem,1fr)] [&>li]:items-baseline [&>li]:gap-3 [&>li]:border-b [&>li]:border-fg/12 [&>li]:px-4 [&>li]:py-3 [&>li:last-child]:border-b-0 [&>li>strong]:tabular-nums max-md:[&>li]:grid-cols-[1fr_1fr]" aria-label="Point buy tiers">
        <li><span>Sad</span><strong>12 / 12</strong></li>
        <li><span>Minion</span><strong>15 / 18</strong></li>
        <li><span>Low</span><strong>17 / 20</strong></li>
        <li><span>Medium-Low</span><strong>19 / 23</strong></li>
        <li><span>Medium</span><strong>21 / 25</strong></li>
        <li><span>Medium-High</span><strong>22 / 27</strong></li>
        <li><span>High</span><strong>23 / 30</strong></li>
        <li><span>Fabulous</span><strong>24 / 32</strong></li>
        <li><span>Over Heaven</span><strong>26 / 40</strong></li>
      </ul>
      <h2 id="bios" className="mt-12 scroll-mt-4 border-t border-fg/18 pt-4 text-xl font-medium max-md:mt-10">Bios</h2>
      <p>
        Every character has personality traits, history, and a philosophy.
        The Moxie Advantage focuses on this section for its references.

        A backstory, traits, bubble map, art, anything you can point at.
        One can put in as much or as little detail as they desire.
        A more detailed Bio will have more chances to justify the Advantage.
        The Bio grows with the character themselves, as events unfold...
      </p>
      <h2 id="user-stats" className="mt-12 scroll-mt-24 border-t border-fg/18 pt-4 text-xl font-medium max-md:mt-10">User Stats</h2>
      <ul className="mb-6 grid list-none gap-0 overflow-hidden rounded-xl border border-fg/14 bg-bg-lt/58 p-0 [&>li]:grid [&>li]:grid-cols-[2rem_minmax(8rem,0.8fr)_minmax(0,2fr)] [&>li]:items-baseline [&>li]:gap-3 [&>li]:border-b [&>li]:border-fg/12 [&>li]:px-4 [&>li]:py-3 [&>li:last-child]:border-b-0 [&>li>strong]:tabular-nums max-md:[&>li]:grid-cols-[2rem_1fr] max-md:[&>li_span:last-child]:col-start-2" aria-label="User stat ranks">
        <li><span>E</span><strong>1d6 · 1 point</strong><span>Very weak, possibly handicapped.</span></li>
        <li><span>D</span><strong>2d6 · 2 points</strong><span>Substandard, lacking in that area.</span></li>
        <li><span>C</span><strong>3d6 · 3 points</strong><span>Healthy, but nothing spectacular.</span></li>
        <li><span>B</span><strong>4d6 · 4 points</strong><span>Adept, and it shows.</span></li>
        <li><span>A</span><strong>5d6 · 5 points</strong><span>Talented, in a league of their own.</span></li>
      </ul>
      <ul>
        <li>
          Body - Physical fitness. Stamina, strength, & control.
          High Body - Lisa Lisa, Forever, Tarkus
          Low Body - Reimi, Coco Jumbo, Emporio
        </li>
        <li>
          Wit - Quick & lateral thinking. Acuity, reflex, & intuition.
          High Wit - Joseph, D'Arby, Jolyne
          Low Wit - Whammu, Mista, Foo Fighters
        </li>
        <li>
          Reason - Deep & critical thinking. Judgment, education, & deduction.
          High Reason - Risotto, Gyro, Gappy
          Low Reason  - Okuyasu, Narancia, Arabia Fats
        </li>
        <li>
          Menacing - Force of personality. Manipulation, empathy, & fabulousness.
          High Menacing - DIO, Josuke, Bucciarati
          Low Menacing - Joshu, Shigechi, Abbacchio
        </li>
        <li>
          Pluck - Fighting spirit. Resolve, inspiration, & composure.
          High Pluck - Jonathan, Giorno, Pesci
          Low Pluck - Hol Horse, Akira, Ghiaccio
        </li>
        <li>
          Luck - Narrative bargaining chips. Can be burnt for various nudges.
          High Luck - Dio Brando, Joestar Family, Diavolo
          Low Luck - Danny, Masazo, Doppio
        </li>
      </ul>
      <h2 id="stand-stats" className="mt-12 scroll-mt-4 border-t border-fg/18 pt-4 text-xl font-medium max-md:mt-10">Stand Stats</h2>
      <div>
        <ul>
          <li>
            E:  1d6 Dice (1 Point) - Depressingly low, could barely crush a soda can.
          </li>
          <li>
            D: 2d6 Dice (2 Points) - Okay, could carry a heavy load.
          </li>
          <li>
            C: 3d6 Dice (3 Points) - Average, able to do grave harm in the right scenario.
          </li>
          <li>
            B: 4d6 Dice (4 Points) - Dangerous, about as lethal as a gun.
          </li>
          <li>
            A: 5d6 Dice (5 Points) - Astonishing, could tear through layers of steel.
          </li>
          <li>
            Ø: Automatic Failure (0) (-1 Point) - Non-existent, unable to perform action.
          </li>
          <li>
            ∞: 10d6 Dice (13 Points) - Off the charts, capable of the impossible.
          </li>
          <li>
            SPECIAL: (Variable) - Reserved for deviations that defy numerical measure or can shift. 
            Represented as S (X), X being the Point Cost. e.g. S (3) for a 3 Point cost.
          </li>
        </ul>

        <ul>
          <li>
            Power - The Stand's destructive potential & defense bypassing.
            High Power - Cream, Killer Queen, Green Day
            Low Power - C-Moon, Pearl Jam, California King Bed
          </li>
          <li>
            Speed - The Stand's alacrity & activation rate.
            High Speed - Silver Chariot, Black Sabbath, Ball Breaker
            Low Speed - Empress, Grateful Dead, Survivor
          </li>
          <li>
            Range - The Stand's maximum effective distance from the User.
            High Range - Lovers, Harvest, Highway Star
            Low Range - Anubis, Cheap Trick, Diver Down
          </li>
          <li>
            Durability - The Stand's resistance & manifestation duration.
            High Durability - Strength, Notorious B.I.G, 20th Century Boy
            Low Durability - Purple Haze, King Crimson, Tubular Bells
          </li>
          <li>Precision - The Stand's accuracy & ability focus.
              High Precision - Emperor, Moody Blues, Awaking III Leaves
              Low Precision - Mandom, Sheer Heart Attack, Wonder Of U
          </li>
          <li>
            Learning - The Stand's hidden potential & ability flexibility, can be burnt.
            High Learning - Tusk Act 1, Gold Experience, Stone Free
            Low Learning - Tusk Act 3, Hermit Purple, Rolling Stones
          </li>
        </ul>
        <p>
          Luck, Learning and Range measure in Ranks, not Dice.
          Ø/E/D/C/B/A/∞ = 0/1/2/3/4/5/15 Ranks.
        </p>
      </div>
      <h2 id="rank-burns" className="mt-12 scroll-mt-4 border-t border-fg/18 pt-4 text-xl font-medium max-md:mt-10">Rank Burns</h2>
      <p>
        The Luck & Learning Ranks are a consumable resource for boons.
        Luck burns are usually temporary, restored after the session ends.
        Learning burns are a mix of permanent and temporary reductions.
        Permanent Rank Burns end at 0 Ranks, a grade of Ø preventing more perma-burns.
        Temporary Rank Burns use the original rank, rather than the reduced one.
        Even after perma-burning from an A to a Ø, those 5 ranks still exist for temp burns.

        Adapt is exclusive to Stand-Users, all other Learning uses are universal.
        If a Learning Burn is permanent, add Advantages = Ranks Burnt to its Intro Scene.
      </p>
      <h3 id="luckBurn">Luck Burn</h3>
      <p>
        Feint (-1 Temp) - Edit your Action/Reaction after hearing the enemy's, pre-roll.
        Instead of going for the left hook, I'll read their block and trip instead…
        Fudge (-2 Temp) - Add a free Advantage, pre-roll.
        Fingers crossed. Cannot go over the total Advantage max of +3.
        Flashback (-3 Temp) - The Narrator "forgot" a detail you choose and retcons it in.
        Maybe there were bullets in the gun... Maybe you did have a trap buried…
        Mulligan (-4 Temp) - Add a free Advantage, post-roll.
        A little spice when nobody's looking… Advantage max of +3 still applies.
        Persist (-2 Perm) - Try another Action/Reaction after a failed one post-roll, as if it tied.
        Consequences of the initial fumble may change the scenario for the worse, but no hit.
        Gambit (1/2) - Luck Cost of anything = 0 if successful.
        See prior section on Gambits for more details
      </p>
      <p>
        Learning Burn
        Loophole (-1 Perm) - Unlocks a new aspect of the main ability, adding a new line.
        These are rules or clauses added to existing abilities, answering niche "what-ifs".
        e.g. Crazy Diamond can decide the piece that attracts during reconstruction.
        Improvisation (-2 Perm) - The user creates a minor Ability or Property.
        e.g. Magician Red's life-sensing fire or Star Finger.
        Invention (-3 Perm) - The user develops a major Ability.
        e.g. Gold Experience's Life Shot or Organ Transplant.
        Evolution (-4 Perm) - The user creates a new mode or form.
        e.g. Go Beyond or Heavy Weather.
        Adaptive ___ (-X+2 Temp) - Any of the above, but it goes away after the session ends.
        Stand Users only. An Adaptive Invention would cost 5 Temp instead of 3 Permanent.
      </p>
      <h2 id="range-learning-ranks" className="mt-12 scroll-mt-4 border-t border-fg/18 pt-4 text-xl font-medium max-md:mt-10">Range/Learning Ranks</h2>
      <ul>
        <li>E: 1 Rank ~ 2 Meters or below</li>
        <li>D: 2 Ranks ~ 6M</li>
        <li>C: 3 Ranks ~ 15 M</li>
        <li>B: 4 Ranks ~ 45 M</li>
        <li>A: 5 Ranks ~ 100 M or above</li>
        <li>Ø: 0 Ranks ~ 0 M</li>
        <li>∞: 15 Ranks/Infinite Ranks ~ No Maximum Range Limit
            Tiles are 2 meters each. 10 meters = 5 Tiles, while Movement is ~8-12 Tiles.
        </li>
      </ul>
      <h2 id="properties" className="mt-12 scroll-mt-4 border-t border-fg/18 pt-4 text-xl font-medium max-md:mt-10">Properties</h2>
      <p>
        Some Stands have unique physiologies or affinities, neither ability nor type. 
        These Properties open the door to otherwise unrealistic actions.
        They typically cost 1 - 3 points.
      </p>
      <p>
        Property Costs
        1 Point - An unrelated gift or attribute.
        e.g. Highway Star's scent tracking, Dark Blue Moon's swimming.
        2 Points - Supports the main Ability.
        e.g. Love Deluxe's growth, Silver Chariot's armor shed, Aerosmith's radar.
        3 Points - Hallmark attribute, strong synergy.
        e.g. Justice's fog form, Hierophant Green's barriers.

      </p>
      <h2 id="abilities" className="mt-12 scroll-mt-4 border-t border-fg/18 pt-4 text-xl font-medium max-md:mt-10">Abilities</h2>
      <p>
        Stands have a unique Ability, which bends reality to its will.
        An ideal Ability is esoteric, being very versatile or hyperspecific.
        Abilities are closer to laws than special attacks.
        They can't be resisted with mere force or willpower.
        Most Stands cannot even be approached safely before solving their power's mystery.

        Pricing is based on flexibility & power, which is up to Narrator discretion.
        Activation requirements, limits, and drawbacks will lower an Ability's cost.
        Users intuitively know in a high-powered Stand/Ability, equal flaws must exist.
        Some Abilities/Properties are actively detrimental, adding extra points instead.

        Player Stands should be limited to 6 Point abilities & below.
        If multiple Abilities/Properties exist, limit the sum to ~8 points.
        This limit doesn't apply to anything gained from Learning Burn.
        Non-Stand Sources have a broader ability cap (5 single/10 total)
      </p>
      <p>Ability Costs</p>
      <ul>
        <li>
          &lt;0Points - Massive trade-off, unviable in most situations.
          e.g. Superfly's occupant restraint, Cheap Trick, Gucci Bag Stand.
        </li>
        <li>
          1 Point - One-note, secondary to an actual ability.
          e.g. Star Finger, Stroheim's machine gun, Fun Fun Fun's puppeteering.
        </li>
        <li>
          2 Points - Gimmicky, but still has room to be creatively exploited.
          e.g. Magician Red's life-sensor, Echoes Act 1's sounds, Santana's Meat Invade.
        </li>
        <li>
          3 Points - Niche, made useful with the User's quick thinking.
          e.g. Moody Blues' rebroadcasting, The Hand's eraser, Life Magnetism Overdrive.
        </li>
        <li>
          4 Points - Versatile, & a viable tool in most situations.
          e.g. Sticky Finger's zippers, Killer Queen's primary ability, Tusk Act 3's spin.
        </li>
        <li>
          5 Points - Very flexible, often giving several good options. 
          e.g. Crazy Diamond's reconstruction, Stone Free's strings, Nut King Call's bolts.
        </li>
        <li>
          6 Points - Superior capabilities, & a multitude of applications.
          e.g. Soft & Wet's plunder, Echoes Act 2's SFX, Cream Starter's spray.
        </li>
        <li>
          7 Points - Overpowered, disrupting the balance between Stand Abilities.
          e.g. Heaven's Door's commands, Whitesnake's ability, King Crimson's ability.
        </li>
        <li>
          8 Points - Game-breakers, absurd in their capabilities & freedom.
          e.g. The World's ability, D4C's ability, Tusk's final ability.
        </li>
        <li>
          9+ Points - No. 
          e.g. MiH's ability, GER's ability, TWOH's ability.
        </li>
      </ul>
      <h2 id="stand-types" className="mt-12 scroll-mt-4 border-t border-fg/18 pt-4 text-xl font-medium max-md:mt-10">Stand Types</h2>
      <p>
        Stands fall into a mix of these archetypes.
      </p>
      <ul>
        <li>
          <h3>Natural 👊</h3>
          <p>
            A standard Stand type, with a majorly human or animal physiology with limbs.
            e.g. Star Platinum, Hierophant Green, Grateful Dead, Clash.
          </p>
        </li>
        <li>
          <h3>Artificial 👾</h3>
          <p>
            As opposed to Natural, these Stands have a more abstract or mechanical body.
            e.g. Hermit Purple, Ratt, Aerosmith, Manhattan Transfer.
          </p>
        </li>
        <li>
          <h3>Object 🎁</h3>
          <p>
            Tools with the Ability tied to them, which can be summoned & withdrawn at will.
            These Stands are known to survive past even the User's death.
            e.g. Emperor, Thoth, Cream Starter, Beach Boy.
          </p>
        </li>
        <li>
          <h3>Bound 🔗</h3>
          <p>
            A Stand Ability that assimilates itself into another physical, tangible thing at will.
            Non-users can interact with it, as it's not a pure Stand-type manifestation.
            The enhanced substance is generally manipulable, & cannot be withdrawn.
            e.g. The Fool, Super Fly, Strength, Les Feuilles.
          </p>
        </li>
        <li>
          <h3>Wearable 🥽</h3>
          <p>
            Stands worn by the User, often as a suit or accessory. 
            These Stands, as with Object Stands, are usually immobile.
            Others can wear the Stand, though Range restricts distance from the User.
            e.g. Oasis, White Album, Catch The Rainbow, Mandom.
          </p>
        </li>
        <li>
          <h3>Swarm 🦠</h3>
          <p>
            Cost: 1 Stand Point
            Swarm Stands are a conglomerate of units, operated by the User at once.
            Power & Durability stats are for the swarm as a whole, partial groups have lower stats.
            Single-unit death does not harm the User, only substantial amounts of lost units do.
            e.g. Harvest, Bad Company, Pearl Jam, Metallica, Sex Pistols.
          </p>
        </li>
        <li>
          <h3>Integrated ⚙️</h3>
          <p>
            Adds: +2 Stand Points
            These Stands have no or minimal manifestation.
            Integrated Abilities are applied to the User directly, without a punchghost.
            Durability & Range are often of lesser use without a Stand body.
            e.g. Khnum, Stray Cat, Mr. President, Tatoo You!, Oh! Lonesome Me.
          </p>
        </li>
        <li>
          <h3>Automatic 📡</h3>
          <p>
            Cost: Loss of control
            Stands with scripted behavior, instead of having the User in direct command.
            The manifestation itself typically has no range leash.
            Range still applies to the Ability, relative to the target's distance from the Stand.
            Precision is often of lesser use, as Automatics choose targets based on a condition.
            e.g. Black Sabbath, Marilyn Manson, Born This Way.
          </p>
        </li>
        <li>
          <h3>Detached 🔕</h3>
          <p>
            Cost: Stand desync
            Stands that do not synchronize senses or injuries with their User.
            Detached Stands are vulnerable to Stand Breaks, which is an abstract Hit to the User.
            When a Stand Break happens, its manifestation and ability are forcibly deactivated.
            Most Detached Bound types can rebind to their medium of choice after a Stand Break.
            Other types with simple manifestations can respawn with time and/or concentration.
            e.g. Highway Star, Sheer Heart Attack, Baby Face
          </p>
        </li>
        <li>
          <h3>Independent 👺</h3>
          <p>
            Cost: Learning Costs Double (2/4/6/8/10)
            Stands capable of sentient thought & action, having a mind of their own.
            These Stands get User Stats, excluding Luck & Body. (Wit/Reason/Menacing/Pluck)
            The Pool given for these stats is (Learning Ranks * 3), to a maximum of 15 Points.
            A Stand can still have personality traits and instincts without being Independent.
            e.g. Cheap Trick, Paisley Park, Anubis, Wonder Of U.
          </p>
        </li>
        <li>
          <h3>Act 🎭 </h3>
          <p>
            Cost: Minimum Learning B, Lower Point Pools
            Stands that have alternative forms, each with their own stats & related abilities.
            These Stands start at Act 1, gaining new Acts as the character develops.
            Once a new Act exists, the Stand can slide between them at will.

            Each Act burns 2 Learning Ranks, so a full 3-Act Stand must manage its burns.
            Act 1 would have an A for temporary Learning burns, with Act 2 at C and Act 3 at E.
            Burning temporary ranks as one Act burns them for all Acts.
            For permanent burns, the latest Act is used.

            If it is a 2-Act Stand, Acts 1 & 2 each have 3/4ths the base point pool, rounded down.
            For a 3-Act Stand, each of the Acts has 2/3rds, rounded down.
            Learning & Ability are paid for after the deduction. 
            Learning is priced at the new Act's grade, and can't be increased.

            e.g. Act 1 has a B Learning and Act 2 burns to a D, both have [3P] Abilities, 21 base PB.
            At a pool of (21P * 3/4) = 15P, Act 1 has (15P - [4P (B Learning) + 3P (Ability)] = 8P left.
            Act 2 has (15P - [2P (D Learning) + 3P (Ability)] = 10P left.

            The PCs may create the Acts, but the Narrator usually decides their activation.
            Rule of thumb; Act 1 in Earlygame, Act 2 when starting Midgame, and Act 3 Lategame.

            Act 4 is rare, due to game-breaking potential.
            Act 4s get 4/3rds of the normal Stand Pool, and only appear in the Endgame.
            This Act must be achieved through alternate means, other than Learning Burn.

            e.g. Echoes, Tusk.
          </p>
        </li>
        <li>
          <h3>Other 💡</h3>
          <p>
            Cost: Variable
            Niche Types that often only apply to one or two Stands, or no prior precedent.
            e.g. Range-Irrelevant, Sub-Stands, Combined, Harmful, Shared, Posthumous,
            Room, Wounds, Beyonds, Requiem, Mass Hysterias, Homebrewed Types.
          </p>
        </li>
      </ul>
      <h2 id="alternative-character-options" className="mt-12 scroll-mt-4 border-t border-fg/18 pt-4 text-xl font-medium max-md:mt-10">「Alternative Character Options」</h2>
      <p>
        Rather than a Stand, you have another boon to fight on-par with Stand Users. 
        The Source uses the same Stats as Stands, and a Special Ability priced the same way.

        Learning gains Source-specific burns in place of a Stand User's Adapt.
        Range isn't strictly distance, but remains a non-rollable limit definer.

        Alternative User Types would be a simple exchange of User Pool for its benefits.
        Multiple Power Sources draw from the same point pool & ability cap.
        It is recommended that Narrators allow other power types to see Stands, for balance.

        Alternative User Types are Freak, Alien, Ghost, Rock Human, & Pillar Man.
        Alternative Sources are Hamon, Vampire, Spin, Armed Phenomenon, & Cyborg.
      </p>
      <h2 id="alternative-user-types" className="mt-12 scroll-mt-4 border-t border-fg/18 pt-4 text-xl font-medium max-md:mt-10">「Alternative User Types」</h2>
      <ul>
      <li>
        <h3>Freak 😛</h3>
        <p>
          Cost: 1-3 User
          Someone with anomalous powers that defy explanation, not tied to a Power Source.
          Traits that are just strange do not need to be paid for, they can be included in a Bio.
          e.g. Bruford's Danse Macab-Hair, Mrs. Robinson's bugs, Diavolo's dual souls.
        </p>
      </li>
      <li>
        <h3>Ghost 👻</h3>
        <p>
          A spirit of the dead, tied to the mortal world by an unfulfilled purpose.
          They typically keep whatever injury caused their death as a mark.
          Ghosts must follow certain Rules.
        </p>
        <ul>
          <li>Ghosts are on the same level of selective intangibility as Stands.</li>
          <li>Animals and Stand Users can see Ghosts.</li>
          <li>Ghosts cannot be seen by normal people, but can make themselves heard.</li>
          <li>If a Ghost's limb unwillingly touches a living thing, it is severed but not lost.</li>
          <li>Normal objects may be manipulated as normal, but not felt by the ghost.</li>
          <li>When any object is destroyed, its previous form becomes a Ghost Object.</li>
          <li>Ghost Objects can be used by Ghosts, and only affect other non-living spirits.</li>
          <li>Ghosts may only enter a room if let inside, or it is empty.</li>
        </ul>
      </li>
      <li>
        <h3>Alien 🛸</h3>
        <p>
          Cost: 2 User
          A shapeshifting extraterrestrial, hailing from the Magellanic Clouds and lost on Earth.

          These beings can Shapeshift into any non-complex object, of equal or lesser mass.
          Aliens have a Sensitivity to high-pitched sounds, and take a Hit on exposure.
          While exposed to sound, the alien's form will be unstable, and change rapidly.

          Aliens may also have access to foreign technologies and weapons based on setting.
          This section is made under the assumption that Mikitaka is not a Stand User.
        </p>
      </li>
      <li>
        <h3>Rock Human 🗿</h3>
        <p>
          Cost: 1 User
          A counterpart to Homo Sapiens, in tune with nature and attracted to "sacred ground".
          Rock Form is used for months-long hibernation, resisting extreme conditions.
          After hibernating, the Rock Human can stay awake for an equal amount of time.

          They all have a mango allergy, and despite being Silicon-based, can eat a paleo diet.
          Due to their Incubation, they lack legal identities, prosocial emotions, and childhoods.

          All Rock Organisms can turn parts of their body into a chosen Material.
          Rock Animals/Insects are known to Masquerade as human-made objects.
          Rock Humans are more sophisticated at this, opting for identity theft and fake jobs.
        </p>
      </li>
      <li>
        <h3>Pillar Man 🕺</h3>
        <p>
          Cost: 4 User/4 Stand, Vampire, GM Approval Required
          A mesoamerican ultra-vampire, members of the bygone Tribe Of Darkness.

          Higher Being grants double the organ systems from Range ranks, and superior minds.
          The first User Stat roll has double dice, A Power B/Wit A roll would be 14d6 in total.
          A Pillar Man that hasn't used a Stone Mask still ages, but lives for thousands of years.
          Rock Form can negate instant death from Hamon/Sun exposure, and help hibernate.

          After using a Stone Mask, a Pillar Man's innate vampirism and hunger increase greatly.
          Superhuman Body lets Pillar Men rearrange their bodies or others at will.
          Absorption upgrades Blood Sucking, assimilating live victims on any physical contact.
          Functions evolve into Modes based on an element.
          Vampirification - Creates Vampires with Learning, all Abilities, and (Ranks * 5) Points.
        </p>
      </li>
      </ul>
      <h2 id="alternative-power-sources" className="mt-12 scroll-mt-4 border-t border-fg/18 pt-4 text-xl font-medium max-md:mt-10">「Alternative Power sources」</h2>
      <h3>Hamon Warrior 🌊</h3>
      <p>
        An ancient breathing technique, Hamon is drawn from the User's vital energy. 
        A Hamon User must maintain a consistent rhythm of breathing to use Hamon.

        Basic Abilities
        Conduction - Hamon travels very well through liquids and organics, like oil or flesh.
        Hamon can have positive/negative charges, to attract or repel in physics-defying ways.
        Users can also infuse objects with this life energy, acting like a charged battery.
        The effects of infusion depend on the User's Overdrive and Range.
        Hamon disperses over large areas, small points of contact are strongly concentrated.

        Sunlight Sendo (-X Temp Learning) - Tune User's breath to the frequency of sunlight
        Actions against the undead get +1 Advantage for each Learning rank burnt.
        Advantage added by Sunlight Sendo can stack with other Advantage to a max of +4.

        Hamon Healing (-X Temp) - Reduces Severity of all applicable Hits on the target.
        The reduction is equal to the Learning burnt. If a Hit is scaled down to 0, it is removed.
        As an Action, a Reaction might intervene.

        Rhythmic Breathing (Other) - Regain 1 Temp Learning/Round while breath is focused.
        Situations that disrupt the Hamon Warrior's flow will burn 1 Temp Learning/Round.
        Ranks decreasing to 0 cuts off all Hamon Abilities (including Stats) until restored.

        Special Ability - Overdrives
        Overdrives are unique techniques related in some way to vibrations or wavelength.
        This can range anywhere from sound waves, to water molecules, to string theory.
        Overdrives are the equivalent of a Stand Ability, as are all other "Special Abilities".

        Stats
        Stats are the vigor of a User's Hamon & Overdrive, applied directly to them.
        Power =The potency of Hamon, User's strength.
        Speed = The responsiveness of Hamon's effects, User's agility.
        Precision =The exactness of Hamon's output variation, User's control.
        Durability = The hardness given to infused objects, User's defense.
        Range = The conduction of the Hamon, from flesh-only to steel bars to the intangible.
        Learning = Lung capacity. Temporarily burnt when the Basic Abilities are used.
      </p>
      <h3>Vampire 🧛</h3>
      <p>
        A former human who came in contact with a Stone Mask, and rejected their humanity.
        Through brain acupuncture, these people have unlocked their inner potential.

        Basic Abilities
        Inhuman Body - Vampiric minds are enhanced to allow extreme self-manipulation.
        The versatility of this ability depends on the bodily systems added via the Range rank.
        Common uses include vein control, Space Ripper Stingy Eyes, and reattaching limbs.

        Vampires cannot be Retired, still acting at 0 and -1 Hit Limit.
        Vampires can still die from normal injuries if the death threshold of -2 is reached.
        Hamon and Sunlight contact will instantly kill at 0 Hit Limit, sunlight is a Severity 9 Hit.

        Blood Sucking (+1/2/3 Temp) - Inject veins into a victim, gaining vampiric essence.
        This is the only way Vampires regain Temp Learning, it does not reset automatically.
        Ranks gained depend on the level of harm. 1 = Injury, 2 = Lethal, 3 = Mass Casualty

        Regeneration (-2 Temp) - Fully remove an applicable Hit as an Action.
        Hamon/Sun Hits are permanent, only healed with massive amounts of blood.

        Zombification (-X Temp) - Vampires can turn a Retired lifeform into a Zombie.
        Zombies have a Point Pool equal to (Ranks Burnt * 4), and Retire at 0.
        Zombies have a None rank in Learning, only gaining ranks when using Blood Sucking.
        These ranks must be used during the act of feeding, or they are lost.

        Special Ability - Functions
        Functions are a superhuman bodily process, deforming natural biology for gimmicks.
        e.g. Dio's Flesh Buds & Freezing, Nukesaku's Dual Faces, Wired Beck's Body Hair

        Stats
        The enhanced flesh of the Vampire. Stats apply directly to themselves, as with Hamon.
        Power = The strength of the vampire.
        Speed = The reflexes of the vampire.
        Durability = The resilience of the vampire.
        Precision = The senses of the vampire.
        Range = The bodily control of the vampire, number of systems in voluntary command.
        Learning = Vampiric essence. Temporarily burnt for Basic Abilities.
      </p>
      <h3>Spin Master 💫</h3>
      <p>
        Spin is drawn from the User's life energy as a battery, much like Hamon.
        However, certain objects infused with Spin can maintain the charge indefinitely.
        Unlike Hamon's vibration and wavelength, Spin controls rotation and kinetic energy. 

        Special Ability - Devices
        Devices are the tool that the Spin Master relies on, without any Learning costs.
        Devices are specifically tailored to certain uses of the spin to create an Effect.

        The Device's Effect is an Ability based on physics or pseudoscience.
        The canon example of a Device's Effect is Wrecking Ball's Sinistral Ataxia.

        Basic Abilities
        Rotation (-1 Temp) - Infusing Spin into non-Device, improvised mediums.
        Stats besides Learning differ depending on the medium's properties.
        Devices the User didn't make can be used, if they know how it works (cost still applies).

        Kinetic Displacement (-1 Temp) - Shifts kinetic force from one area to another.
        For example, punch a wall to hit the person behind it, or shift an injury's location.

        Golden Spin (-X Temp) - Devices harness a mathematical truth, hidden in nature.
        If a replication of it is found, boost a non-Learning Stat equal to ranks burnt, up to A.
        This boost lasts until the Device's energy or the focus being used are interrupted.

        Super Spin (-X-1 Perm, min. 1) - The perfected form of that Device's Golden Spin.
        It is a unique, complicated technique that allows the device to tap into infinity.
        A discounted Permanent burn is made, but it is only usable during Super Spin.
        If used multiple times, a different Super Spin technique must be made for each variant.

        Stats
        Stats (except Learning) are tied to the Device or improvised medium, not the User.
        Power = The Device's mass and destructiveness.
        Speed = The Device's travel time and velocity.
        Durability = The Device's sturdiness and level of craftsmanship.
        Precision = The Device's maneuverability and control.
        Range = The Device's inertia and ability to maintain Spin in unfavorable conditions.
        Learning = Vision. Both temporarily and permanently burnt. 
      </p>
      <h3>Armed Phenomenon ☣️</h3>
      <p>
        A lifeform infected with a Parasite, gaining power in exchange for a doomed future.

        Basic Abilities
        Sentient Parasite (-1 Temp) - More than just a weapon, they have a mind of their own.
        The Parasite gains User Stats (excluding Luck) with a pool of (Range Ranks * 3)
        A host can use the Parasite's Stats without Learning burn, but loses control doing so.

        Instant Regeneration (-3 Temp) - One applicable Hit is instantly healed, not an Action.
        Armed Phenomenon still Retire at 0, but can only die by fire or Hamon, and only at -2.
        Parasite death or extraction will kill the Host as well, without exception.

        Special Ability - Phenomena
        A Phenomenon is similar to a vampiric Function, biologically based powers.
        Each Phenomenon is added at a specific Stage, which advances with time or plot.
        All Phenomena/Properties are bought in advance at half cost during character creation.
        If the sum is odd, round up for the final cost. (e.g. (2 + 3 + 6) = 11, 11/2 = 5.5, 6 Points)

        Stage 1 - The Parasite awakens. The Host unlocks Phenomenon #1, but appears normal.

        Stage 2 - The Parasite matures. Phenomenon #2 is added, and a Morph form is made.
        This transformation improves The Host's body and stats, but also possesses them.
        A condition is needed to activate the Morph, to use all post-Stage 1 Phenomena/Stats.
        The canon example of a Morph Property is Ikuro's Armored Body.

        Stage 3 - The Parasite & Host merge. The Morph is now permanent, no on/off switch.
        Phenomenon #3 emerges. The Host is synchronized and Sentient Parasite has no cost.

        Stage 4 - The Parasite is at critical level. It will soon reproduce, and The Host will die.
        What happens during this depends on the Parasite's species, and is unknown.

        Stats
        The enhanced form of the Host. The first four stats are only accessible when morphed.
        Power = The Host's strength when transformed.
        Speed = The Host's agility when transformed.
        Durability = The Host's endurance when transformed.
        Precision = The Host's accuracy when transformed.
        Range = The parasite's evolution. Used for their point buy.
        Learning = The parasite's adaptability. Burnt for instant regeneration and adaptation.
      </p>
      <h3>Cyborg 🤖</h3>
      <p>
        A mechanized being, surpassing their limits with the power of science.

        Special Ability - Upgrades
        An Upgrade is an enhancement, adding a tool or property to the Cyborg frame.
        A Cyborg starts with two Base Upgrades, each worth up to 3 Points.
        Cyborgs can have up to five total Upgrades, including Experimental Upgrades.

        Basic Abilities
        Experiment (-3 Temp) Permanently add a new Upgrade to the Cyborg's arsenal.
        The maximum extent of an Experimental Upgrade is decided by the Cyborg's Range.
        Retirement will permanently break one Experimental Upgrade of the Cyborg's choice.
        Death will break all Experimental Upgrades, but not Base Upgrades.

        Tweak (-2 Temp) - Modify an existing Upgrade, increasing its point value by +1.
        Tweaks can be burnt twice at once, to increase point value by +2.
        Any given Upgrade can have a maximum point value of 3.
        If an Upgrade is already at 3 points, Tweak can modify it into a different 3-point ability.

        Rebuild (-X Perm) - When a Cyborg dies, they can be restored better than ever.
        For each permanent rank spent, add one Experiment or two Tweaks.
        For each rank spent past the first, gain one point to increase a non-Learning Stat. 

        Stats
        The improved prowess of the Cyborg. Applied directly to the User's mechanical body.
        Power = The strength of the Cyborg frame.
        Speed = The responsiveness of the Cyborg frame.
        Durability = The reinforcement of the Cyborg frame.
        Precision = The Cyborg frame's accuracy and senses.
        Range = How advanced the Cyborg's Experimental Upgrades are.
        Learning = Resources. How quickly a Cyborg can surpass their limits.
      </p>
      <h2 id="alternative-source-range-stats" className="mt-12 scroll-mt-4 border-t border-fg/18 pt-4 text-xl font-medium max-md:mt-10">Alternative Source Range Stats</h2>
      <ul>
        <li>
          <h3 id="hamon">Hamon</h3>
          <p>Range sets the limits of the Hamon Warrior's conduction.
This affects what mediums can hold a charge of their Hamon, not just stop or pass.
Matter above Rank C also requires a specialized Overdrive to be used as a medium.
Regular Hamon cannot interact with B/A/∞ Ranked materials.
</p>
          <ul>
            <li>Ø: Self only</li>
            <li>E: Organic matter (Corpses, skin, fresh food, oil, herbal medicine, saliva, bacteria)</li>
            <li>D: Conductive/liquid matter (Carbon, wires, water, gas, McDonald's "meat")</li>
            <li>C: Inorganic/solid matter (Stone, glass, steel, paper)</li>
            <li>B: Abstract matter (Light, sound, radio waves, plasma, data)</li>
            <li>A: Esoteric matter (Dark matter, gravitons, Higgs-Boson, supercooled)</li>
            <li>∞: Insulated or anti-organic materials (Rubber, lead, mustard gas, nuclear waste)</li>
          </ul>
        </li>
        <li>
          <h3 id="vampire">Vampire</h3>
          <p>Each rank in Range adds one organ system the Vampire controls beyond Circulatory.
A vampire must have control of each section that involves their Function(s).
The optional organ systems are; 
Muscular (voluntary & reflex)
Skeletal (bones & teeth)
Nervous (sensory & autonomic)
Immune (white blood cells & lymphatics)
Endocrine (various hormones)
Integumentary (skin, nails, hair, intracellular matrix)
Respiratory-Spinal (gas exchange & pH)
Digestive-Renal (food & fluid processing)
</p>
          <ul>
            <li>Ø: No special bodily control</li>
            <li>E: Circulatory System only</li>
            <li>D: 1 Optional Systems total</li>
            <li>C: 2 Optional Systems total</li>
            <li>B: 3 Optional Systems total</li>
            <li>A: 4 Optional Systems total</li>
            <li>∞: Every single cell.</li>
          </ul>
        </li>
        <p>Doubled for Pillar Men (0/2/4/6/8/Infinite)</p>
        <li>
          <h3>Spin</h3>
          <p>Range determines what level of resistance the Device will maintain perpetual energy.
Against forces above its rank, it'll succumb to entropy alone, needing sustained Spin.
As a non-Learning Stat, Golden Spin can be used to increase Range as well.

This is separate from Power, which decides how much energy there is.
High-power low-range Devices may smash like dynamite, but fizzle away on their own.
Low-power high-range Devices could be a single needle escaping a black hole.

</p>
          <ul>
            <li>Ø: Can only be self-maintained in a vacuum.</li>
            <li>E: Benign barriers (normal atmospheric pressure, lunar pull, humidity)</li>
            <li>D: External variables (Loud winds, small impacts, own weight)</li>
            <li>C: Environmental barriers (Planet's gravity, deep sea pressure, terminal velocity limits)</li>
            <li>B: Molecular variables (Hardness, chemical bonds, melting point, electromagnetism)</li>
            <li>A: Universal barriers (Event horizons, thermodynamics, fundamental forces)</li>
            <li>∞: Metaphysical forces (Space, time, dimensions, fate)</li>
          </ul>
        </li>
        <li>
          <h3>Armed Phenomenon</h3>
          <p>Range ranks add to the sapience of the Parasite, deciding how high a Point Buy it gets.
It can be divided among the Parasite's User Stats as desired.
Higher Parasite stats may prove a detriment, as they increase its influence.
It could also be a boon, covering the User's weak points or adding to their strengths.
</p>
          <ul>
            <li>Ø: 0 Points - Germ-like</li>
            <li>E: 3 Points - Low animal (Koala)</li>
            <li>D: 6 Points - High animal (Crow)</li>
            <li>C: 9 Points - Human (Dull)</li>
            <li>B: 12 Points - Human (Average)</li>
            <li>A: 15 Points - Human (Bright)</li>
            <li>∞: 21 Points - Higher Being (add Pillar Man first-stat double roll)</li>
          </ul>
        </li>
        <li>
          <h3>Cyborg</h3>
          <p>Determines the sophistication of the Cyborg's mechanical frame.
This is the point value any given Experimental Upgrade can start at.
</p>
          <ul>
            <li>Ø: Hack Job (&lt;-1 Points. Retirement forces a new Upgrade instead of breaking one.)</li>
            <li>E: Junk (-1 Point, actively a detriment to the Cyborg.)</li>
            <li>D: Bootleg (0 Points, has a major trade-off.)</li>
            <li>C: Aftermarket (1 Point, serves a basic function well.)</li>
            <li>B: State-Of-The-Art (2 Points, can do something normal technology can't.)</li>
            <li>A: Black Market (3 Points, top of the line performance or versatility.)</li>
            <li>∞: Bleeding Edge (4 Points. Upgrades can be worth up to 5 Points.)</li>
          </ul>
        </li>
      </ul>
          </div>
      </div>
    </main>
    </>
  );
}
