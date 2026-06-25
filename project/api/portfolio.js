const CONFIG = require("./portfolio-config.json");

const GITHUB_OWNER = "IslamElswafy";

async function githubFetch(path, token) {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "growth-website-portfolio"
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const response = await fetch(`https://api.github.com${path}`, { headers });
  if (!response.ok) return null;
  return response.json();
}

function buildStack(entry, repo, languages) {
  if (entry.services?.en) {
    return {
      en: entry.services.en,
      ar: entry.services.ar || entry.services.en
    };
  }

  const fromLanguages = languages
    ? Object.keys(languages).slice(0, 4).join(" · ")
    : "";
  const primary = repo?.language || fromLanguages || entry.repo;

  return {
    en: primary,
    ar: primary
  };
}

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");

  const token = process.env.GITHUB_TOKEN || "";
  const results = [];

  for (let index = 0; index < CONFIG.length; index += 1) {
    const entry = CONFIG[index];
    const repo = await githubFetch(`/repos/${GITHUB_OWNER}/${entry.repo}`, token);
    const languages = await githubFetch(`/repos/${GITHUB_OWNER}/${entry.repo}/languages`, token);
    const stack = buildStack(entry, repo, languages);

    results.push({
      n: String(index + 1).padStart(2, "0"),
      client: entry.client,
      industry: {
        en: entry.industry?.en || repo?.description || entry.repo,
        ar: entry.industry?.ar || entry.industry?.en || repo?.description || entry.repo
      },
      services: stack,
      cover: entry.cover || null,
      logo: entry.logo || null,
      placeholder: entry.placeholder || null,
      url: entry.url || repo?.homepage || null
    });
  }

  res.status(200).json({ projects: results });
};
