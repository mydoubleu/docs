# Proxy 서버 사용하는 경우

```
server.tomcat.remote-ip-header=x-forwarded-for
server.tomcat.protocol-header=x-forwarded-proto
server.tomcat.internal-proxies=192\\.168\\.0\\.10|192\\.168\\.0\\.11|192\\.168\\.0\\.\\d{1,3}
```