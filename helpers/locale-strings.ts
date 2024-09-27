export class LocaleStrings {
  static get today() {
    return Intl.DateTimeFormat('es', {
      // year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date());
  }
}
