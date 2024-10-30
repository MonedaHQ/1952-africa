function extractVideoId(url) {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  );
  return match ? match[1] : null;
}

export function convertToEmbedLink(normalLink) {
  const videoId = extractVideoId(normalLink);
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=0`;
  }
  return null;
}

export function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export const addQueryParam = (url, paramName, paramValue) => {
  if (paramValue) {
    url += url.includes('?')
      ? `&${paramName}=${paramValue}`
      : `?${paramName}=${paramValue}`;
  }

  return url;
};

export function truncateString(inputString, numberOfWords) {
  const words = inputString.split(' ');

  const truncatedWords = words.slice(0, numberOfWords);

  const truncatedString = truncatedWords.join(' ');

  const finalString =
    words.length > numberOfWords ? `${truncatedString}...` : truncatedString;

  return finalString;
}

export function getCurrentDateString() {
  const currentDate = new Date();
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const dateString = currentDate
    .toLocaleDateString('en-US', options)
    .replace(/\//g, '/');
  return dateString;
}

export function simplifyDateString(date) {
  const currentDate = new Date(date);
  const day = new Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(
    currentDate
  );
  const dayOfMonth = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
  }).format(currentDate);
  const month = new Intl.DateTimeFormat('en-GB', { month: 'long' }).format(
    currentDate
  );
  const year = currentDate.getFullYear();

  const dayWithSuffix = `${dayOfMonth}${getOrdinalSuffix(dayOfMonth)}`;

  return `${day}, ${dayWithSuffix} of ${month} ${year}`;
}

function getOrdinalSuffix(day) {
  const lastDigit = day % 10;
  if (day >= 11 && day <= 13) return 'th';
  if (lastDigit === 1) return 'st';
  if (lastDigit === 2) return 'nd';
  if (lastDigit === 3) return 'rd';
  return 'th';
}
