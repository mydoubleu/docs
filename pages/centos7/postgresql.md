# PostgreSQL 설치
<https://www.postgresql.org/download/linux/redhat/>

## 저장소 설정 및 설치
``` sh
yum install -y https://download.postgresql.org/pub/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm
yum install -y postgresql13-server
/usr/pgsql-13/bin/postgresql-13-setup initdb
systemctl enable postgresql-13
systemctl start postgresql-13
```

## 외부 접속 설정
``` sh
vi /var/lib/pgsql/13/data/postgresql.conf
```
```
listen_addresses = '*'
```
``` sh
vi /var/lib/pgsql/13/data/pg_hba.conf
```
```
host all all 0.0.0.0/0
```
``` sh
su - postgres -c 'psql'
```
```
ALTER USER postgres PASSWORD 'temp';
```
관리툴로 접속 후 비밀번호 변경

## 방화벽 설정
``` sh
firewall-cmd --permanent --zone=public --add-port=5432/tcp
firewall-cmd --reload
```