export const formatTime = time => {
  const date = time ? new Date(time) : new Date();
  const year = date.getFullYear();
  const month = set2(date.getMonth() + 1);
  const day = set2(date.getDate());
  const hour = set2(date.getHours());
  const minutes = set2(date.getMinutes());
  const seconds = set2(date.getSeconds());
  return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
};
const set2 = val => {
  return val >= 10 ? val : '0' + val;
};
