# pm2-nodejs-server

### Install PM2 Globally

```
    npm install pm2 -g
```

### PM2 Start

```
    pm2 start server.js
```

### PM2 logs

```
    pm2 logs
```

### PM2 delete

```
    pm2 delete server.js
```

### Start max process

```
    pm2 start server.js -i max
```

### Start 1 process

```
    pm2 start server.js -i 1 --watch
```

### Start without cluster

```
    pm2 start server.js --watch
```

### PM2 monitoring

```
    pm2 monit
```

### PM2 Status

```
    pm2 status
```

### PM2 Generating config ecosystem file

```
    pm2 ecosystem
```

### PM2 Start application with ecosystem config file

```
    pm2 start ecosystem.config.js
```
