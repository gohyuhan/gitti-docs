// Adds `<meta name="robots" content="noindex,follow">` to archived documentation
// versions so search engines consolidate ranking on the latest version (served at
// /docs/) instead of splitting it across duplicate older-version pages.

const ARCHIVED_VERSION_RE = /\/docs\/0\.(?:1\.0|[1-8]\.x)\//;

function updateRobotsMeta(pathname: string): void {
  if (typeof document === "undefined") {
    return;
  }

  const isArchived = ARCHIVED_VERSION_RE.test(pathname);
  let meta = document.querySelector<HTMLMetaElement>(
    'meta[data-noindex-old-version="true"]',
  );

  if (isArchived) {
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "robots");
      meta.setAttribute("data-noindex-old-version", "true");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", "noindex,follow");
  } else if (meta) {
    meta.remove();
  }
}

export function onRouteDidUpdate({ location }: { location: { pathname: string } }): void {
  updateRobotsMeta(location.pathname);
}

if (typeof window !== "undefined") {
  updateRobotsMeta(window.location.pathname);
}
