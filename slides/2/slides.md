class: middle, center, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/edition-1/IMG_6627.jpg)

# Angular Warsaw #16: Lightning Talks

---

class: middle, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/edition-1/IMG_5564.jpg)

# Jak budować<br/>poprawnie<br/>interfejs?

---

class: bottom, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/edition-1/IMG_5340.jpg)

# Nie `UI`<br/>tylko `OOP`

---

class: middle, center, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/edition-1/IMG_5632.jpg)

# Przerywnik

.size-60[
## `interface` vs `abstract class`
]

---

background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/edition-1/IMG_5632.jpg)

.size-40[
```typescript
interface MobileInterface {
    screen: string;
    size: {
        width: number;
        height: number;
    };
    callMe: Function
}
```
]

---

background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/edition-1/IMG_5632.jpg)

.size-40[
```typescript
abstract class Mobile {
    screen: 'retina';
    size: {
        width: 10;
        height: 5;
    };
    callMe: () => {
        // ...
    }
}
```
]

---

class: middle, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/edition-1/IMG_5521.jpg)

# Po co jest?

## <mark>Zapewnienie kontraktu? Mmmm.... 😶</mark>
## <mark>Żeby WebStorm nie krzyczał 😎</mark>
## <mark>Aby znać budowę struktury danych ‼️</mark>

---

class: middle, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/edition-1/IMG_5889.jpg)

# Możliwości interfejsu

.size-30[
```
?
readonly
<type> ex. string, number, boolean
[propName: string]: any;
multi inheritance
casting
```
]

---

class: middle, center
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/edition-1/IMG_6600.jpg)

.size-90[
`readonly vs const`
]

---

background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/edition-1/IMG_5632.jpg)

.size-20[
```typescript
type Person = string;

interface KeyboardKeys {
    [key: number]: string;
}

interface Computer {
    owner?: Person;
    readonly manufacture: string
    keys: KeyboardKeys
}

interface MacBook extends Computer {
    isOwnerHasIphone: boolean;
}

function buy(computer: Computer) {
    console.log(computer);
}

buy(<MacBook> {});
```
]

---

class: middle, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/edition-1/IMG_6097.jpg)

# Różnice między <mark>interfejsem</mark> a <mark>modelem</mark>

---

class: middle, right, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/edition-1/IMG_5827.jpg)

## <mark>Model</mark>
## Propsy (stan),<br/>funkcje (zachowanie)
## <mark>Interfejs</mark>
## Definicja propsów

---

class: middle, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/edition-1/IMG_6211.jpg)

# Połączenie między <mark>interfejsem</mark> a <mark>modelem</mark>?

---

class: bottom, right, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/edition-1/IMG_5463.jpg)

# Kodujemy?

---

class: middle, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/edition-1/IMG_6543.jpg)

# <mark>TypeScript</mark>, czyli tylko statyczna weryfikacja

---

class: middle, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/edition-1/IMG_6603.jpg)

# Jak zapewnić<br/>weryfikację w locie?

---

class: middle, right, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/edition-1/IMG_6232.jpg)

# is-my-json-valid

## ... ale o tym jutro na<br/> [WarsawJS Meetup #39][warsawjs-39]


[warsawjs-39]: https://www.meetup.com/WarsawJS/events/244354442/
