#  Definition of Done (DoD) – Redakční systém

Tento dokument stanovuje technická a procesní kritéria, která musí být splněna pro prohlášení backlog itemu (user story) nebo celého sprintu za dokončený.

---

## Obecná kritéria pro každý úkol
*   **Code Review:** Zdrojový kód je nahrán v příslušné větvi na GitHubu a prošel kontrolou minimálně jedním dalším členem týmu.
*   **Dokumentace:** Každá nově implementovaná funkce je zanesena do uživatelské příručky.
*   **Responzivita:** Uživatelské rozhraní (UI) je plně funkční a vizuálně konzistentní na desktopových i mobilních zařízeních.
*   **Validace:** Veškeré vstupy od uživatele jsou ošetřeny proti chybným datům a základním bezpečnostním rizikům.

---

##  Milníky dle Sprintů

### Sprint 1: Autentizace a architektura
*   **Rámcová struktura:** Vytvořena modulární struktura projektu zahrnující šablony pro všechny systémové role (Autor, Redaktor, Recenzent, Šéfredaktor, Čtenář, Administrátor).
*   **Login modul:** Implementován funkční přihlašovací proces s ověřením proti definovaným testovacím účtům.
*   **Role-Based Access Control (RBAC):** Nasazen mechanismus automatického přesměrování uživatele do příslušného rozhraní na základě přidělené role.
*   **Chybové stavy:** Implementována vizuální zpětná vazba pro neúspěšné pokusy o přihlášení a neautorizované přístupy.

### Sprint 2: Workflow recenzního řízení
*   **Management recenzí:** Redaktor disponuje nástrojem pro distribuci článků vybraným recenzentům.
*   **Interaktivní rozhraní:** Recenzenti mají přístup k přiděleným materiálům a mohou vkládat strukturované posudky.
*   **Stavový automat:** Implementováno plynulé předávání dat mezi autorem, redaktorem a recenzentem se zachováním integrity stavu článku.

### Sprint 3: Rozhodovací proces a historie
*   **Verdikty šéfredaktora:** Plně integrované rozhraní pro finální rozhodnutí (schválení, zamítnutí, vrácení k přepracování).
*   **Transparentnost:** Autor má v reálném čase přehled o aktuální fázi řízení a vyjádření editorů.
*   **Version Control:** Systém loguje historii změn a uchovává jednotlivé verze nahraných rukopisů.

### Sprint 4: Veřejná část a publikace
*   **Automatizovaný Deployment:** Schválené příspěvky jsou automaticky transformovány a zobrazeny ve veřejné sekci pro čtenáře.
*   **Vyhledávání a filtrace:** Implementovány algoritmy pro vyhledávání v archivu publikovaných děl podle metadat (autor, datum, téma).
*   **UX Čtenáře:** Rozhraní splňuje moderní standardy webového designu a je optimalizováno pro čitelnost dlouhých textů.

### Sprint 5: Administrace a finální odevzdání
*   **User Management:** Plně funkční CRUD operace (vytvořit, číst, upravit, smazat) pro správu uživatelských účtů a modifikaci rolí.
*   **Komplexní dokumentace:** Uživatelská a administrátorská příručka reflektuje finální stav aplikace (připraveno pro oponentní řízení).
*   **Akceptační testování:** Proběhla finální validace všech kritérií a aplikace je stabilně nasazena v produkčním prostředí (Netlify).