# HTTPS 설정

## keystore 생성
``` sh
openssl pkcs12 -export -in fullchain.pem -inkey privkey.pem -out keystore.p12 -name name -CAfile chain.pem -caname root
```
   
## ssl 설정
```
server.ssl.enabled=true
server.ssl.key-store=/opt/cert/keystore.p12
server.ssl.key-store-type=PKCS12
server.ssl.key-store-password=111qqq@@@
server.ssl.key-alias=name
```