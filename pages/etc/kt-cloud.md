# KT Cloud

## 디스크 추가
``` sh
mkfs.ext4 /dev/xvdb
mkdir /data
mount /dev/xvdb /data
vi /etc/fstab
```
```
/dev/xvdb /data                                 ext4    defaults,nofail 0 0
```