export const formatMoviePremiereDate = (premiere: string) => {
  if (!premiere) {
    return '';
  }

  const date = new Date(premiere);
  const day = date.getUTCDate();
  const month = date.toLocaleString('en', { month: 'long', timeZone: 'UTC' });
  const year = date.getUTCFullYear();

  return `${month} ${day}, ${year}`;
};
