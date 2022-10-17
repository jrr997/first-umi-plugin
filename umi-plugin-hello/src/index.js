export default (api) => {
  api.modifyHTML($ => {
    $("body").prepend(`<h1>hello umi plugin</h1>`);
    return $;
  })
}