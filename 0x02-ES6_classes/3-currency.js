export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code === 'string' && code.trim() !== '' && code !== undefined) {
      this._code = code;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string' && name.trim() !== '' && name !== undefined) {
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
