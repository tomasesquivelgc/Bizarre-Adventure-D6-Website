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
    </main>
  );
}
