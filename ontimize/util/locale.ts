const REG = /^([a-z]{2})[-|_]([A-Z]{2})$/

export default class LocaleCode {

  static getLanguageCode(code) {
    const match = code.match(REG)
    let result = code.toLowerCase();
    if (match && match.length > 1) {
      result = match[1].toLowerCase();
    }
    return result;
  }

  static getCountryCode(code) {
    const match = code.match(REG)
    let result = code.toLowerCase();
    if (match && match.length > 2) {
      result = match[2].toLowerCase();
    }
    return result;
  }

}