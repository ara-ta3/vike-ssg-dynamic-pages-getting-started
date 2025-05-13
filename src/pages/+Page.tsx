import React, { useState } from "react";

export { Page };

function Page() {
  const [c, setC] = useState<number>(0);
  return (
    <div>
      <h1>Hello World</h1>
      <p>
        <a href="/hoge/1/">to hoge1</a>
      </p>
      <p>
        <a href="/hoge/2/">to hoge2</a>
      </p>
      <p>now: {c}</p>
      <button type="button" onClick={() => setC(c + 1)}>
        Count Up
      </button>
    </div>
  );
}
