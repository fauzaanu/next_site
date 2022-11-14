sudo apt install npm
sudo apt install nodejs
sudo apt install nginx
vim /etc/nginx/conf.d/your-site.conf

npm i -g pm2
pm2 start npm --name "next" -- start
git clone repo
npm run build
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
sudo certbot --nginx
systemctl restart nginx
