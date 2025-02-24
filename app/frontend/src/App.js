import React, { useState } from "react";
import ConnectWallet from "./components/ConnectWallet";
import BalanceDisplay from "./components/BalanceDisplay";
import "./App.css";

function App() {
  const [address, setAddress] = useState("");

  return (
    <div className="App">
      <h1>Web-Based Wallet</h1>
      <ConnectWallet setAddress={setAddress} />
      {address && <BalanceDisplay address={address} />}
    </div>
  );
}

export default App;