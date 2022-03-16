# SSH tunneling 설정

## 클라이언트에서 SSH Key 생성
``` sh
ssh-keygen -t rsa
```
자동 로그인을 위해 passphrase는 생략


## 생성된 public key(`~/.ssh/id_rsa.pub`)를 SSH 서버에 등록
서버의 `~/.ssh/authorized_keys` 파일에 public key 내용을 추가


## 클라이언트에 터널링 서비스 생성
``` sh
vi /etc/systemd/system/tunneling.service
```

```
[Unit]
Description=Tunneling
After=syslog.target network.target

[Service]
ExecStart=/usr/bin/ssh [USER]@[SSH SERVER] -p [SSH PORT] -N -R [SSH SERVER]:[REMOTE PORT]:[DESTINATION]:[DESTINATION PORT]

Restart=always
RestartSec=120

[Install]
WantedBy=multi-user.target
```
