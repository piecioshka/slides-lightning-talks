class: middle, slide-invert-colors
background-image: url(../../images/warsawjs/logo-right-1920x1200.jpg)

.size60[
# WarsawJS Meetup #44<br/><span class="slim">Lightning Talks</span>
]

---

class: middle, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/IMG_5889.jpg)

# Jaki znacie sposoby wyświetlania obiektów podczas developmentu?

---

class: middle, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/IMG_5889.jpg)

## Ja znam takie:

.size50[
* `console.log`
* `console.info`
* `console.debug`
* `console.warn`
* `console.error`
]

---

class: middle, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/IMG_5889.jpg)

## Ale są jeszcze inne...

* `console.assert`
* `console.exception // Firefox`
* `console.dir(xml)`
* `console.count`
* `console.context`
* `console.table`
* `console.group(Collapsed)(End)`
* `console.profile(End)`
* `console.time(End)`
* `console.trace`

---

class: middle, center, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/IMG_5632.jpg)

# `log` vs `info` vs `debug` vs `warn` vs `error`

---

class: middle, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/IMG_5632.jpg)

# Moja definicja

* `log` - wyświetlenie tymczasowych danych
* `info` - zaznaczenie uruchomienie danego miejsca w celach czysto informacyjnych
    - nie developerskich
    - są takie miejsca w kodzie, że trzeba koniecznie zostawić tam informację
* `debug` - wyświetlenie wartości w celach developerskich, która będzie pomocna
    aby przeprowadzić analizę aplikacji w przyszłości
* `warn` - zaznaczenie szczególnej sytuacji, która może powodować błąd aplikacji
* `error` - powiadomienie o sytuacji, w której występuje błąd przechwycony przez
    aplikację

---

class: middle, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/IMG_5632.jpg)

# Popularność użycie

TODO: wykres

Rafał, Czarek, Krzysiek, Przemysław, Bartek, Ania, Michał

- log: 7
- info: 1
- debug: 1
- warn: 4
- error: 5

---

exclude: true

# Ankieta

- log
    - printowanie na konsolę jakichkolwiek informacji (używam w procesie developmentu do printowania obiektów/zmiennych/odpowiedzi z usług)
    - zwykły log do konsoli
    - od słowa `log` czyli dziennik aktywności w aplikacji. Filtrując komunikaty wyłącznie po logach powinniśmy czytając wiedzieć, co się dzieje aktualnie w aplikacji bez patrzenia na render.
    - Logowanie do konsoli przeglądarki informacji ogólnych - pojawi się gdy zaznaczony filtr będzie `Info`
    - Używam console.log raczej tylko do debugowania, nie używam innych funkcji obiektu console, wolę sobie narysować interesującego mnie loga poprzez log poprzedzający `console.log('/////////////////////////////////////////////////////////////////')`, bo jestem raczej wzrokowcem  i szybciej mi się wzrok skupia na  takim narysowanym logu.
    - info dla developera, wyplucie dowolnej, potrzebnej na bieżące potrzeby rzeczy
    - logowanie informacji użytecznych głównie dla deweloperów
- info
    - printowanie na konsole treści informacyjnych (nie uzywam)
    - podobnie jak pierwszy, tylko chyba się wyświetla ikonka `i` czasem - nie używam
    - Prezentuje informacje, które nie są oczywiste z punktu widzenia aplikacji
    - podobnie jak log z możliwością pofiltrowania w przeglądarce - pojawi się gdy zaznaczony filtr będzie `Info`
    - nie widziałem nigdy potrzeby rozgraniczenia na log i info
    - zgodnie z przeznaczeniem, tj: tutaj mam problem z rozróżnieniem kiedy `.info`, a kiedy `.log`
    - coś, co daje obraz, że jakaś rzecz się wykonała (bo np. coś od niej zależy, wiec chcemy wiedzieć, że jeśli rzecz B się wywala, to dlatego, że A nie poszła)
    - logowanie informacji pomocniczych
