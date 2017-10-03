# Find emoji mobile app
A simple mobile app to find the appropriate emoji!

## Data
```json
[
  {
    "name": "smile",
    "alt": "happy, cheerful, face, joy, funny, haha, laugh, like",
    "code": ":smile:",
    "categ": "people",
    "rank": 1
  }
]
```

## Source
* Source of emoji: https://www.webpagefx.com/tools/emoji-cheat-sheet/
* To get it from the website just execute this script from developer console
```javascript
const people = Array
  .from(document.querySelectorAll('#emoji-people .name'))
  .map((item, rank) => ({
      name: item.innerText,
      alt: item.dataset.alternativeName,
      code: `:${item.innerText}:`,
      categ: 'people',
      rank
  }))
const nature = Array
  .from(document.querySelectorAll('#emoji-nature .name'))
  .map((item, rank) => ({
      name: item.innerText,
      alt: item.dataset.alternativeName,
      code: `:${item.innerText}:`,
      categ: 'nature',
      rank
  }))
const objects = Array
  .from(document.querySelectorAll('#emoji-objects .name'))
  .map((item, rank) => ({
      name: item.innerText,
      alt: item.dataset.alternativeName,
      code: `:${item.innerText}:`,
      categ: 'objects',
      rank
  }))
const places = Array
  .from(document.querySelectorAll('#emoji-places .name'))
  .map((item, rank) => ({
      name: item.innerText,
      alt: item.dataset.alternativeName,
      code: `:${item.innerText}:`,
      categ: 'places',
      rank
  }))
const symbols = Array
  .from(document.querySelectorAll('#emoji-symbols .name'))
  .map((item, rank) => ({
      name: item.innerText,
      alt: item.dataset.alternativeName,
      code: `:${item.innerText}:`,
      categ: 'symbols',
      rank
  }))
JSON.stringify([...people, ...nature, ...objects, ...places, ...symbols], null, 2)
```

## Roadmap
* [ ] Add filter on category
* [ ] Add number of results
* [ ] Merge emoji with https://github.com/iamcal/emoji-data