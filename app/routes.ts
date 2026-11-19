import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("mechanics", "routes/mechanics.tsx"),
	route("mechanic-examples", "routes/mechanic-examples.tsx"),
	route("character-creation", "routes/character-creation.tsx"),
	route("resources", "routes/resources.tsx"),
] satisfies RouteConfig;
