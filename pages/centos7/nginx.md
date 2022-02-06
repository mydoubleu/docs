# Nginx 설치
<https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/#prebuilt_redhat>  
<http://nginx.org/en/linux_packages.html#RHEL-CentOS>

## 저장소 설정
``` sh
vi /etc/yum.repos.d/nginx.repo
```
```
[nginx]
name=nginx repo
baseurl=https://nginx.org/packages/mainline/centos/7/$basearch/
gpgcheck=0
enabled=1
```

## 설치 및 설정
``` sh
yum -y install nginx
systemctl enable nginx
```
``` sh
vi /etc/nginx/conf.d/default.conf
```
```
server {
    listen 80;
    server_name *.woojuin.net;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name www.woojuin.net;
    client_max_body_size 0;
    ssl_certificate /etc/nginx/certs/woojuin.net/fullchain.pem;
    ssl_certificate_key /etc/nginx/certs/woojuin.net/woojuin.net.key;
    #ssl_dhparam /etc/nginx/cert/dhparam.pem;
    #ssl_session_cache shared:SSL:10m;
    #ssl_session_timeout 10m;
    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_ciphers EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH;
    ssl_prefer_server_ciphers on;
    #add_header Strict-Transport-Security "max-age=31536000";
    #add_header X-Content-Type-Options nosniff;

    location / {
        proxy_pass https://192.168.0.2:8006;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # Websocket support
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

proxy_pass 사용시 warn 발생시 http 안에 추가
``` sh
vi /etc/nginx/nginx.conf
```
```
    # buffer size
    proxy_buffering   on;
    proxy_buffer_size    1024k;
    proxy_buffers        1024   1024k;
    client_body_buffer_size 1024k;
    proxy_busy_buffers_size 1024k;
```
``` sh
systemctl restart nginx
```

로컬로 프록시 하는 경우 퍼미션 에러 날때 아래 실행
``` sh
setsebool -P httpd_can_network_connect 1
```

## 방화벽 설정 (Optional)
``` sh
firewall-cmd --permanent --add-service=http
firewall-cmd --permanent --add-service=https
firewall-cmd --reload
```