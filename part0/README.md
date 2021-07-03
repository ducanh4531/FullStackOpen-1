## 0.4: new note

```
note over browser:
submit button is clicked
end note

browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
server-->browser: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: main.js

note over browser:
browser starts executing js-code
that requests JSON data from server 
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{content: "sd", date: "2021-07-02T18:39:47.992Z"},…]

note over browser:
browser executes the event handler
that renders notes to display
end note
```

## 0.5: Single page app

```
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
server-->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server-->browser: spa.js

note over browser:
browser starts executing js-code
that requests JSON data from server 
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{content: "sd", date: "2021-07-02T18:39:47.992Z"},…]

note over browser:
browser executes the event handler
that renders notes to display
end note
```

## 0.6: New note

```
note over browser:
submit button is clicked
end note

browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

note over server:
server accepts the new data
and adds it to the list
```