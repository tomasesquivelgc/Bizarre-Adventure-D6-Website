import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bizarre Adventures D6 | Tabletop RPG" },
    {
      name: "description",
      content:
        "A tabletop roleplaying system inspired by JoJo's Bizarre Adventure.",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
