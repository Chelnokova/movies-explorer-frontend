export function timeConverter(card) {
  const hours = Math.floor(card.duration / 60);
  const minutes = card.duration - hours * 60;
  const duration = hours ? `${hours}ч ${minutes}м` : `${minutes}мин`;
  return duration;
}
