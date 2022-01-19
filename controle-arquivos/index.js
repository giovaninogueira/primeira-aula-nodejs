const http = require("http");
const fs = require("fs").promises;

const PORT = 3000;

const server = http.createServer();

const extractBody = async (req) => {
  return new Promise((resolve) => {
    let body = "";
    req.setEncoding("utf-8");

    req.on("data", (chuck) => (body += chuck));
    req.on("end", () => {
      return resolve(body);
    });
  });
};

const routes = {
  "/users": {
    GET: (req, resp) => {
      resp.write('[{name: "Giovani"}]');
      return resp.end();
    },
  },
  "/user": {
    POST: async (req, resp) => {
      const body = await extractBody(req);
      const bodyReq = JSON.parse(body);
      bodyReq.id = new Date().getTime();
      await fs.writeFile(
        "files/users.json",
        JSON.stringify([bodyReq], null, 4)
      );
      resp.writeHead(201, { "content-type": "application/json" });
      resp.write(body);
      return resp.end();
    },
  },
};

server.on("request", async (req, resp) => {
  const baseURL = req.protocol + "://" + req.headers.host + "/";
  const reqURL = new URL(req.url, baseURL);
  if (routes[reqURL.pathname] && routes[reqURL.pathname][req.method]) {
    const fnHandler = routes[reqURL.pathname][req.method];
    return await fnHandler(req, resp);
  }
  resp.statusCode = 404;
  return resp.end("not found");
});

server.listen(PORT, () =>
  console.log(`server is running in http://localhost:${PORT}`)
);
