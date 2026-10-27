import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Character Creation - Bizarre Adventure" }];
}

export default function CharacterCreation() {
  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Character Creation</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        convallis, nisl at convallis feugiat, sapien dui tristique lectus, id
        sollicitudin urna arcu eget justo. Maecenas non lacus at velit
        tincidunt efficitur.
      </p>
      <h2 className="text-xl font-medium mb-2">Point buy tiers</h2>
      <h2 className="text-xl font-medium mb-2">Bios</h2>
      <h2 className="text-xl font-medium mb-2">User Stats</h2>
      <h2 className="text-xl font-medium mb-2">Stand Stats</h2>
      <h2 className="text-xl font-medium mb-2">Rank Burns</h2>
      <h2 className="text-xl font-medium mb-2">Range/Learning Ranks</h2>
      <h2 className="text-xl font-medium mb-2">Properties</h2>
      <h2 className="text-xl font-medium mb-2">Abilities</h2>
      <h2 className="text-xl font-medium mb-2">Stand Types</h2>
      <h2 className="text-xl font-medium mb-2">「Alternative Character Options」</h2>
      <h2 className="text-xl font-medium mb-2">「Alternative User Types」</h2>
      <h2 className="text-xl font-medium mb-2">「Alternative Power sources」</h2>
      <h2 className="text-xl font-medium mb-2">Alternative Source Range Stats</h2>
    </main>
  );
}
