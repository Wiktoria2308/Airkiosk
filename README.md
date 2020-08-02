Mój projekt to zbudowanie szablonu HTML według załączonej makiety przy użyciu : Bootstrap, HTML, CSS , Sass, JavaScript. 

1. Aby uruchomić projekt należy, najpierw wejść w terminal lub command-line i zmienić folder na folder projektu ( cd Airkiosk). 

2. Następnie należy zainstalować serwer http w tym celu należy wpisać : npm install http-server.

(Jeśli nie posiadasz zainstalowanego pakietu npm należy wpisać w terminalu: npm install npm@latest -g.
Albo można zainslować node.js, które zawiera już npm, wtedy wchodzimy na stronę: https://nodejs.org/en/ i ściągamy odpowiedni pakiet dla naszego komputera.)

3. Następnie uruchomić serwer: http-server [path] [options] . Ja używam polecenia : http-server -c-1

4. Pojawi nam się informacja:
  Starting up http-server, serving ./
  Available on:
  http://127.0.0.1:8080
  http://192.168.0.103:8080
  
Otwieramy przeglądarkę i wchodzimy na wybrany adres np. http://127.0.0.1:8080.

5. Następnie z listy wybieramy: airkiosk.html

6. I widzimy działającą stronę. Uruchomienie serwera pozwala na wyświetlenie produktów w karuzeli w Airkiosku. Dzięki temu nie wyświetla się nam informacja o CORS. 