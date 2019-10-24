const request = require("supertest");
const server = require("../../server");

describe("Wedding Route", () => {
  it("should set testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("GET /api/auth/weddings/", () => {
    it("should return http status of 400 no token", () => {
      return request(server)
        .get("/api/auth/weddings/")
        .then(response => {
          expect(response.status).toBe(400);
        });
    });
    // should return json
    it("should return JSON", async () => {
      const response = await request(server).get("/api/auth/weddings/");
      // toMatch uses a regular expression to check the value
      expect(response.type).toMatch(/json/i);
    });
  });
});
