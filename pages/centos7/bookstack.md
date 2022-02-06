# Bookstack 설치 (Docker)
<https://www.bookstackapp.com/docs/admin/installation/#docker>
<https://github.com/linuxserver/docker-bookstack>

설치 전에 MariaDB에서 bookstack database/user 생성

``` sh
mkdir /opt/bookstack
docker run -d \
  --name=bookstack \
  -e PUID=1000 \
  -e PGID=1000 \
  -e APP_URL=https://bookstack.woojuin.net \
  -e DB_HOST=192.168.78.10 \
  -e DB_USER=bookstack \
  -e DB_PASS=bookstack \
  -e DB_DATABASE=bookstack \
  -p 6875:80 \
  -v /opt/bookstack:/config \
  --restart unless-stopped \
  ghcr.io/linuxserver/bookstack
```
  
초기 아아디 // 비밀번호  
admin@admin.com // password

회원가입 허용: Settings > Registration

방화벽 설정
``` sh
firewall-cmd --permanent --zone=public --add-port=6875/tcp
firewall-cmd --reload
```