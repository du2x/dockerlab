Docker Compose build with nginx, nodejs and Mysql images
=================

Generate nodejs app package.json:
-----
```
npm init -y
npm install
npm install express mysql
```

Build nodejs app docker image:
```
docker build -t du2xdocker/hello-nodejs . -f Dockerfile.hello_nodejs
```

Build nginx  docker image:
```
docker build -t du2xdocker/hello-nginx . -f Dockerfile.hello_nginx
```

Build and run nginx, nodejs and mysql images together within the same network:

```
docker-compose up -d
```



