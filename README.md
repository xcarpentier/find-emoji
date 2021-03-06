# Find emoji mobile app
A simple mobile app to find the appropriate emoji!

## Gif demo
![](https://media.giphy.com/media/3ov9jFQQ09Tq0iuqL6/giphy.gif)

## Expo app link
https://exp.host/@xcarpentier/find-emoji

## Apple Store app link
ASAP

## Google Play Store app link
<a href='https://play.google.com/store/apps/details?id=com.applications.developer.findemoji&utm_source=github&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png' width='150'/></a>


## Data
```
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
* [ ] Add a fade and position animation on copied
* [ ] Merge emoji with https://github.com/iamcal/emoji-data
* [ ] keep a sublist with emoji habitually used by the user
* [ ] Fix android keyboard avoiding
* [ ] Use this page https://commons.wikimedia.org/wiki/Emoji?uselang=fr