- debug
    - printowanie na konsole treści debugowych (nie używam)
    - nie używam, chyba alias do `console.log`
    - Informacje developerskie
    - logowanie tylko pokaże się dopiero gdy w przglądarce jest zaznaczony `Verbose, defaultowo opcja wyłączona
    - jak wyświetlam informację którą aktualnie debuguje, z tego co widzę pojawiła się taka opcja stosunkowo nie dawno.
    - zgodnie z przeznaczeniem, tj: podczas debugowania
    - logowanie informacji użytecznych głównie dla deweloperów
- warn
    - printowanie na konsole tresci ostrzegających o czymś (używam do wyświetlenia ostrzezen/bledow niekrytycznych dla aplikacji)
    - wrzuca warning do konsoli, wyświetla się w innym kolorze z ikonką `!`
    - Ostrzeżenie przed nietypową (ale obsłużoną) sytuacją.
    - Logowanie do konsoli z komunikatem jakiegoś ostrzeżenia, ale nie kryrtycznego tak jak w przypadku `error` - pojawi się gdy zaznaczony filtr będzie `Warnings`
    - jak chce wyświetlić informację którą nie można ignorować
    - zgodnie z przeznaczeniem, tj: to samo, nie wiem przed czym z JSa można warnować - dobrym przykladem na warny są warny z shaki - ostrzegają o możliwym zagrożeniu przy korzystaniu z api które ma być deprecated - ale przy naszych aplikacjach to raczej nie ma miejsca
    - jak nazwa wskazuje, jakieś ostrzeżenie, coś się dzieje, ale pacjent jeszcze oddycha :slightly_smiling_face:
    - logowanie ostrzeżeń, drobnych błędów nie mających krytycznego znaczenia dla działania aplikacji
- error
    - printowanie na konsole tresci z bleden (uzywam do wyswietlenia bledow krytycznych aplikacji - np. blad zapytania do uslugi GetMedia)
    - wrzuca error do konsoli, wyświetla się na czerwono i dostępny jest kontekst owego błędu
    - Ostrzeżenie przed nietypową (nieobsłużoną) sytuacją.
    - Logowanie do konsoli informacji o błędzie, W konsoli komunikat pojawi się w kolorze czerwony, - pojawi się gdy zaznaczony filtr będzie `Errors`
    - Użyje jak chce wyświetlić błąd krytyczny
    - zgodnie z przeznaczeniem, tj: errory jeśli chcemy lognąć coś z errora
    - wykrzaczenie, spodziewany błąd (do zastosowania przy obsłudze błędów)
    - logowanie błędów krytycznych

---

class: middle, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/IMG_5632.jpg)

# Włączanie w DevTools

* Default - Info + Warning + Errors
* Verbose
* Info
* Warnings
* Errors

---

class: middle, slide-invert-colors, slide-fullscreen-blockquote
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/IMG_5632.jpg)

> Muszę się Wam do czegoś przyznać...

.next[
 ... nadpisuję obiekt `console`!
]

---

class: middle, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/IMG_5632.jpg)

# Mój sposób na logi... [npmjs.com/`debug`](http://npmjs.com/debug/) ✨

---

class: middle, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/IMG_5632.jpg)

# Filtrowanie (Glob Pattern)

.size50[
* `localStorage`, debug=player:**
* `DevTools`, player:
]

---

class: middle, slide-invert-colors
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/IMG_5632.jpg)

.size30[
```javascript
const console = {
    log: require('debug')('app:player:log'),
    info: require('debug')('app:player:info'),
    debug: require('debug')('app:player:debug'),
    warn: require('debug')('app:player:warn'),
    error: require('debug')('app:player:error'),
};
```
]

---

*Plusy dodatnie za nadpisywaniem:*

- możemy dalej używać wszędzie naturalnego systemu do debugowania, np. `console.log`, `console.error`, `console.warn`
- nadpisywanie dodaje nam prefix do każdego `console.log`, dodając do niego informację o module z którego pochodzi
- na produkcji użytkownicy nie widzą naszych logów, które zawsze będą w aplikacji
- mamy możliwość włączenia `console.log`-ów na produkcji po ustawieniu “*” w kluczu “debug”
- nie musimy uczyć się nowego sposobu korzystania z logów
- nie musimy usuwać wszystkich `console.log`-ów obecnych (nie możemy wystawiać aplikacji dla klienta z naszymi logami)
- nie będziemy musieli odrzucać Pull Requestów jeśli developer napisze `console.log`
- bardzo łatwo jest przejść z trybu logów ZAWSZE widocznych (natywny obiekt) do logów PRAWIE widocznych (kiedy nadpiszemy w danym pliku obiekt `console`

*Plusy ujemne:*

- nadpisujemy obiekt globalny, który może być wykorzystany przez różne funkcje
- rozróżniamy logi na takie, które się zawsze pokażą: `console` oraz na takie które nie zawsze się pojawią `debug.log`s - będziemy musieli pamiętać, że możemy używać `console.log` w celach developerskich, ale kiedy oddajemy do Code Review, będziemy musieli je usunąć

---

class: middle

# DEMO: Zdebugujmy coś!

TODO
