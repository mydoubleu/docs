# Gitlab 설치 (Docker)
<https://docs.gitlab.com/omnibus/docker/#install-gitlab-using-docker-engine>

``` sh
// 최신 버전
docker pull gitlab/gitlab-ce:latest
// 특정 버전
docker pull gitlab/gitlab-ce:13.8.3-ce.0
```

```  sh
mkdir /opt/gitlab
docker run --detach \
  --hostname gitlab.woojuin.net \
  --publish 5859:443 --publish 5858:80 --publish 5857:22 \
  --name gitlab \
  --restart always \
  --volume /opt/gitlab/config:/etc/gitlab \
  --volume /opt/gitlab/logs:/var/log/gitlab \
  --volume /opt/gitlab/data:/var/opt/gitlab \
  gitlab/gitlab-ce:latest
```

접속 URL 설정
``` sh
vi /opt/gitlab/config/gitlab.rb
```
```
external_url 'https://gitlab.woojuin.net'
```
``` sh
docker restart gitlab
```
관리자 ID: root

방화벽 사용하는 경우
``` sh
firewall-cmd --permanent --zone=public --add-port=5859/tcp
firewall-cmd --reload
```
