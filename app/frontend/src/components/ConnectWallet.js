import React, { useState } from "react";
import axios from "axios";

const ConnectWallet = ({ setAddress }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const connectWallet = async () => {
    setLoading(true);
    setError("");
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const address = accounts[0];
        setAddress(address);
        await axios.post("http://localhost:5000/api/wallet/connect", {
          address,
        });
      } catch (error) {
        setError("Failed to connect wallet. Please try again.");
        console.error("Error connecting wallet:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setError("Please install MetaMask!");
    }
  };

  return (
    <div>
      <button onClick={connectWallet} disabled={loading}>
        {loading ? "Connecting..." : "Connect Wallet"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ConnectWallet;