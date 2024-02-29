
## Api docs url

```bazaar
http://localhost:5000/api/docs
```


### Create Containers

```bash
$ make compose
```

### .env.development
```bazaar
#server
PORT=5000
URL_SERVER=http://localhost

#DB
DB_NAME=cinema
DB_USER=root
DB_PASSWORD=root
DB_HOST=localhost
DB_PORT=5432

#JWT
JWT_ACCESS_SECRET=qrUFW323rgrth43fewpo
JWT_REFRESH_SECRET=qrfruwgtiekp3236o
EXPIRES_IN_AT=15m
EXPIRES_IN_RT=7d
```
