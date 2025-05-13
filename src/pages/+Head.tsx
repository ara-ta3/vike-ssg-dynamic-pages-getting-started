import React from "react";

const Head: React.FC = () => {
  const title = "default title";
  const description = "default description";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta charset="UTF-8" />
    </>
  );
};

export default Head;
