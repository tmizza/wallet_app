const request = require("supertest");
const app = require("../index");

describe("Wallet API", () => {
  it("should connect wallet", async () => {
    const res = await request(app)
      .post("/api/wallet/connect")
      .send({ address: "0x123" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Wallet connected");
  });

  it("should fetch wallet balance", async () => {
    const res = await request(app).get(
      "/api/wallet/balance/0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
    );
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("balance");
  });
});