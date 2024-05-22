class: middle, slide-invert-colors
background-image: url(../../images/warsawjs/logo-right-1920x1200.jpg)

.size-60[
# WarsawJS Meetup #48<br/><span class="slim">Lightning Talks</span>
]

---

class: middle, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/edition-2/IMG_3502.jpg)

![](./images/logo-nightwatch.png)

.size-70[
# <span class="slim">Nightwatch.js</span>: Twoje pierwsze<br/>testy end-to-end
]

---

class: middle

# Co to są <span class="slim">testy end-to-end</span>?

---

.size-30[
```js
const TARGET_PAGE_URL = 'https://piecioshka.pl/blog/';
const PAGE_LOAD_DELAY = 3000;

module.exports = {
  'Is header contains correct text?': (browser) => {
    browser.url(TARGET_PAGE_URL)
      .waitForElementVisible('body', PAGE_LOAD_DELAY)
      .assert.containsText('h2', 'Piotr Kowalski')
      .end();
  }
};
```
]

---

class: middle

.size-70[
# Czego potrzebujemy aby uruchomić <mark>testy end-to-end</mark>?
]

* Przeglądarki? **(headless)**
* Terminala

---

class: slide-fullscreen-content
background-image: url(./images/tools.jpg)

---

class: slide-fullscreen-content
background-image: url(./images/tools-only-nightwatch.jpg)

---

class: slide-fullscreen-content
background-image: url(./images/tools-single-nightwatch.jpg)

---

class: slide-fullscreen-content
background-image: url(./images/tools-single-nightwatch-pokeball.jpg)

---

class: middle

![](./images/logo-nightwatch.png)

## Bazuję na projekcie:
#### <https://github.com/piecioshka/test-nightwatch-chrome-headless>

---

class: center, middle

.size-130[
# DEMO 🎊
]

---

class: middle, center

# [nightcloud.io](https://nightcloud.io/)

---

class: middle, center

<iframe width="560" height="315" src="https://www.youtube.com/embed/5EgJNRJuNGw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

---

class: middle

# Artykuł 🔖

<https://piecioshka.pl/blog/2017/08/09/jak-napisac-testy-end-to-end-z-wykorzystaniem-nightwatch-oraz-chrome-headless.html>

---

background-image: url(./images/fb.jpg)

---

class: top, right, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/edition-2/IMG_4792.jpg)

# Dziękuję!

## [<mark>Testy end-to-end</mark>][szkolenie]
## [WarsawJS Workshop #23:<br/>Testowanie kodu 2/3][szkolenie]

[szkolenie]: https://www.facebook.com/events/2133561886872334/
