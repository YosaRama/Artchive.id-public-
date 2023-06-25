export function generateOtp(length = 6) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length + 1) {
    if (counter === 3) {
      result += "-";
    } else {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    counter += 1;
  }
  return `ART-${result}`;
}
