# Tomcat 설치

## 설치 및  설정
``` sh
useradd -m -U -d /opt/tomcat -s /bin/false tomcat
cd /opt/tomcat
wget --no-check-certificate https://dlcdn.apache.org/tomcat/tomcat-9/v9.0.58/bin/apache-tomcat-9.0.58.tar.gz
tar -zxvf apache-tomcat-9.0.58.tar.gz
ln -s apache-tomcat-9.0.58 latest
chown -R tomcat:tomcat /opt/tomcat
vi /etc/systemd/system/tomcat.service
```
```
# Systemd unit file for tomcat
[Unit]
Description=Apache Tomcat Web Application Container
After=syslog.target network.target

[Service]
Type=forking

User=tomcat
Group=tomcat

WorkingDirectory=/opt/tomcat/latest

#Environment=JAVA_opt=/usr/jre
Environment="JAVA_OPTS=-Djava.security.egd=file:/dev/./urandom"
Environment=CATALINA_BASE=/opt/tomcat/latest
Environment=CATALINA_HOME=/opt/tomcat/latest
Environment=CATALINA_PID=/opt/tomcat/latest/temp/tomcat.pid
Environment='CATALINA_OPTS=-server -Xms1024M -Xmx1024M -XX:NewRatio=2'

ExecStart=/opt/tomcat/latest/bin/startup.sh
ExecStop=/opt/tomcat/latest/bin/shutdown.sh

UMask=0007
RestartSec=10
Restart=always

[Install]
WantedBy=multi-user.target
```
``` sh
systemctl enable tomcat
systemctl start tomcat
```

## 프록시 설정
프록시 혹은 로드밸런서가 있는 경우 server.xml의 Engine > Host 아래에 다음 추가
```
<Valve className="org.apache.catalina.valves.RemoteIpValve"
            internalProxies="192\.168\.0\.10|192\.168\.0\.11"
            remoteIpHeader="x-forwarded-for"
            proxiesHeader="x-forwarded-by"
            protocolHeader="x-forwarded-proto" />
```

## 방화벽 설정
``` sh
firewall-cmd --zone=public --permanent --add-port=8080/tcp
firewall-cmd --reload
```
