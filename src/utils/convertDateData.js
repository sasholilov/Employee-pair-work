import { DATE_PRESENT, SEPARATORS } from "./constants";
const convertDateData = function (value) {
  let separator;
  if (value === DATE_PRESENT) {
    return DATE_PRESENT;
  }

  if (value.includes(SEPARATORS.DASH)) {
    separator = SEPARATORS.DASH;
  } else if (value.includes(SEPARATORS.DOT)) {
    separator = SEPARATORS.DOT;
  } else if (value.includes(SEPARATORS.SLASH)) {
    separator = SEPARATORS.SLASH;
  }

  if (!separator) {
    const day = value.slice(0, 2);
    const month = value.slice(2, 4);
    const year = value.slice(4, 8);
    const formatedDateString = `${year}-${month}-${day}`;
    return formatedDateString;
  }

  const convertedString = value.split(separator).join("-").trim();

  const stringFirstItemLength = convertedString.split(SEPARATORS.DASH)[0]
    .length;

  const year =
    stringFirstItemLength > 2
      ? convertedString.split(SEPARATORS.DASH)[0].slice(0, 4)
      : convertedString.split(SEPARATORS.DASH)[2].slice(0, 4);
  const month = convertedString.split(SEPARATORS.DASH)[1];
  const day =
    stringFirstItemLength > 2
      ? convertedString.split(SEPARATORS.DASH)[2]
      : convertedString.split(SEPARATORS.DASH)[0];
  const formatedDateString = `${year}-${month}-${day}`;
  return formatedDateString;
};

export { convertDateData };
