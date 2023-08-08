  // Formatação de data e hora de acordo com o que a API espera "2019-01-01T06:00:00".
export const FormatDateTimeAPI = (datetime: any) => {
  const date = new Date(datetime);
  const formattedDate = date.toISOString().split('T')[0];
  const formattedTime = date.toTimeString().split(' ')[0];
  return `${formattedDate}T${formattedTime}`;
};

// Formatação de data e hora no formato "dd/mm/aaaa 00:00:00".
export const FormatDateTimeView = (dateString: any) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};
