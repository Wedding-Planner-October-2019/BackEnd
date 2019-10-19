const request = require("supertest");
const server = require("./server");

describe("GET /", () => {
  // should return http 200 ok
  it("should return 200 http status code", () => {
    return request(server)
      .get("/")
      .then(response => {
        expect(response.status).toBe(200);
      });
  });

  // should return json
  it("should return JSON", async () => {
    const response = await request(server).get("/");

    // toMatch uses a regular expression to check the value
    expect(response.type).toMatch(/json/i);
  });
});
