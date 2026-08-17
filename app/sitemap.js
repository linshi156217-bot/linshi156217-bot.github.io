export const dynamic = "force-static";

const routes = [
  ["/", "weekly", 1],
  ["/project-guide/", "monthly", 0.8],
  ["/website-review/", "monthly", 0.9],
  ["/salt-and-hawthorn/", "monthly", 0.8],
  ["/alder-and-slate/", "monthly", 0.8],
  ["/aster-house-hair/", "monthly", 0.8],
  ["/marlowe-dental/", "monthly", 0.8],
  ["/gable-and-mere/", "monthly", 0.8],
  ["/privacy/", "yearly", 0.3],
];

export default function sitemap() {
  const lastModified = new Date("2026-08-17T00:00:00.000Z");
  return routes.map(([path, changeFrequency, priority]) => ({
    url: `https://linshistudio.com${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
