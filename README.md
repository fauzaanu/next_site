# Personal Portfolio Website Made Using NextJS

> Also first NextJS Project

> Also my very first interaction with NGINX

## Deployment

- First deployed on vercel but to get some NGINX experience it is currently on a Digital Ocean Droplet
- SSL seemed so hard to setup when I was doing Django but it seems very simple

## Deployment Process

1. Make a droplet
2. Install nodejs, npm, nginx, snap, certbot

```
sudo apt install npm
sudo apt install nodejs
sudo apt install nginx
sudo snap install core; sudo snap refresh core
```

---

## If snap is not already installed:

```
sudo apt install snapd
```

and then run the snap specefic command:

```
sudo snap install core; sudo snap refresh core
```

---

3. git clone the repo
4. cd to the directory

```
npm run build
```

5. Edit nginx config file (name does not matter)

```
vim /etc/nginx/conf.d/your-site.conf
```

6. The config file should be this

```config
server {
    server_name fauzaanu.com; #site address
location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
```

7. install process manager for node

```
npm i -g pm2
```

8. Handle SSL Certificate Stuff

```
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
sudo certbot --nginx
```

9. After certbot stuff done:

```
systemctl restart nginx
```

9. Start pm2 process i guess: (not sure why I need this yet: or do I?)

```
pm2 start npm --name "next" -- start
```

10. Hope it works
