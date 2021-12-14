export const removeHTMLTags = (str: string | null | undefined): string =>
  typeof str === 'string' ? str.replace(/(<([^>]+)>)/gi, '') : '';
