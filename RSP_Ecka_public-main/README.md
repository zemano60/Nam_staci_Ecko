# É-čka – Recenzní systém vědeckého časopisu

## Popis projektu

Cílem projektu je vytvořit webovou aplikaci pro správu odborného časopisu – od sběru článků přes recenzní řízení až po jejich publikování.  
Projekt vzniká v rámci předmětu **Řízení softwarových projektů** na VŠPJ a je vyvíjen agilní metodikou **Scrum**.

🌐 **Živá aplikace:** [skolni-casopis-ecka.netlify.app](https://skolni-casopis-ecka.netlify.app/)

---

## Hlavní uživatelské role

| Role | Popis |
|------|-------|
| **Autor** | Nahrává a spravuje své články |
| **Recenzent** | Posuzuje a hodnotí články |
| **Redaktor** | Zajišťuje úpravy a komunikaci s autory |
| **Šéfredaktor** | Rozhoduje o publikování článků |
| **Čtenář** | Prohlíží publikované články |
| **Administrátor** | Spravuje uživatele a systém |

---

## Použité technologie

Projekt je čistě frontendová aplikace – bez serveru, bez PHP, bez databáze.

- **HTML** – struktura všech stránek
- **CSS** – vlastní design systém v souboru `styles.css`, bez frameworků
- **JavaScript** – vanilla JS rozdělený podle rolí:
  `auth.js`, `guard.js`, `shared.js`, `author.js`, `redaktor.js`, `recenzent.js`, `sefredaktor.js`, `admin.js`
- **localStorage / sessionStorage** – ukládání dat (články, recenze, uživatelé) přímo v prohlížeči jako JSON

> ⚠️ Data jsou uložena pouze v prohlížeči. Po smazání dat nebo na jiném zařízení nejsou dostupná.

Aplikace **nevyužívá** žádný backend (PHP, Python, Node.js), SQL/NoSQL databázi, build systém ani JS frameworky.  
Stačí otevřít `index.html` v prohlížeči – žádný server není potřeba.

---

## Použité nástroje

- **ScrumDesk** – řízení vývojového cyklu a sprintů
- **MS Teams** – týmová komunikace a stand-up meetingy
- **Git / GitHub** – verzování a správa repozitáře
- **Netlify** – hosting aplikace

---

## Struktura repozitáře
## Struktura repozitáře

/src
├── index.html
├── styles.css
├── auth.js
├── guard.js
├── shared.js
├── author.js
├── redaktor.js
├── recenzent.js
├── sefredaktor.js
└── admin.js
/docs       – dokumentace projektu
README.md   – popis projektu
.gitignore  – konfigurace ignorovaných souborů

---

## Tým É-čka

| Jméno | Role |
|-------|------|
| **Filip Dusil** | Scrum Master / Product Owner |
| **Zdeněk Babor** | Team Member |
| **Marek Maněk** | Team Member |

---

*Projekt vznikl v akademickém roce 2025/2026 v rámci předmětu Řízení softwarových projektů, VŠPJ Jihlava.*