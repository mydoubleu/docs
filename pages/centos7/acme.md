# 인증서 설치
<https://github.com/acmesh-official/acme.sh/wiki/>  
<https://github.com/joohoi/acme-dns>

## acme.sh 설치
``` sh
wget -O -  https://get.acme.sh | sh -s email=[EMAIL]
source ~/.bash_profile
```

## acme-dns 등록
``` sh
curl -X POST https://auth.acme-dns.io/register
```
위 명령 실행하면 아래와 같은 json이 리턴 됨
``` json
{
  "username":"...",
  "password":"...",
  "fulldomain":"...",
  "subdomain":"...",
  "allowfrom":[]
}
```
도메인 CNAME 등록 (위 결과에서 fulldomain 사용)  
_acme-challenge -> ...  
위 결과를 아래에 적용
``` sh
export ACMEDNS_UPDATE_URL="https://auth.acme-dns.io/update"
export ACMEDNS_USERNAME="..."
export ACMEDNS_PASSWORD="..."
export ACMEDNS_SUBDOMAIN="..."
acme.sh --register-account -m [EMAIL]
```

## 인증서 발급
``` sh
acme.sh --issue --force --dns dns_acmedns \
  -d woojuin.net \
  -d *.woojuin.net
```

## 인증서 설치
``` sh
acme.sh --install-cert \
  -d woojuin.net \
  --cert-file /etc/nginx/cert/woojuin.net/woojuin.net.cer \
  --key-file /etc/nginx/cert/woojuin.net/woojuin.net.key \
  --fullchain-file /etc/nginx/cert/woojuin.net/fullchain.cer \
  --reloadcmd "systemctl restart nginx.service"
```
위 명령에 설정한 경로에 인증서가 복사되고 reloadcmd가 실행 됨

## Synology DSM에 인증서 설치
SYNO_Certificate 값은 DSM에서 인증서의 Description과 동일해야 함  
비밀번호에 $가 포함된 경우 \로 escape 처리해 주어야 함
``` sh
yum install -y epel-release
yum install -y jq
export SYNO_Username="..."
export SYNO_Password="..."
export SYNO_Certificate="woojuin.net"
export SYNO_Scheme="https"
export SYNO_Hostname="192.168...."
export SYNO_Port="5001"
acme.sh --insecure --deploy -d "woojuin.net" --deploy-hook synology_dsm
```
