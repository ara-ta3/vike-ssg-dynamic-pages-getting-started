export { onBeforePrerenderStart };

async function onBeforePrerenderStart() {
  const ids = ["1", "2"];
  return ids.map((id) => `/hoge/${id}`);
}
