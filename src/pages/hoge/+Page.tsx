import { usePageContext } from "vike-react/usePageContext";
import { PageContext } from "vike/types";

export { Page };

function Page() {
  const c = usePageContext() as PageContext<{
    id: number;
    title: string;
    description: string;
  }>;
  const title = c.data.title;
  const description = c.data.description;

  return (
    <div>
      <p>hello {c.data.id}</p>
    </div>
  );
}
