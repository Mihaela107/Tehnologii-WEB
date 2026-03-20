Laborator 3 - HTTP, Cookies și Sesiuni

# 1. Care sunt cele 4 metode HTTP principale și când se folosește fiecare?
- GET - folosit pentru a cere sau citi resurse de la server. Nu ar trebui să modifice datele.
- POST - folosit pentru a trimite date către server, de exemplu la creare de resurse sau trimitere de formulare.
- PUT - folosit pentru actualizarea completă a unei resurse existente.
- DELETE - folosit pentru ștergerea unei resurse de pe server.

# 2. Ce semnifică codurile de status?
- 200 OK - cererea a fost procesată cu succes.
- 301 Moved Permanently - resursa a fost mutată definitiv la alt URL.
- 400 Bad Request - cererea trimisă de client este invalidă sau incorect formatată.
- 401 Unauthorized - utilizatorul nu este autentificat sau lipsesc datele de autentificare.
- 403 Forbidden - accesul este interzis chiar dacă serverul a înțeles cererea.
- 404 Not Found - resursa cerută nu există.
- 500 Internal Server Error - eroare internă pe server.

# 3. Diferența dintre HTTP și HTTPS
- HTTP- transmite datele în clar.
- HTTPS- folosește TLS/SSL pentru criptare, ceea ce protejează datele transmise între client și server.
- HTTPS- oferă și autentificarea serverului și integritatea datelor.
