import { PageContext } from "vike/types";

export async function onBeforeRender(pageContext: PageContext) {
  const fakeDatabase = ["ネコの話", "イヌの話"];
  const id = parseInt(pageContext.routeParams.id);
  if (isNaN(id) || id > fakeDatabase.length) {
    return {
      pageContext: {
        data: { id, title: "Hoge null" },
      },
    };
  }

  return {
    pageContext: {
      data: { id, title: `ほげ ${id}` },
    },
  };
}
