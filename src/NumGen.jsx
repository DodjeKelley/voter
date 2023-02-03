import { Button } from "react-bootstrap";
import React, { useState } from "react";

export default function NumGen() {
  const [n, newNum] = useState(0);

  function numGen() {
    newNum((n) => Math.random());
  }

  return (
    <div>
      <h1>Random Number Generator</h1>
      <h2>{n}</h2>
      <Button variant="primary" onClick={numGen}>
        Generate
      </Button>
    </div>
  );
}
