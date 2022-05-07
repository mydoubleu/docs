# MariaDB 설치
<https://mariadb.org/download/>

## 저장소 설정
``` sh
vi /etc/yum.repos.d/MariaDB.repo
```
```
# MariaDB 10.5 CentOS repository list - created 2021-09-08 11:00 UTC
# https://mariadb.org/download/
[mariadb]
name = MariaDB
baseurl = https://mirror.yongbok.net/mariadb/yum/10.5/centos7-amd64
gpgkey=https://mirror.yongbok.net/mariadb/yum/RPM-GPG-KEY-MariaDB
gpgcheck=1
```

## 설치 및 설정
``` sh
yum -y install MariaDB-server MariaDB-client
vi /etc/my.cnf.d/server.cnf
```
서버 사양에 따라 설정값 변경
```
[mysqld]
max_connections=250
innodb_buffer_pool_size=20480M
innodb_log_file_size=256M
innodb_log_files_in_group=3
innodb_flush_log_at_trx_commit=2
character-set-server=utf8mb4
collation-server=utf8mb4_unicode_ci
event_scheduler=ON
```
``` sh
vi /etc/my.cnf.d/mysql-clients.cnf
```
```
[mysql]
default-character-set=utf8mb4
```
``` sh
systemctl enable mariadb
systemctl start mariadb
mysql_secure_installation
mysql -u root -p
```
아래 쿼리에서 작업 PC의 IP로 변경
``` sql
create user 'root'@'192.168.0.2' identified by 'temp';
grant all privileges on *.* to 'root'@'192.168.0.2' with grant option; -- identified by 'temp';
flush privileges;
\q
```
HeidiSQL 등의 툴로 접속 후 비밀번호 변경

## data 디렉토리 이동
### /data 아래로 옮기는 경우
``` sh
systemctl stop mariadb
cd /var/lib
mv mysql /data/
ln -s /data/mysql mysql
systemctl start mariadb
```
### /home 아래로 옮기는 경우
``` sh
systemctl stop mariadb
cd /var/lib
mv mysql /home/
ln -s /home/mysql mysql
vi /usr/lib/systemd/system/mysqld.service
```
`ProtectHome=false`로 수정
```
systemctl daemon-reload
systemctl start mariadb
```

## 방화벽 설정 (Optional)
``` sh
firewall-cmd --permanent --zone=public --add-service=mysql
firewall-cmd --reload
```

## 파티션 생성
``` sql
ALTER TABLE [TABLE_NAME] PARTITION BY RANGE (TO_DAYS(dtm)) (
   PARTITION p202010 VALUES LESS THAN (TO_DAYS('2020-11-01')) ENGINE = INNODB,
   PARTITION p202011 VALUES LESS THAN (TO_DAYS('2020-12-01')) ENGINE = INNODB,
   PARTITION p202012 VALUES LESS THAN (TO_DAYS('2021-01-01')) ENGINE = INNODB,
   PARTITION pMax VALUES LESS THAN MAXVALUE ENGINE = INNODB
);
```

## 파티션 추가
``` sql
ALTER TABLE [TABLE_NAME] REORGANIZE PARTITION pMax INTO (
   PARTITION p202201 VALUES LESS THAN (TO_DAYS('2022-04-01')) ENGINE = INNODB,
   PARTITION p202204 VALUES LESS THAN (TO_DAYS('2022-07-01')) ENGINE = INNODB,
   PARTITION p202207 VALUES LESS THAN (TO_DAYS('2022-10-01')) ENGINE = INNODB,
   PARTITION p202210 VALUES LESS THAN (TO_DAYS('2023-01-01')) ENGINE = INNODB,
   PARTITION pMax VALUES LESS THAN MAXVALUE ENGINE = INNODB
);
```
