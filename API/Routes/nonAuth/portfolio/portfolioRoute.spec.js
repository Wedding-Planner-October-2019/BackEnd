const request = require("supertest");
const server = require("../../../server");

describe("Portfolio Route test", () => {
  it("should set testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("GET /api/portfolios", () => {
    // should return http status of 200
    it("should return http status of 200", () => {
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
});
