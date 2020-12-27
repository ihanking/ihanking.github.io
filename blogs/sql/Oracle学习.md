---
title: Oracle学习
date: 2020-12-23
draft: false
tags: ["oracle"]
---

**mac docker环境下搭建oracle**


查找oracle `docker search oracle-12`

拉取镜像 `docker pull truevoly/oracle-12c`

`docker run -h "oraclehost" --name "oracle" -d -p 1521:1521 truevoly/oracle-12c`

终端启动容器 `docker exec -it df1a9f0b8adf /bin/bash`

登陆 Oracle 使用默认用户测试 `sqlplus system/oracle`

创建用户 `create user root identified by root; `

用户解锁 `alter user  root account unlock;`

用户创建权限 `grant create session to root;`

其他权限
```sql
GRANT CREATE USER,DROP USER,ALTER USER ,CREATE ANY VIEW , DROP ANY  VIEW,EXP_FULL_DATABASE,IMP_FULL_DATABASE, DBA, CONNECT,RESOURCE,CREATE SESSION TO root;
```

切换到新创建的用户登陆 `connect root/root;`

删除用户 `drop user root;`


