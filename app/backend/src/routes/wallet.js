const express = require("express");
const { ethers } = require("ethers");
const router = express.Router();

// Endpoint to connect wallet
router.post("/connect", (req, res) => {
  const { address } = req.body;
  if (!address) {
    return res.status(400).json({ error: "Address is required" });
  }
  res.json({ message: "Wallet connected", address });
});

// Endpoint to fetch wallet balance
router.get("/balance/:address", async (req, res) => {
  const { address } = req.params;
  const provider = ethers.getDefaultProvider("homestead"); // Use Ethereum mainnet
  try {
    const balance = await provider.getBalance(address);
    res.json({ balance: ethers.utils.formatEther(balance) });
  catch (error) {
    res.status(500).json({ error: "Failed to fetch balance" });
  }
});

module.exports = router;