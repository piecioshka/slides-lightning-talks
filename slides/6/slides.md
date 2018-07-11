class: middle, slide-invert-colors
background-image: url(../../images/warsawjs/logo-right-1920x1200.jpg)

.size60[
# WarsawJS Meetup #47 <br/><span class="slim">Lightning Talks</span>
]

---

class: middle, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/edition-2/IMG_3502.jpg)

![](./images/logo-mocha.png)

.size80[
# <span class="slim">Mocha</span>: Twoje pierwsze<br/>testy jednostkowe
]

---

class: middle

# Co to są <span class="slim">testy jednostkowe</span>?

---

.size40[
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

.size40[
* `assertion` - narzędzia, które sprawdzi stan
* `test runner` - narzędzia, które je uruchomi
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
## [github.com/piecioshka/test-mocha](https://github.com/piecioshka/test-mocha)

---

class: middle

# Asercje

.size40[
* Native `console.assert`
* Native `assert`
* Library: [should](http://npmjs.com/package/should)
* Library: [expect.js](http://npmjs.com/package/expect.js)
* Library: [better-assert](https://www.npmjs.com/package/better-assert)
]

---

class: center, middle

.size130[
# DEMO
]

---

.size50[
# Stworzenie nowego projektu
]

.size30[
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

.size50[
# Plik: `test/spec.js`
]

.size30[
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

## [<mark>Testy jednostkowe</mark>](https://www.facebook.com/events/202711777098053/)
## [WarsawJS Workshop #22:<br/>Testowanie kodu 1/3](https://www.facebook.com/events/202711777098053/)

