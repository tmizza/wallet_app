import React, { useEffect, useState } from "react";
import axios from "axios";

const BalanceDisplay = ({ address }) => {
  const [balance, setBalance] = useState("");

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/wallet/balance/${address}`
        );
        setBalance(response.data.balance);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };
    fetchBalance();
  }, [address]);

  return (
    <div>
      <h2>Wallet Balance</h2>
      <p>{balance} ETH</p>
    </div>
  );
};

export default BalanceDisplay;