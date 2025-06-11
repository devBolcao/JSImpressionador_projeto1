export const turboLogger = (message, textColor = "blue") => {
  const style = `color: ${textColor}`;
  console.log(`%c${message} `, style);
}
