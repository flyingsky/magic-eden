import React, { useState, useEffect } from "react";
import { getNftListFake } from "./Api";
import NftItem from "./NftItem";
import "./styles.css";

export default function App() {
  const [items, setItems] = useState([]);

  // Load the items.
  useEffect(() => {
    // The fetch doesn't work because of cors policy. To test it we use the fake api.
    // fetch(NFT_LIST_URL, { mode: "no-cors" })
    getNftListFake().then((resultItems) => setItems(resultItems));
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>
        <input placeholder="Search nft name" />
      </div>
      <div className="nft-list">
        {items.map((item) => (
          <NftItem {...item} />
        ))}
      </div>
    </div>
  );
}
