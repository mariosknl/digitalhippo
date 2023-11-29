import { appRouter } from "@/trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const hander = (req: Request) => {
	fetchRequestHandler({
		endpoint: "/api/trpc",
		req,
		router: appRouter,
		// @ts-expect-error context already passed from express middleware
		createContext: () => ({}),
	});
};

export { hander as GET, hander as POST };
