---
title: 基于Superset搭建个人的数据分析平台
date: 2020-08-26
draft: false
tags: ["superset"]
categories: ["数据可视化"]
---

## Anaconda环境


创建虚拟环境
```
conda create -n superset python=3.6 anaconda
```
后面加上anaconda，可以不用重复安装原有依赖包

激活
```
source activate superset
```

如果要退出，就用
```
source deactivate superset
```

安装
```
pip install superset -i https://pypi.douban.com/simple
```
安装后验证
```
(superset) macdeMacBook-Air-2% conda list | grep superset
# packages in environment at /Users/Hank/opt/anaconda3/envs/superset:
superset                  0.30.1                   pypi_0    pypi
```

进入安装包
```
cd D:\Anaconda3\Lib\site-packages\superset
cd bin
python superset
fabmanager create-admin --app superset
python superset db upgrade
python superset load_examples
python superset init
python superset runserver -d
```


## Docker环境

### 安装

在镜像站中搜索与superset有关的镜像

`docker search superset`

拉取排在第一位的amancevice/superset

`docker pull amancevice/superset`

查看镜像

`docker images`

### 运行

在本地新建一个文件夹，我新建的文件夹为`D:/Data/sqlite`。稍后将这个文件夹映射给容器内的一个文件夹，让superset可以直接访问宿主机的数据文件。

需要注意的时，映射给docker容器的宿主机文件夹所在的驱动器要开启共享，可以在docker菜单中进行设置。

开启docker容器内的superset应用，开启的同时进行端口映射，并挂载宿主机的数据文件目录`D:/Data/sqlite`

`docker run -d -p 8088:8088 -v D:/Data/sqlite:/home/superset amancevice/superset`

成功开启后会返回一组字符串，即容器ID

查看开启的docker应用

`docker ps`

### 初始化设置

复制容器ID，container的ID，稍后我们要在这个容器内执行一些命令来初始化superset应用。

设定用户名和密码

`docker exec -it c2fc56d845ea  fabmanager create-admin --app superset`

创建默认角色和许可

`docker exec -it c2fc56d845ea superset init`

开启

`docker exec -it c2fc56d845ea superset runserver`

打开宿主浏览器，输入`http://localhost:8088`,用刚创建的用户名和密码登陆即可

### 停止和开启superset服务

列出运行的容器，找到运行superset的容器ID `docker ps`

停止 `docker stop 容器ID`

开启 `docker start 容器ID`
