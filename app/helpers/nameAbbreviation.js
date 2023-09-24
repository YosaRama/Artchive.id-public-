function nameAbbreviation(fullName, maxLength) {
  const shortenedName = fullName?.substring(0, maxLength);
  const hasAbbreviation = shortenedName?.length < fullName?.length;
  const abbreviatedLastWord = hasAbbreviation ? fullName.split(" ").pop().charAt(0) + "." : "";
  const finalName = hasAbbreviation
    ? shortenedName.replace(/\s+\w+$/, " " + abbreviatedLastWord)
    : shortenedName;
  return finalName;
}

export default nameAbbreviation;
