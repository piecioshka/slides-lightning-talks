class: middle, slide-invert-colors
background-image: url(../../images/warsawjs/logo-right-1920x1200.jpg)

.size-60[
# WarsawJS Meetup #47<br/><span class="slim">Lightning Talks</span>
]

---

class: middle, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/edition-2/IMG_3502.jpg)

![](./images/logo-mocha.png)

.size-80[
# <span class="slim">Mocha</span>: Twoje pierwsze<br/>testy jednostkowe
]

---

class: middle

# Co to są <span class="slim">testy jednostkowe</span>?

---

.size-40[
```js
const cart = [];

function add( list, product ) {
    list.push( product );
}

console.assert(cart.length === 0); // OK

add(cart, { name: 'Drone' } );

console.assert(cart.length === 1); // OK
```
]

---

class: middle

# Czego potrzebujemy aby uruchomić testy?

.size-30[
* `assert function` - narzędzie, które sprawdzi stan
* `test runner` - narzędzie, które je uruchomi
]

---

class: slide-fullscreen-content
background-image: url(./images/tools.png)

---

class: slide-fullscreen-content
background-image: url(./images/tools-unit-tests.png)

---

class: slide-fullscreen-content
background-image: url(./images/tools-only-mocha.png)

---

class: middle

![](./images/logo-mocha.png)

## Bazuję na projekcie:
## <https://github.com/piecioshka/test-mocha>

---

class: middle

# Asercje

.size-40[
* `console.assert`
* `assert`
* [should](https://www.npmjs.com/package/should)
* [expect.js](https://www.npmjs.com/package/expect.js)
* [better-assert](https://www.npmjs.com/package/better-assert)
]

---

class: center, middle

.size-130[
# DEMO 🎊
]

---

.size-50[
# Stworzenie nowego projektu
]

.size-30[
```bash
cd /tmp
mkdir mocha-playground
cd mocha-playground
npm init -f
yarn add mocha
vim package.json
# add npm run-scripts task
mkdir -p test
vim test/spec.js
```
]

---

class: no-display-twitter-handle

.size-50[
# Plik: `test/spec.js`
]

.size-30[
```js
const assert = require('assert');

function add( list, product ) {
    list.push( product );
}

describe('add', () => {
    it('should resize list', () => {
        const cart = [];
        cart.length = 0;
        add(cart, { name: 'dji drone' });
        assert(cart.length === 1);
    });
});
```
]

---

class: top, right, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/edition-2/IMG_4792.jpg)

# Dziękuję!

## [<mark>Testy jednostkowe</mark>][szkolenie]
## [WarsawJS Workshop #22:<br/>Testowanie kodu 1/3][szkolenie]

[szkolenie]: https://www.facebook.com/events/202711777098053/
