import React from "react";
import { usePageContext } from "vike-react/usePageContext";
import { PageContext } from "vike/types";

const Head: React.FC = () => {
  const c = usePageContext() as PageContext<{
    id: number;
    title: string;
    description: string;
  }>;
  const title = c.data.title;
  const description = c.data.description;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta charSet="UTF-8" />
    </>
  );
};

export default Head;
