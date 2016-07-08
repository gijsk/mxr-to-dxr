let links = document.querySelectorAll("a[href^='https://mxr.mozilla.org/'],a[href^='http://mxr.mozilla.org/']");
for (let link of links) {
  let url = null;
  try {
    url = new URL(link.href);
  } catch (ex) {}
  if (!url) {
    continue;
  }
  let pathComponents = url.pathname.substring(1).split("/");
  if (pathComponents[1] != "source") {
    continue;
  }
  let repo = pathComponents[0] + "/";
  let path = "source/";
  let hash = url.hash;
  if (url.search) {
    query = new URLSearchParams(url.search.substring(1));
    if (query.has("rev")) {
      path = "rev/" + query.get("rev") + "/";
    }
    if (query.has("mark")) {
      hash = "#" + query.get("mark");
    }
  }

  link.href = "https://dxr.mozilla.org/" + repo + path + pathComponents.slice(2).join("/") + hash;
  link.appendChild(link.ownerDocument.createTextNode(" [rewritten to DXR]"));
}
