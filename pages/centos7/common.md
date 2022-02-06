# 공통 설정

## timezone
`timedatectl` 명령으로 timezone 확인 후 변경이 필요하면 아래 명령으로 변경
``` sh
timedatectl set-timezone Asia/Seoul
```

## 방화벽 설치 (Optional)
``` sh
yum -y install firewalld
systemctl enable firewalld
systemctl start firewalld
```