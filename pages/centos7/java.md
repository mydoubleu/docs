# Java 설치

``` sh
yum -y install java-11-openjdk java-11-openjdk-devel
java -version
```

설치한 버전으로 나오지 않는 경우
``` sh
update-alternatives --config java
update-alternatives --config javac
```