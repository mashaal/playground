import html from "#vono/html";

import { Hono } from "hono"

const app = new Hono;

app.get("/api/test", c => c.json({ message: "Hello World" }))

app.get("*", c => c.html(html.replace("%title%", "playground")))

export default app;