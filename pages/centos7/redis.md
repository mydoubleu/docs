# Redis 설치

``` sh
yum install epel-release yum-utils
yum install http://rpms.remirepo.net/enterprise/remi-release-7.rpm
yum-config-manager --enable remi
yum install redis
vi /etc/redis.conf
```
```
bind * -::*
requirepass [PASSWORD]
appendonly yes
```
``` sh
systemctl enable redis
systemctl start redis
```