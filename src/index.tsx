import { serve } from "bun";
import index from "./index.html";
import blog from "./blog.html";

const server = serve({
  routes: {
    // Serve static assets from /src/assets at /assets/*
    "/assets/:path+": async (req) => {
      const p = req.params.path;
      const file = Bun.file(`./src/assets/${p}`);
      if (!(await file.exists())) return new Response("Not found", { status: 404 });
      return new Response(file);
    },
    // Favicon convenience routes
    "/favicon.svg": async () => new Response(Bun.file("./src/assets/favicon.svg")),

    // Serve blog page
    "/blog.html": blog,
    "/blog": blog,
    
    // Serve index.html for all unmatched routes.
    "/*": index,

    "/api/hello": {
      async GET(req) {
        return Response.json({
          message: "Hello, world!",
          method: "GET",
        });
      },
      async PUT(req) {
        return Response.json({
          message: "Hello, world!",
          method: "PUT",
        });
      },
    },

    "/api/hello/:name": async req => {
      const name = req.params.name;
      return Response.json({
        message: `Hello, ${name}!`,
      });
    },
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
