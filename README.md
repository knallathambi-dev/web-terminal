# Web Terminal

## Instructions for Local run
```
> npm install
> npm run dev // dev mode

> npm start -- --port=<port> // prod mode
```

## Docker
```
> docker build -t knallathambidev/web-terminal .
> docker image ls

> docker run -d -p 8085:8081 knallathambidev/web-terminal

> docker exec -it <container id> /bin/bash

> docker ps

```