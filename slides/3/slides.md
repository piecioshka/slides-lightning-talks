class: middle, center, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../images/photos/IMG_6627.jpg)

# WarsawJS Meetup #39:<br/><mark>Lightning Talks</mark>

---

class: middle, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../images/photos/IMG_5564.jpg)

## Programisto aplikacji<br/>klienckich, jak realizujesz<br/>komunikację z serwerem?

---

class: middle, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../images/photos/IMG_5889.jpg)

# Jak wygląda realizacja połączenia aplikacji klienckiej do serwera?

---

class: middle, center, slide-fullscreen-content
background-image: url(./docs/0-scheme.png)

---

class: middle, center, slide-fullscreen-content
background-image: url(./docs/1-request.png)

---

class: middle, center, slide-fullscreen-content
background-image: url(./docs/2-response.png)

---

class: middle, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../images/photos/IMG_5364.jpg)

# Happy path 😁

## Komunikacja z serwerem zakończona sukcesem.<br/>Dane pomyślnie sparsowane.

---

class: bottom
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../images/photos/IMG_5340.jpg)

# [DEMO No. 1](./app/1-happy-path.html)

---

class: top, right, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../images/photos/IMG_5463.jpg)

# Czy to koniec?<br/><mark>Nie.</mark>

---

class: top, right, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../images/photos/IMG_6153.jpg)

# <mark>Error handling</mark><br/>HTTP Error

---

class: bottom
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../images/photos/IMG_5340.jpg)

# [DEMO No. 2](./app/2-error-handling.html)

---

class: top, right, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../images/photos/IMG_5463.jpg)

# Czy to koniec?<br/><mark>Nie.</mark>

---

class: top, right, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../images/photos/IMG_6153.jpg)

# <mark>Error handling</mark><br/>Server Error

---

class: bottom
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../images/photos/IMG_5340.jpg)

# [DEMO No. 3](./app/3-error-handling-server-error.html)

---

class: top, right, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../images/photos/IMG_5463.jpg)

# Czy to koniec?<br/><mark>Nie.</mark>

---

class: top, right, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../images/photos/IMG_6153.jpg)

# <mark>Error handling</mark><br/>Malformed<br/>Response

---

class: middle, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../images/photos/IMG_5842.jpg)

# Co to jest `schema`?

---

class: middle, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../images/photos/IMG_5842.jpg)

### Schema <em>Przykład</em>

```javascript
const SCHEME = {
    required: true,
    type: 'object',
    properties: {
        cat: {
            required: true,
            type: 'object',
            properties: {
                name: {
                    required: true,
                    type: 'string'
                },
                owner: {
                    required: true,
                    type: 'string'
                }
            }
        }
    }
};
```

---

class: middle, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../images/photos/IMG_5632.jpg)

# Narzędzie: [`is-my-json-valid`][repo]

---

class: middle, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../images/photos/IMG_5928.jpg)

# <mark>Walidujemy odpowiedź</mark>,<br/>czy jest zgodna ze schemą!

---

class: middle, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../images/photos/IMG_5928.jpg)

### Przykład walidacji <mark>struktury obiektu</mark>

.size40[
```javascript
const imjv = require('is-my-valid-json')
const validate = imjv(SCHEME);
const isResponseValid = validate(DATA);

if (!isResponseValid) {
    return validate.errors;
}
```
]

---

class: bottom
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../images/photos/IMG_5340.jpg)

# [DEMO No. 4](./app/4-malformed-response.html)

---

class: top, right, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../images/photos/IMG_5463.jpg)

# Czy to koniec?

---

class: middle, right, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../images/photos/IMG_6232.jpg)

# Dla mnie <mark>tak</mark>.<br/>A dla Ciebie?

[repo]: https://github.com/mafintosh/is-my-json-valid
