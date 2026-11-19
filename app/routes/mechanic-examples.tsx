import type { ReactNode } from "react";
import type { Route } from "./+types/mechanic-examples";

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

export function meta({}: Route.MetaArgs) {
  return [{ title: "Mechanic Examples - Bizarre Adventure" }];
}

export default function MechanicExamples() {
  return (
    <main className="mx-auto flex w-full flex-1 flex-col bg-bg pb-8 md:w-gr-big">
      <div className="w-full bg-bg-brown px-4 py-5 sm:px-10 sm:py-6">
        <h2 className="w-full text-right text-gr-h1">Mechanic Examples</h2>
      </div>

      <div className="mx-auto flex w-full flex-col gap-8 px-4 pt-8 leading-[1.7] sm:px-10">
        <section className="flex w-full flex-col gap-1 italic">
          <p>
            <BU>Action</BU> - Throw sand into the enemy&apos;s eyes, then punch the
            blind spot.
            <br />
            The former may be <U>Wit</U> (quick dirty trick), or <U>Reason</U>{" "}
            (exploiting a sand phobia)
            <br />
            The latter could be <U>Pluck</U> (hot-blooded impulse) or{" "}
            <U>Power</U> (using Stand to hit)
            <br />
            The description could make it roll anything from (Wit + Power) to
            (Reason + Pluck)
            <br />
            <IU>Advantages</IU> could come from being near a sandbox, training,
            or fulfilling a vendetta.
          </p>
        </section>

        <section className="flex w-full flex-col gap-1 italic">
          <p>
            <BU>Reaction</BU> - Evading with a Stand&apos;s wind gust, or block
            the punch with a trash can lid.
            <br />
            Wind could be <U>Precision</U> (Stand ability keenness) +{" "}
            <U>Reason</U> (trajectory calculation).
            <br />
            Steel Lid could be <U>Body</U> (recoil absorption) + <U>Wit</U>{" "}
            (predicting where they&apos;ll hit)
            <br />
            Reactions can force the Action&apos;s rolls to change, you can&apos;t
            overpower a dodge.
          </p>
        </section>

        <section className="flex w-full flex-col gap-1 italic">
          <p>
            A full <U>Pass</U> would have someone else making the attack or the
            gust.
          </p>
          <p>
            A <U>Dual Heat</U> would be either the sand or the punch, or an
            assist by tossing the lid.
          </p>
          <p>
            A <U>Difference</U> of +1 could cripple a joint for the <U>Hit</U>,
            while a +6 tears the whole arm off.
          </p>
          <p>
            A <U>non-physical</U> Hit could be paralysis from their sand trauma.
          </p>
          <p>
            <U>Retirement</U> can leave them unconscious, in a panic attack, or
            with a broken spirit.
          </p>
          <p>
            A <U>Tie</U> with either type of Reaction will still be a fizzle. No
            hits get dealt, the scenario changes, then the fighters try something
            again.
          </p>
          <p>
            An <U>Overpose</U> narrates a favorable change in circumstance
            (Finding a knife buried in the sand), while the <U>Underposing</U>{" "}
            party adds an &apos;and&apos; or &apos;but&apos; to twist this change
            without negating it (It belongs to a gang member who&apos;s just
            noticed the fight happening).
          </p>
          <p>
            A <U>Gambit</U> is laid to mix some flammable salts with the sand
            grains, to be activated if any source of fire makes contact. If this
            activation never happens, the flammable salt gambit was never made
            either and that Luck is lost.
          </p>
        </section>

        <section className="flex w-full flex-col gap-2">
          <h3 className="italic underline">Turn Order Examples</h3>
          <div className="flex flex-col gap-1 italic">
            <p>
              &gt;(Enemy) <BI>Dio</BI> (1st of 2 Turns per Round)
            </p>
            <p>
              &gt;(Ally) <BI>Kakyoin</BI> (1 Turn per Round) [Gambit laid]
            </p>
            <p>
              &gt;(Enemy) <BI>Vanilla Ice</BI> (1st of 2 Turns)
            </p>
            <p>
              &gt;(Ally) <BI>Iggy</BI> (1 Turn)
            </p>
            <p>
              &gt;(Enemy) <BI>Vanilla Ice</BI> (2nd of 2 Turns)
            </p>
            <p>
              &gt;(Ally) <BI>Jotaro</BI> (1) [Kakyoin&apos;s gambit triggered]
            </p>
            <p>
              &gt;(Tie, scenario shift) <BI>Jotaro</BI> (1)
            </p>
            <p>
              &gt;(Enemy) <BI>Dio</BI> (2nd of 2 Turns)
            </p>
            <p>
              &gt;(Ally) <BI>Joseph</BI> (1)
            </p>
            <p>
              <B>Round End, Refresh.</B>
            </p>
          </div>
        </section>

        <section className="flex w-full flex-col gap-3 overflow-x-auto">
          <h3 className="italic underline">Difference Table</h3>
          <table className="w-full min-w-160 border-collapse border border-fg bg-bg-lt text-left text-sm leading-snug">
            <thead>
              <tr>
                <th className="border border-fg px-3 py-2 font-bold">Difference</th>
                <th className="border border-fg px-3 py-2 font-bold">Type</th>
                <th className="border border-fg px-3 py-2 font-bold">
                  Does Action happen?
                </th>
                <th className="border border-fg px-3 py-2 font-bold">
                  Example: Punching a locked door.
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-fg px-3 py-2 font-bold">+3 or higher</td>
                <td className="border border-fg px-3 py-2 font-bold">☆OVERPOSE☆</td>
                <td className="border border-fg px-3 py-2">
                  Yes, and give me a detail.
                </td>
                <td className="border border-fg px-3 py-2">
                  Where does this door <I>actually</I> lead?
                </td>
              </tr>
              <tr>
                <td className="border border-fg px-3 py-2 font-bold">+2</td>
                <td className="border border-fg px-3 py-2 font-bold">Extra Success</td>
                <td className="border border-fg px-3 py-2">Yes, and it gets better.</td>
                <td className="border border-fg px-3 py-2">
                  You rip the door clean off the hinges
                </td>
              </tr>
              <tr>
                <td className="border border-fg px-3 py-2 font-bold">+1</td>
                <td className="border border-fg px-3 py-2 font-bold">Success</td>
                <td className="border border-fg px-3 py-2">Yep.</td>
                <td className="border border-fg px-3 py-2">You punch the door open.</td>
              </tr>
              <tr>
                <td className="border border-fg px-3 py-2 font-bold">=0</td>
                <td className="border border-fg px-3 py-2 font-bold">Bizarre</td>
                <td className="border border-fg px-3 py-2">Something else...</td>
                <td className="border border-fg px-3 py-2">
                  The door changes color? What!?
                </td>
              </tr>
              <tr>
                <td className="border border-fg px-3 py-2 font-bold">-1</td>
                <td className="border border-fg px-3 py-2 font-bold">Failure</td>
                <td className="border border-fg px-3 py-2">Nope.</td>
                <td className="border border-fg px-3 py-2">The door stays shut.</td>
              </tr>
              <tr>
                <td className="border border-fg px-3 py-2 font-bold">-2</td>
                <td className="border border-fg px-3 py-2 font-bold">Extra Failure</td>
                <td className="border border-fg px-3 py-2">No, and it gets worse.</td>
                <td className="border border-fg px-3 py-2">
                  You get splinters in your eye.
                </td>
              </tr>
              <tr>
                <td className="border border-fg px-3 py-2 font-bold">-3 or lower</td>
                <td className="border border-fg px-3 py-2 font-bold">☆UNDERPOSE☆</td>
                <td className="border border-fg px-3 py-2">Fail forwards/add twist</td>
                <td className="border border-fg px-3 py-2">
                  You punch the wall, revealing...
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="flex w-full flex-col gap-3 overflow-x-auto">
          <h3 className="italic underline">Hit Table</h3>
          <table className="w-full min-w-xl border-collapse border border-fg bg-bg-lt text-left text-sm leading-snug">
            <thead>
              <tr>
                <th className="border border-fg px-3 py-2 font-bold">Difference</th>
                <th className="border border-fg px-3 py-2 font-bold">Hit Severity</th>
                <th className="border border-fg px-3 py-2 font-bold">
                  Example: Kars attacks Joseph.
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-fg px-3 py-2 font-bold">0</td>
                <td className="border border-fg px-3 py-2">None</td>
                <td className="border border-fg px-3 py-2">
                  Kars smacks Joseph on the head. Not a Hit.
                </td>
              </tr>
              <tr>
                <td className="border border-fg px-3 py-2 font-bold">+1</td>
                <td className="border border-fg px-3 py-2">Minor</td>
                <td className="border border-fg px-3 py-2">
                  Kars cuts Joseph&apos;s finger nerves, numbing them.
                </td>
              </tr>
              <tr>
                <td className="border border-fg px-3 py-2 font-bold">+2</td>
                <td className="border border-fg px-3 py-2">Moderate</td>
                <td className="border border-fg px-3 py-2">
                  Kars crushes Joseph&apos;s wrist bone, leaving the hand limp.
                </td>
              </tr>
              <tr>
                <td className="border border-fg px-3 py-2 font-bold">+3</td>
                <td className="border border-fg px-3 py-2">Serious</td>
                <td className="border border-fg px-3 py-2">
                  Kars tears through Joseph&apos;s arm muscles, disabling it.
                </td>
              </tr>
              <tr>
                <td className="border border-fg px-3 py-2 font-bold">+4</td>
                <td className="border border-fg px-3 py-2">Debilitating</td>
                <td className="border border-fg px-3 py-2">
                  Kars carves into Joseph&apos;s ribs, puncturing his pleural
                  layers.
                </td>
              </tr>
              <tr>
                <td className="border border-fg px-3 py-2 font-bold">+5</td>
                <td className="border border-fg px-3 py-2">Critical</td>
                <td className="border border-fg px-3 py-2">
                  Kars slices Joseph&apos;s arm clean off, from the shoulder.
                </td>
              </tr>
              <tr>
                <td className="border border-fg px-3 py-2 font-bold">+6</td>
                <td className="border border-fg px-3 py-2">Macabre</td>
                <td className="border border-fg px-3 py-2">
                  Kars plunges through Joseph&apos;s chest and bisects his right
                  lung.
                </td>
              </tr>
              <tr>
                <td className="border border-fg px-3 py-2 font-bold">&gt;7</td>
                <td className="border border-fg px-3 py-2">Grindhouse</td>
                <td className="border border-fg px-3 py-2">
                  Kars bisects Joseph&apos;s spine, nerves and all.
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="flex w-full flex-col gap-3 overflow-x-auto">
          <h3 className="italic underline">DC Table</h3>
          <table className="w-full min-w-160 border-collapse border border-fg bg-bg-lt text-left text-sm leading-snug">
            <thead>
              <tr>
                <th className="border border-fg px-3 py-2 font-bold">#</th>
                <th className="border border-fg px-3 py-2 font-bold">
                  Difficulty Of Task
                </th>
                <th className="border border-fg px-3 py-2 font-bold">
                  Situation and Example
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-fg px-3 py-2 font-bold">0</td>
                <td className="border border-fg px-3 py-2">Trivial</td>
                <td className="border border-fg px-3 py-2">
                  No dice are rolled, as it isn&apos;t an urgent danger.
                  <br />
                  <I>Jotaro tries to drink water without a straw.</I>
                </td>
              </tr>
              <tr>
                <td className="border border-fg px-3 py-2 font-bold">1</td>
                <td className="border border-fg px-3 py-2">Easy</td>
                <td className="border border-fg px-3 py-2">
                  Can be done with a healthy amount of effort.
                  <br />
                  <I>Jotaro tries to push a bookcase away from a wall.</I>
                </td>
              </tr>
              <tr>
                <td className="border border-fg px-3 py-2 font-bold">2</td>
                <td className="border border-fg px-3 py-2">Challenging</td>
                <td className="border border-fg px-3 py-2">
                  Accomplishable with difficulty.
                  <br />
                  <I>Jotaro tries to break through a locked door.</I>
                </td>
              </tr>
              <tr>
                <td className="border border-fg px-3 py-2 font-bold">3</td>
                <td className="border border-fg px-3 py-2">Dire</td>
                <td className="border border-fg px-3 py-2">
                  A strenuous action, requiring intense focus.
                  <br />
                  <I>Jotaro dodges a surprise arrow fired 15 feet away.</I>
                </td>
              </tr>
              <tr>
                <td className="border border-fg px-3 py-2 font-bold">4</td>
                <td className="border border-fg px-3 py-2">Herculean</td>
                <td className="border border-fg px-3 py-2">
                  The average person would struggle greatly.
                  <br />
                  <I>Jotaro stands up after an explosion.</I>
                </td>
              </tr>
              <tr>
                <td className="border border-fg px-3 py-2 font-bold">5</td>
                <td className="border border-fg px-3 py-2">Extraordinary</td>
                <td className="border border-fg px-3 py-2">
                  A jaw-dropping feat of talent.
                  <br />
                  <I>Star Platinum catches a bullet.</I>
                </td>
              </tr>
              <tr>
                <td className="border border-fg px-3 py-2 font-bold">6</td>
                <td className="border border-fg px-3 py-2">Superhuman</td>
                <td className="border border-fg px-3 py-2">
                  Past the borders of humanity.
                  <br />
                  <I>
                    Star Platinum pushes a falling steamroller into the air.
                  </I>
                </td>
              </tr>
              <tr>
                <td className="border border-fg px-3 py-2 font-bold">7</td>
                <td className="border border-fg px-3 py-2">Unbelievable</td>
                <td className="border border-fg px-3 py-2">
                  Challenging suspension of disbelief.
                  <br />
                  <I>Star Platinum dodges something at FTL speed.</I>
                </td>
              </tr>
              <tr>
                <td className="border border-fg px-3 py-2 font-bold">8</td>
                <td className="border border-fg px-3 py-2">Surreal</td>
                <td className="border border-fg px-3 py-2">
                  Stretching the limits of reality itself.
                  <br />
                  <I>
                    Star Platinum fist clenches a ball of graphite into a
                    diamond.
                  </I>
                </td>
              </tr>
              <tr>
                <td className="border border-fg px-3 py-2 font-bold">9</td>
                <td className="border border-fg px-3 py-2">Absurd</td>
                <td className="border border-fg px-3 py-2">
                  Rolling a critical in real life.
                  <br />
                  <I>
                    Star Platinum throws a stone 4 miles away, has it rebound
                    off of a plane, and hit Dio in the chest.
                  </I>
                </td>
              </tr>
              <tr>
                <td className="border border-fg px-3 py-2 font-bold">10+</td>
                <td className="border border-fg px-3 py-2">Nigh-Impossible</td>
                <td className="border border-fg px-3 py-2">
                  Unachievable in all but theory.
                  <br />
                  <I>
                    Star Platinum adds an extra second to the earth&apos;s day
                    with a punch.
                  </I>
                </td>
              </tr>
              <tr>
                <td className="border border-fg px-3 py-2 font-bold">15+</td>
                <td className="border border-fg px-3 py-2">Impossible</td>
                <td className="border border-fg px-3 py-2">Can not be done.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="flex w-full flex-col gap-3 overflow-x-auto">
          <h3 className="italic underline">Stat Combo Example Chart</h3>
          <table className="w-full min-w-200 border-collapse border border-fg bg-bg-lt text-center text-sm leading-snug">
            <thead>
              <tr>
                <th
                  colSpan={10}
                  className="border border-fg px-3 py-2 font-bold"
                >
                  BAD6 Stat Combo Examples
                </th>
              </tr>
              <tr>
                <th className="border border-fg px-2 py-2" />
                <th className="border border-fg px-2 py-2 font-bold">Body</th>
                <th className="border border-fg px-2 py-2 font-bold">Wit</th>
                <th className="border border-fg px-2 py-2 font-bold">Reason</th>
                <th className="border border-fg px-2 py-2 font-bold">Menacing</th>
                <th className="border border-fg px-2 py-2 font-bold">Pluck</th>
                <th className="border border-fg px-2 py-2 font-bold">Power</th>
                <th className="border border-fg px-2 py-2 font-bold">Speed</th>
                <th className="border border-fg px-2 py-2 font-bold">
                  Durability
                </th>
                <th className="border border-fg px-2 py-2 font-bold">
                  Precision
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border border-fg px-2 py-2 text-left underline">
                  Body
                </th>
                <td className="border border-fg px-2 py-2 font-bold">
                  Physique
                </td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
              </tr>
              <tr>
                <th className="border border-fg px-2 py-2 text-left underline">
                  Wit
                </th>
                <td className="border border-fg px-2 py-2 italic">Dodge</td>
                <td className="border border-fg px-2 py-2 font-bold">Cunning</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
              </tr>
              <tr>
                <th className="border border-fg px-2 py-2 text-left underline">
                  Reason
                </th>
                <td className="border border-fg px-2 py-2 italic">Stealth</td>
                <td className="border border-fg px-2 py-2 italic">
                  Intelligence
                </td>
                <td className="border border-fg px-2 py-2 font-bold">
                  Knowledge
                </td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
              </tr>
              <tr>
                <th className="border border-fg px-2 py-2 text-left underline">
                  Menacing
                </th>
                <td className="border border-fg px-2 py-2 italic">Pose</td>
                <td className="border border-fg px-2 py-2 italic">Bamboozle</td>
                <td className="border border-fg px-2 py-2 italic">Persuade</td>
                <td className="border border-fg px-2 py-2 font-bold">
                  Presence
                </td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
              </tr>
              <tr>
                <th className="border border-fg px-2 py-2 text-left underline">
                  Pluck
                </th>
                <td className="border border-fg px-2 py-2 italic">Endure</td>
                <td className="border border-fg px-2 py-2 italic">Impulse</td>
                <td className="border border-fg px-2 py-2 italic">Focus</td>
                <td className="border border-fg px-2 py-2 italic">Befriend</td>
                <td className="border border-fg px-2 py-2 font-bold">Spirit</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
              </tr>
              <tr>
                <th className="border border-fg px-2 py-2 text-left underline">
                  Power
                </th>
                <td className="border border-fg px-2 py-2 italic">Break</td>
                <td className="border border-fg px-2 py-2 italic">Cripple</td>
                <td className="border border-fg px-2 py-2 italic">Neutralize</td>
                <td className="border border-fg px-2 py-2 italic">Overkill</td>
                <td className="border border-fg px-2 py-2 italic">Rally</td>
                <td className="border border-fg px-2 py-2 font-bold">
                  Destruction
                </td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
              </tr>
              <tr>
                <th className="border border-fg px-2 py-2 text-left underline">
                  Speed
                </th>
                <td className="border border-fg px-2 py-2 italic">Maneuver</td>
                <td className="border border-fg px-2 py-2 italic">Feint</td>
                <td className="border border-fg px-2 py-2 italic">Anticipate</td>
                <td className="border border-fg px-2 py-2 italic">Confound</td>
                <td className="border border-fg px-2 py-2 italic">Race</td>
                <td className="border border-fg px-2 py-2 italic">Ora</td>
                <td className="border border-fg px-2 py-2 font-bold">
                  Alacrity
                </td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
              </tr>
              <tr>
                <th className="border border-fg px-2 py-2 text-left underline">
                  Durability
                </th>
                <td className="border border-fg px-2 py-2 italic">Guard</td>
                <td className="border border-fg px-2 py-2 italic">Parry</td>
                <td className="border border-fg px-2 py-2 italic">Reinforce</td>
                <td className="border border-fg px-2 py-2 italic">No-Sell</td>
                <td className="border border-fg px-2 py-2 italic">Withstand</td>
                <td className="border border-fg px-2 py-2 italic">Restrain</td>
                <td className="border border-fg px-2 py-2 italic">Protect</td>
                <td className="border border-fg px-2 py-2 font-bold">Staying</td>
                <td className="border border-fg px-2 py-2 font-bold">X</td>
              </tr>
              <tr>
                <th className="border border-fg px-2 py-2 text-left underline">
                  Precision
                </th>
                <td className="border border-fg px-2 py-2 italic">Expel</td>
                <td className="border border-fg px-2 py-2 italic">Trickshot</td>
                <td className="border border-fg px-2 py-2 italic">Gauge</td>
                <td className="border border-fg px-2 py-2 italic">Amaze</td>
                <td className="border border-fg px-2 py-2 italic">Snipe</td>
                <td className="border border-fg px-2 py-2 italic">Strike</td>
                <td className="border border-fg px-2 py-2 italic">Finesse</td>
                <td className="border border-fg px-2 py-2 italic">Intercept</td>
                <td className="border border-fg px-2 py-2 font-bold">Control</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
