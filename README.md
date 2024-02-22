
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
DB_NAME=cinema-db
DB_USER=root
DB_PASSWORD=root
DB_HOST=localhost
DB_PORT=10001

#JWT
JWT_ACCESS_SECRET=*
JWT_REFRESH_SECRET=*
EXPIRES_IN_AT=15m
EXPIRES_IN_RT=7d

#YS3C
ID_KEY_STORAGE=*
MY_SECRET_KEY=*
NAME_BUCKET=*

API_URL=http://localhost:5000
CLIENT_URL=https://localhost:3000
CLIENT_URL_FORGOT_PASSWORD=https://localhost:3000/change-password
```
