# Uživatelská příručka k systému Journal

Tento dokument slouží jako průvodce pro uživatele webového portálu **Journal**. Jedná se o simulaci redakčního prostředí vědeckého časopisu vytvořenou pro studijní účely. Veškerý obsah v aplikaci je demonstrativní.

## 1. Jak se do systému dostat

### Návštěvník (Veřejná zóna)
* **Adresa:** `https://skolni-casopis-ecka.netlify.app/`
* **Možnosti bez přihlášení:**
    * Informace v sekci „O časopisu“.
    * Prohlížení archivu v sekci „Vydaná čísla“.
    * Čtení nápovědy a kontaktování podpory přes HelpDesk.
    * Generování testovacího obsahu přes Demo data.

### Registrovaní uživatelé
Vstup do interní části je možný přes přihlašovací formulář na úvodní stránce. Pro účely testování využijte následující údaje:

| Uživatelská role | Login | Heslo |
| :--- | :--- | :--- |
| **Autor** | `autor` | `heslo` |
| **Redaktor** | `redaktor` | `heslo` |
| **Recenzent** | `recenzent` | `heslo` |
| **Šéfredaktor** | `sefredaktor` | `heslo` |

*Poznámka: Správce systému má vyhrazený přístup na samostatné stránce.*

---

## 2. Průvodce uživatelskými rolemi

### 2.1 Rozhraní pro Autory
Autor je tvůrcem obsahu. Jeho hlavním cílem je úspěšně provést článek od nápadu k publikaci.
* **Funkce:** Správa vlastních příspěvků, zakládání nových článků (název, abstrakt, nahrání souboru), editace rozpracovaných konceptů a sledování schvalovacího procesu.
* **Pracovní postup:** Po přihlášení vytvoříte přes tlačítko **Nový článek** záznam, nahrajete dokument a odešlete jej redakci. Pokud se vám článek vrátí k opravě, upravíte jej a pošlete znovu.

### 2.2 Rozhraní pro Redaktory
Redaktor funguje jako prostředník a organizátor celého procesu.
* **Funkce:** Přehled nad všemi doručenými příspěvky, formální kontrola (přijetí/vrácení), jmenování recenzentů a komunikace výsledků šéfredaktorovi.
* **Pracovní postup:** V sekci **Příchozí články** posoudíte kvalitu děl. Buď článek vrátíte autorovi s připomínkou, nebo jej posunete do fáze recenzí výběrem vhodného posuzovatele.

### 2.3 Rozhraní pro Recenzenty
Recenzent poskytuje odborný pohled na kvalitu článku.
* **Funkce:** Přístup k přiděleným dílům, stažení souborů k posouzení, vyplnění hodnoticího formuláře (analýza silných/slabých stránek a finální doporučení).
* **Pracovní postup:** V sekci **Přidělené články** si stáhnete materiál, prostudujete jej a následně odešlete strukturovaný posudek redakci.

### 2.4 Rozhraní pro Šéfredaktory
Šéfredaktor má právo „posledního slova“.
* **Funkce:** Celkový přehled o recenzním řízení, studium posudků a vydání konečného verdiktu (přijetí, zamítnutí nebo vyžádání revizí).
* **Pracovní postup:** V sekci **Rozhodnutí** si otevřete detaily článku včetně všech komentářů a zvolíte jeden ze závěrečných stavů, který se okamžitě promítne autorovi i redaktorovi.

---

## 3. HelpDesk a podpora
Pro řešení technických potíží slouží modul **HelpDesk** umístěný ve veřejné části.
* Uživatel zadá svůj dotaz a popis problému.
* Zpráva se odešle do databáze přístupné administrátorovi.
* Veškerá komunikace je vedena interně v rámci systému.

---

## 4. Správa testovacích dat (DEMO)
Aby nebylo nutné při každém testování procházet celý proces od nahrávání po schvalování, obsahuje aplikace stránku **DEMO data**.
* **Inicializace:** Jedním kliknutím naplníte systém ukázkovými články v různých fázích (od rozpracovaných až po publikované).
* **Reset:** Možnost vymazat veškerá uložená data z prohlížeče a začít s čistým štítem.