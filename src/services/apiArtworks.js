import { BASE_URL } from '@/utils/config';

const PAGE = 50;

async function getJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  return response.json();
}

/** Every work in the gallery that has an image. */
async function getAllWorks() {
  const works = [];
  for (let page = 1; page <= 40; page++) {
    const { data = [], meta } = await getJson(
      `${BASE_URL}/work?limit=${PAGE}&page=${page}`
    );
    works.push(...data);
    if (
      data.length < PAGE ||
      (meta?.totalItems && works.length >= meta.totalItems)
    ) {
      break;
    }
  }
  return works.filter((work) => work.image_url);
}

/** artist id -> "First Last" */
async function getArtistNames() {
  const names = {};
  for (let page = 1; page <= 20; page++) {
    const { data = [] } = await getJson(
      `${BASE_URL}/artist?limit=${PAGE}&page=${page}`
    );
    data.forEach((a) => {
      names[a.id] = `${a.first_name} ${a.last_name}`.trim();
    });
    if (data.length < PAGE) break;
  }
  return names;
}

/**
 * Gallery artworks as credited slides:
 * { src, title, artist, workId, artistId }
 */
export async function getArtworkSlides() {
  const [works, names] = await Promise.all([getAllWorks(), getArtistNames()]);
  return works.map((work) => ({
    src: work.image_url,
    title: work.title,
    artist: names[work.artist_id] || null,
    workId: work.id,
    artistId: work.artist_id,
  }));
}
