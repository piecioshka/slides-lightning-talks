class: middle

# WarsawJS Meetup #39: Lightning Talks

---

# Programisto aplikacji klienckich, jak realizujesz feature komunikacji z serwerem?

---

### Jak wygląda realizacja połączenia aplikacji klienckiej z serwerem?

- komunikujemy się z backendem
- `happy path` - zrealizowany - **czy to koniec?**
- nie!
- **zapewnić obsługę błędów!**
- pojawi się błąd HTTP - obsłużone - **czy to koniec?**
- nie!
- backend odpowie z komunikatem, że jest błąd - obsłużone - **czy to koniec?**
- nie!
- backend nie odpowie ani, sukcesem, ani błędem - **co teraz?**
- walidujemy odpowiedź, czy jest zgodna ze schemą!
- czy to koniec?

**Weryfikacja, czy backend zwrócił faktycznie dane w formacie, który wspieramy.**

---

class: middle

# Co to jest `schema`?

---

class: middle

# `is-my-json-valid`

## [github.com/mafintosh/is-my-json-valid][repo]

---

## Kodujemy!

---

class: middle

# Thanks!

## See you on next WarsawJS!


[repo]: https://github.com/mafintosh/is-my-json-valid
