import React from "react";
import type { PageContext } from "vike/types";

export { Page };

function Page({ data }: { data: { id: string } }) {
  console.log(data);
  return (
    <div>
      <p>hello</p>
    </div>
  );
}

const fakeDatabase = ["ネコの話", "イヌの話"];
