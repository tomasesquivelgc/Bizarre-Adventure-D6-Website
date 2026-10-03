import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Mechanics - Bizarre Adventure" }];
}

export default function Mechanics() {
  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Mechanics</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta.
      </p>
    </main>
  );
}
