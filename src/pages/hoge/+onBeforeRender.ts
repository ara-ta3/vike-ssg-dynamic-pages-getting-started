import { PageContext } from "vike/types";

export async function onBeforeRender(pageContext: PageContext) {
  const id = parseInt(pageContext.routeParams.id);
  let title = "ほげ null";
  if (isNaN(id)) {
    return {
      pageContext: {
        data: { id, title, description: "ほげ null" },
      },
    };
  }
  title = `ほげ ${id}`;
  return {
    pageContext: {
      data: { id, title: `ほげ ${id}`, description: `ほげ ${id}` },
    },
  };
}
