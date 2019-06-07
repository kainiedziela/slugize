# slugize

Convert sentences, titles and special characters to a url/filename/id-appropiate and readable slug.

## Installation

```bash
npm install @kainiedziela/slugize --save
```

## Usage

```JS
import { slugize } from '@kainiedziela/sunday';

const slug = slugize(string);
```

`slugize(string)` returns a string that had replaced special characters with latin alternatives, replaced spaces with dashes, removed periods, replaced non-alphanumerical characters with dashes, condensed consecutive dashes, lowercased and with the begging and end trimmed (so that the string doesn't start or end with a dash).

## Testing

Tests are performed with [Jest](https://jestjs.io/en/).

`npm run test`

This project is under the **MIT license**.
