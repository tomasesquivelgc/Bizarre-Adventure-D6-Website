import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Resources - Bizarre Adventure" }];
}

export default function Resources() {
  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Resources</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Integer lacinia sollicitudin massa. Cras metus.
      </p>
    </main>
  );
}
