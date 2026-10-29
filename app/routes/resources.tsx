import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Resources - Bizarre Adventure" }];
}

export default function Resources() {
  return (
    <main className="resources-content pt-16 px-4 pb-16">
      <div className="mx-auto max-w-7xl">
        <header className="resources-header">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">「Resources」</h1>
        </header>

        <div className="resource-examples">
          <section id="example-user" className="resource-card">
          <h2>Example User</h2>
          <div className="resource-card-body">
          <h3>Bio & Info Tab</h3>
      <p>
        Name: Wendell Sanders
        Bio: An overweight shut-in, Wendell was living the Otaku lifestyle, watching time slip before his eyes.
        Day after day, another day in a year full of days. As he would shitpost day-in and day-out, provoking strangers on the internet,
        the line between genuine sentiment and irony blurred for him.
        Eventually, Wendell decided that life wasn't worth living,
        and stabbed himself with an arrow. This happened to be The Arrow, however, and rather than dying, Wendell gained a Stand of his own.
         Renewed by this opportunity, Wendell travels the globe in search of himself. He currently roams around, searching for "islamic terries" to kill.
         He may be trigger happy, but his watchful eye never rests.
        Prized possessions: Laptop, Fancy Coat, Katana
      </p>
      <ul>
        <li>Hit Limit: 2/2</li>
        <li>Body: B (4d6) [4 Points]</li>
        <li>Wit: D (2d6) [2 Points]</li>
        <li>Reason: C (3d6) [3 Points]</li>
        <li>Menacing: A (5d6) [5 Points]</li>
        <li>Pluck: E (1d6) [1 Point]</li>
        <li>Luck: D (2 Ranks) [2 Points]</li>
      </ul>
      <h3>Attributes Tab</h3>
      <ul>
        <li>Hit Limit: [2]/[2]</li>
        <li>Body: [4]</li>
        <li>Wit: [2]</li>
        <li>Reason: [3]</li>
        <li>Menacing: [5]</li>
        <li>Pluck: [1]</li>
        <li>Luck: [2]/[2]</li>
      </ul>
          </div>
          </section>

          <section id="example-stand" className="resource-card">
      <h2>Example Stand</h2>
      <div className="resource-card-body">
      <h3>Bio & Info Tab</h3>
      <p>
        Stand Name: 「Power Of Wings」
        Ability: 「On The Chainwax」 - This Stand has the ability to lower the efficiency of anything it hits. This causes the same amount of energy to output less. So a car under this effect would go 40 miles an hour, when it would normally go at 60. A person’s blood pressure would drop to dangerous levels, reducing blood flow to the brain. An electrical cord would transfer less energy, causing electronics to shut off. An enemy’s punch would be less efficient, making it unable to destroy a wall it could normally crush. [4 Points]
        Design: 「Power Of Wings」 takes a humanoid form, with golden chain watches weighing it down. Its body surface is shredded, making a pattern of flappy gills on its limbs. The back has a large crank on it, the end of which is connected to a smaller crank, and that one connected to an even smaller crank, and that one connected to a tiny crank. It wears a tie on its neck, with a suitcase tied to its end.
        Type: Close-Range Melee [Natural Humanoid]
      </p>
      <ul>
        <li>Power: A (5d6) [5 Points]</li>
        <li>Speed: D (2d6) [2 Points]</li>
        <li>Range: D (2 Ranks) [2 Points]</li>
        <li>Precision: E (1d6) [1 Points]</li>
        <li>Durability: C (3d6) [3 Points]</li>
        <li>Learning: B (4 Ranks) [4 Points]</li>
      </ul>
      <p>Property: Bouncy - The Stand is remarkably similar to stretchy rubber. When hitting a surface, it will spring back by a certain distance with controlled momentum. [2 Points]</p>
      <h3>Attributes Tab</h3>
      <ul>
        <li>LearningRanks: [4]/[4]</li>
        <li>RangeInMeters: [8]</li>
        <li>RangeRanks: [2]/[2]</li>
        <li>Power: [5]</li>
        <li>Speed: [2]</li>
        <li>Precision: [1]</li>
        <li>Durability: [3]</li>
      </ul>
      <a href="https://www.youtube.com/watch?v=tW5FP5bhvGI">Wendell Reference</a>
          </div>
          </section>
        </div>

        <section id="additional-links" className="resource-links">
      <h2>Additional Links</h2>
      <div className="resource-link-grid">
      <section className="resource-link-group">
      <h3>For Character Sheets</h3>
      <ul>
        <li><a href="https://foundryvtt.com/packages/bizarre-adventures-d6">TheMexicutioner's BAD6 Foundry Module</a></li>
        <li><p>Roll20 Macros, sheet in HTML and CSS parts (use both, may need Legacy Sanitization)</p></li>
        <li><a href="https://drive.google.com/file/d/1BJPijg-zzR3QeQHBig4c8_-RtaCgXWS3/view?usp=sharing">Footsoldier51's Fillable PDF BAD6 Sheets </a></li>
        <li>
          <a href="https://docs.google.com/spreadsheets/d/14KSh2OI6QcOm9B1KQXAmW1mbRSOp-uhnuezUZT38FKo/edit#gid=92064862">Kyoto Grand's Sheet Template</a>
          <p> + </p>
          <a href="https://pastebin.com/SPq5PSbf">Text Sheet</a>
          <p> + </p>
          <a href="https://drive.google.com/drive/folders/1qgpGJxO7GWf6WjX85Rt1yo-I0EzA8bqj">Araki's Character Profile</a>
        </li>
      </ul>
      </section>
      <section className="resource-link-group">
      <h3>For Making Tokens</h3>
      <ul>
        <li>
          <a href="https://www.rptools.net/toolbox/token-tool/">TokenTool</a>
          <p>(For placing borders on the images)</p>
        </li>
        <li>
          <a href="http://29691o.rgr.jp/jojo/jojoface1100.swf">JoJo Face Maker v1.1</a>
           (Open With
          <a href="https://drive.google.com/file/d/11vlfpopzkz8JQUvLly8ez0wpUq-zT4vW/view?usp=share_link">Flash Player Projector</a>)
        </li>
        <li><a href="https://picrew.me/en/secret_image_maker/oMFMJLK7N8bd7Myl">JoJo Picrew Face Maker</a></li>
        <li>
          <a href="https://drive.google.com/file/d/1ieA96lPYrikwiwhFy3PiK4Rphz2z1rL5/view">Fire Emblem Portrait Maker</a>
           (For a different style of sprites)
        </li>
      </ul>
      </section>
      <section className="resource-link-group">
      <h3>For making Maps</h3>
      <ul>
        <li>
          <a href="https://www.mapeditor.org/">Tiled</a>
           (Map creator, set Tile Size Width and Height to 70x70 for easy Roll20 scaling)
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1Hrpa8dF8HUQDIoeOvDo2JHRj0RX6RjDe/view?usp=sharing">Gib's' 70x70 Tileset Dump</a>
           (Resized for Roll20, updated 1/7/25)
        </li>
        <li>
          <a href="https://drive.google.com/open?id=1ZEqRnKQrGTA1x0r8koOMwQTEw_-HhSk2">Gib's Map Pack</a>
           (Old set of maps made with the power of tileset bootlegging)
        </li>
      </ul>
      </section>
      <section className="resource-link-group">
      <h3>For creating Graphics</h3>
      <ul>
        <li>
          <a href="https://spooky-ghostwriter.tumblr.com/jojo/standmaker">Stand Graph Creator</a>
           (The cool spinny Stat Wheel)
        </li>
        <li>
          <a href="https://www.gjtorikian.com/Earthbound-Battle-Backgrounds-JS/">Earthbound Background Generator</a>
           (Empty space filler, View Image makes still png)
        </li>
        <li>
          <a href="https://waifu2x.booru.pics/">Waifu2X.booru</a>
           (For upscaling small images like said .png)
        </li>
        <li>
          <a href="https://www.remove.bg/">remove.bg</a>
           (Background remover for props)
        </li>
      </ul>
      </section>
      <section className="resource-link-group">
      <h3>For sharing Music</h3>
      <ul>
        <li>
          <a href="https://www.watch2gether.com/?lang=en">Watch2Gether </a>
          (Youtube streaming chat room)
        </li>
        <li>
          <a href="">Gib's Roll20 Playlists</a>
          (Extended music sorted by mood)
        </li>
      </ul>
      </section>
      <section className="resource-link-group">
      <h3>For writing/other</h3>
      <ul>
        <li>
          <a href="https://jojowiki.com/">JoJoWiki</a>
          <p> + </p>
          <a href="https://drive.google.com/file/d/1xbYYSvLYmyKGw4XJAv8gFRuzN_5vWIeT/view?usp=sharing">Manga in Theory and Practice</a>
        </li>
        <li>
          <a href="https://jojotier.tumblr.com/post/174168747643/sams-guide-to-making-batshit-crazy">Guide to Batshit Crazy Fan Stands</a>
          <p> + </p>
          <a href="https://docs.google.com/document/d/1mWPWwLNJfGN-IgMShFgdmuV9L6P5YRk6cJCu8yLS_gM/View">Making JoJo Fights JoJo EX</a>
          <p> + </p>
          <a href="https://stand-stand.tumblr.com/">Stand-Stand</a>
        </li>
        <li>
          <a href="https://www.reddit.com/r/TabletopCrusaders/">r/TabletopCrusaders</a>
          <p> + </p>
          <a href="https://www.reddit.com/r/StardustCrusaders/comments/44emrn/jojos_bizarre_loteria_13/czpttvg/?context=3">SB's Design Analysis </a>
        </li>
      </ul>
      </section>
      </div>
        </section>
      <p>
        Created by Gibbous
        Based on the Bizarre Adventures D10/D100 systems and Wushu
        Special thanks to my playtesting group and /r/TabletopCrusaders
      </p>
      </div>
    </main>
  );
}
