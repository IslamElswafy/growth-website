const CONFIG = require("./portfolio-config.json");

const GITHUB_OWNER = "IslamElswafy";

async function fetchRepo(name, token) {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "growth-website-portfolio"
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${name}`, { headers });
  if (!response.ok) return null;
  return response.json();
}

function formatLanguage(repo) {
  return repo?.language || repo?.primaryLanguage?.name || "";
}

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");

  const token = process.env.GITHUB_TOKEN || "";
  const results = [];

  for (let index = 0; index < CONFIG.length; index += 1) {
    const entry = CONFIG[index];
    const repo = await fetchRepo(entry.repo, token);
    const lang = formatLanguage(repo);
    const stack = entry.services?.en || lang;
    const stackAr = entry.services?.ar || stack;

    results.push({
      n: String(index + 1).padStart(2, "0"),
      client: entry.client,
      industry: {
        en: entry.industry?.en || repo?.description || entry.repo,
        ar: entry.industry?.ar || entry.industry?.en || repo?.description || entry.repo
      },
      services: {
        en: stack,
        ar: stackAr
      },
      cover: entry.cover || null,
      placeholder: entry.placeholder || null,
      url: entry.url || repo?.homepage || repo?.html_url || null,
      github: repo?.html_url || `https://github.com/${GITHUB_OWNER}/${entry.repo}`,
      private: Boolean(repo?.private),
      language: lang,
      stars: repo?.stargazers_count ?? null,
      synced: Boolean(repo)
    });
  }

  res.status(200).json({
    owner: GITHUB_OWNER,
    syncedAt: new Date().toISOString(),
    hasToken: Boolean(token),
    projects: results
  });
};
