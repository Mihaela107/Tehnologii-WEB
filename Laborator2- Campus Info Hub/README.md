## 1. Ce este o resursă (resource) în aplicația ta?
În aplicația mea, o resursă este un loc sau un serviciu util pentru studenți din campus, de exemplu biblioteca, cantina sau centrul de evenimente. Fiecare resursă are informații descriptive precum nume, tip, locație, program și tag-uri.

## 2. Dă exemplu de un URI și explică componentele acestuia.
Exemplu de URI: "https://example.com/pages/library.html#schedule"

Componente:
- "https" = schema / protocolul
- "example.com" = domeniul / host-ul
- "/pages/library.html" = calea către resursă
- "#schedule" = fragmentul care duce direct la secțiunea de program

## 3. Care părți sunt statice și care sunt dinamice?
Părțile statice sunt fișierele HTML, structura paginilor, meniul de navigare și stilurile CSS.
Părțile dinamice sunt datele încărcate din 'resources.json' cu JavaScript folosind 'fetch()'. Pe pagina principală, lista de resurse, filtrarea pentru locurile de studiu și afișarea tag-urilor sunt generate dinamic.

## 4. Este aplicația ta document-centric sau interactive (sau ambele)? De ce?
Aplicația este ambele. Este document-centric pentru că fiecare pagină HTML prezintă informații clare despre o resursă din campus. În același timp, este și interactive deoarece folosește JavaScript pentru a încărca și afișa dinamic date din JSON pe home page.
