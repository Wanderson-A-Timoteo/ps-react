export const FormatDateTimeAPI = (datetime: any) => {
  const date = new Date(datetime);
  const formattedDate = date.toISOString().split('T')[0];
  const formattedTime = date.toTimeString().split(' ')[0];
  return `${formattedDate}T${formattedTime}`;
};