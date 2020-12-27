---
title: "Docker学习与使用"
date: 2020-09-01
draft: false
tags: ["docker"]
---


**删除操作**

删除容器 `docker rm 容器id`

停用所有容器 `docker stop $(docker ps -q)`

删除所有容器 `docker rm $(docker ps -aq)` 

停用并删除所有容器 `docker stop $(docker ps -q) & docker rm $(docker ps -aq)`

删除镜像 `docker rmi 镜像id`

强制删除镜像 `docker image rm -f 镜像id`