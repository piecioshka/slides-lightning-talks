class: middle, center, slide-invert-colors, slide-fullscreen-content
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../../photos/IMG_6627.jpg)

# WarsawJS Meetup #40: Lightning Talks

---

class: middle

## Jaki znacie sposoby debugowania kodu?

---

### Ja znam takie:

* console.log
* console.info
* console.debug
* console.warn
* console.error

Oraz:

* console.assert
* console.exception // Firefox
* console.dir(xml)
* console.count - zlicza uruchomienie samej siebie (można sterować parametrem)
* console.context - ???
* console.table
* console.group(Collapsed)(End)
* console.profile(End)
* console.time(End)
* console.trace

---

## `log` vs `info` vs `debug` vs `warn` vs `error`

---

# Moja definicja

* log - wyświetlenie tymczasowych danych
* info - zaznaczenie uruchomienie danego miejsca w celach czysto informacyjnych
    - nie developerskich
    - są takie miejsca w kodzie, że trzeba koniecznie zostawić tam informację
* debug - wyświetlenie wartości w celach developerskich, która będzie pomocna
    aby przeprowadzić analizę aplikacji w przyszłości
* warn - zaznaczenie szczególnej sytuacji, która może powodować błąd aplikacji
* error - powiadomienie o sytuacji, w której występuje błąd przechwycony przez
    aplikację

---

# Popularność użycie

TODO: wykres

Rafał, Czarek, Krzysiek, Przemysław, Bartek, Ania

- log: 1 + 1 + 1 + 1 + 1 + 1
- info: 0 + 0 + 0 + 0 + 0 + 0
- debug: 0 + 0 + 0 + 0 + 0 + 0
- warn: 1 + 1 + 0 + 1 + 0 + 0
- error: 1 + 1 + 0 + 1 + 0 + 1

---

# Ankieta

- log
    - printowanie na konsolę jakichkolwiek informacji (używam w procesie developmentu do printowania obiektow/zmiennych/odpowiedzi z usług)
    - zwykły log do konsoli
    - od słowa `log` czyli dziennik aktywności w aplikacji. Filtrując komunikaty wyłącznie po logach powinniśmy czytając wiedzieć, co się dzieje aktualnie w aplikacji bez patrzenia na render.
    - Logowanie do konsoli przeglądarki informacji ogólnych - pojawi się gdy zaznaczony filtr będzie `Info`
    - Używam console.log raczej tylko do debugowania, nie używam innych funkcji obiektu console, wolę sobie narysować interesującego mnie loga poprzez log poprzedzający `console.log('/////////////////////////////////////////////////////////////////')`, bo jestem raczej wzrokowcem  i szybciej mi się wzrok skupia na  takim narysowanym logu.
    - info dla developera, wyplucie dowolnej, potrzebnej na bieżące potrzeby rzeczy
- info
    - printowanie na konsole tresci informacyjnych (nie uzywam)
    - podobnie jak pierwszy, tylko chyba się wyświetla ikonka `i` czasem - nie używam
    - Prezentuje informacje, które nie są oczywiste z punktu widzenia aplikacji
    - podobnie jak log z możlwością pofiltrowania w przeglądarce - pojawi się gdy zaznaczony filtr będzie `Info`
    - nie widziałem nigdy potrzeby rozgraniczenia na log i info
    - zgodnie z przeznaczeniem, tj: tutaj mam problem z rozróżnieniem kiedy `.info`, a kiedy `.log`
    -  coś, co daje obraz, że jakaś rzecz się wykonała (bo np. coś od niej zależy, wiec chcemy wiedzieć, że jeśli rzecz B się wywala, to dlatego, że A nie poszła)
- debug
    - printowanie na konsole tresci debugowych (nie uzywam)
    - nie używam, chyba alias do `console.log`
    - Informacje developerskie
    - logowanie tylko pokaże się dopiero gdy w przglądarce jest zaznaczony `Verbose, defaultowo opcja wyłączona
    - jak wyświetlam informację którą aktualnie debuguje, z tego co widzę pojawiła się taka opcja stosunkowo nie dawno.
    - zgodnie z przeznaczeniem, tj: podczas debugowania
- warn
    - printowanie na konsole tresci ostrzegających o czyms (uzywam do wyswietlenia ostrzezen/bledow niekrytycznych dla aplikacji)
    - wrzuca wrning do konsoli, wyświetla się w innym kolorze z ikonką `!`
    - Ostrzeżenie przed nietypową (ale obsłużoną) sytuacją.
    - Logowanie do konsoli z komunikatem jakiegoś ostrzeżenia, ale nie kryrtycznego tak jak w przypadku `error` - pojawi się gdy zaznaczony filtr będzie `Warnings`
    - jak chce wyświetlić informację którą nie można ignorować
    - zgodnie z przeznaczeniem, tj: to samo, nie wiem przed czym z JSa można warnować - dobrym przykladem na warny są warny z shaki - ostrzegają o możliwym zagrożeniu przy korzystaniu z api które ma być deprecated - ale przy naszych aplikacjach to raczej nie ma miejsca
    - jak nazwa wskazuje, jakieś ostrzeżenie, coś się dzieje, ale pacjent jeszcze oddycha :slightly_smiling_face:
- error
    - printowanie na konsole tresci z bleden (uzywam do wyswietlenia bledow krytycznych aplikacji - np. blad zapytania do uslugi GetMedia)
    - wrzuca error do konsoli, wyświetla się na czerwono i dostępny jest kontekst owego błędu
    - Ostrzeżenie przed nietypową (nieobsłużoną) sytuacją.
    - Logowanie do konsoli informacji o błędzie, W konsoli komunikat pojawi się w kolorze czerwony, - pojawi się gdy zaznaczony filtr będzie `Errors`
    - Użyje jak chce wyświetlić błąd krytyczny
    - zgodnie z przeznaczeniem, tj: errory jeśli chcemy lognąć coś z errora
    - wykrzaczenie, spodziewany błąd (do zastosowania przy obsłudze błędów)

---

# Włączanie w DevTools

* Default - Info + Warning + Errors
* Verbose
* Info
* Warnings
* Errors

---

class: middle

# ... muszę się Wam do czegoś przyznać...

---

class: middle

# ... nadpisuje obiekt `console`

---

# Mój sposób na logi... to paczka `debug` ✨

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

# Trochę o funkcjach logujących w specyfikacji

---

# Historia tychże funkcji

---

# Przyszłość tychże funkcji

---

# Jak jest w innych językach?
