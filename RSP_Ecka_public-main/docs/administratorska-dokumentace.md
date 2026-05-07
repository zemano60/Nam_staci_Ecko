# Technická a administrátorská dokumentace: Systém Journal

Tento manuál je určen pro správce systému a obsahuje instrukce k obsluze administrátorského rozhraní a přehled o vnitřním fungování aplikace Journal.

## 1. Přístup do administrace

Administrátorská sekce je oddělena od běžného uživatelského rozhraní a disponuje vlastní autentizační bránou.
* **Přístupové URL:** `https://skolni-casopis-ecka.netlify.app/admin-login`
* **Testovací přihlašovací údaje:**
    * **Identifikátor:** `admin`
    * **Heslo:** `heslo`

Po autorizaci je uživatel automaticky přesměrován do řídicího centra na adrese `roles/admin.html`.

## 2. Architektonický přehled

Aplikace je koncipována jako **statický front-endový systém**. Veškerá datová manipulace probíhá v rámci prohlížeče pomocí rozhraní `localStorage`. 
*Poznámka: Toto řešení je zvoleno pro účely školní simulace. V reálném provozu by aplikace vyžadovala propojení s databázovým serverem (SQL/NoSQL) prostřednictvím API.*

**Klíčové moduly admin panelu:**
* Centrální dashboard s metrikami.
* Správa a monitoring životního cyklu článků.
* Evidence uživatelských profilů a oprávnění.
* Interaktivní HelpDesk pro komunikaci s uživateli.

---

## 3. Administrátorské kompetence a funkce

### 3.1 Dashboard a přehledy
Hlavní panel slouží k okamžité orientaci v aktivitě redakčního systému.
* **Kvantitativní ukazatele:** Celkový počet registrovaných děl, objem publikovaných textů, počty uživatelů rozdělené dle rolí a suma vypracovaných recenzí.
* **Vizualizace:** Grafické znázornění rozložení článků podle jejich aktuálního stavu a vývojové trendy v čase.

### 3.2 Management článků
Administrátor má globální dohled nad všemi záznamy v systému bez ohledu na jejich autora.
* **Monitoring:** Sledování postupu článků skrze jednotlivé fáze (od konceptu po archivaci).
* **Nástroje:** Pokročilé filtrování (dle stavu, autora či data), řazení seznamů a fulltextové vyhledávání v názvech a metadatech.
* *Poznámka: Admin primárně nezasahuje do obsahu textů, plní roli dohledu nad integritou procesu.*

### 3.3 Správa uživatelské základny
Modul pro kontrolu registrovaných subjektů.
* **Evidence:** Detailní výpis uživatelů s možností filtrace podle přiřazených rolí.
* **Profilace:** Zobrazení kontaktních údajů (e-mail, jméno) a případná manuální editace uživatelských entit.

### 3.4 Modul technické podpory (HelpDesk)
Centrální místo pro řešení uživatelských podnětů.
* **Interakce:** Výpis doručených požadavků včetně identifikace odesílatele a obsahu zprávy.
* **Řešení:** Možnost odesílat odpovědi a spravovat životní cyklus ticketů (označení za vyřízené). Celá historie zůstává auditovatelná v úložišti.

### 3.5 Analytické výstupy
Pokročilé statistiky pro potřeby vedení redakce.
* Sledování výkonnosti redakční rady a vytížení jednotlivých recenzentů.
* Přehledy publikací podle konkrétních vydání časopisu.
* Možnost časového omezení analýz (měsíční/roční kvartály).

---

## 4. Inicializace a testování (Seed Data)

Pro účely prezentace nebo testování je připravena servisní stránka **DEMO data** (`public/seed.html`).
* **Generování:** Okamžité naplnění `localStorage` sadou článků, které pokrývají všechny fáze workflow.
* **Purge (Vymazání):** Kompletní reset úložiště článků, který uvede aplikaci do výchozího stavu.

**Doporučený postup pro recenzenty/oponenty:**
1. Spustit vyčištění starých dat.
2. Aktivovat generování demo sady.
3. Postupně procházet jednotlivé role (např. Author -> Editor) a sledovat změny v admin panelu.

---

## 5. Nasazení a údržba

Aplikace je optimalizována pro nasazení na platformách statického hostingu (např. GitHub Pages, Netlify).

**Kontrolní seznam pro produk