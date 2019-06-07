module.exports = function slugize(string) {
    if (typeof string !== 'string') { throw new Error(`Expected a string, got ${typeof name}.`); }
    
    return encodeURIComponent(
      string
      .toLowerCase()
      .normalize('NFD')                 // replace special characters with latin alternatives
      .replace('ł', 'l')                // replace additional spcial characters missed by normalize()
      .replace(/[\u0300-\u036f]/g, '')  // remove
      .replace(/\s/g, '-')              // replace spaces with dashes
      .replace(/\./g, '')               // remove periods
      .replace(/[^a-zA-Z0-9]/, '-')     // replace non-alphanumerical characters with dashes
      .replace(/\-{2,}/, '-')           // condense consecutive dashes
      .replace(/^-+/, '')               // trim slugs beginning
      .replace(/-+$/, '')               // trim slugs ending
    );
  }