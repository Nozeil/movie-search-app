export const formatMovieRuntime = (runtime: number) => {
  const minutesInHour = 60;
  const hours = Math.floor(runtime / minutesInHour);
  const minutes = runtime % minutesInHour;
  const minutesTwoDigits = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}h ${minutesTwoDigits}m`;
};
