---
title: "GUI Tkinter登陆"
date: 2020-09-01
draft: false
tags: ["tkinter"]
categories: ["Python系列"]
---

## 介绍

```python
from tkinter import Tk

#1.显示窗口
my_window=Tk()

#标题
my_window.title("我的窗口")

#设置窗口居中
#获取整个屏幕大小
screen_width, screen_height = my_window.maxsize()

#设置窗口大小
width=240
height=480
# align_str="%dx%d" % (width, height)
align_str="%dx%d+%d+%d" % (width, height,(screen_width-width)/2,(screen_height-height)/2)

#设置窗口的宽、高
my_window.geometry(align_str)

#设置窗口是否可以缩放 True表示可缩放 False表示不可缩放
my_window.resizable(width=True, height=False)

my_window.mainloop()
```

## 案例：登陆
```python
#登录
from tkinter import Tk,messagebox,Toplevel
#使用相关的组件
import tkinter as tk

#1.窗体
my_window=Tk()
my_window.title("登录")
#设置窗口大小并居中显示
#屏幕的宽度、高度
screen_width,scree_height=my_window.maxsize()

#窗体的宽度、高度
width=250
height=200

#设置窗体在屏幕中央显示
align_str="%dx%d+%d+%d" % (width,height,(screen_width-width)/2,(scree_height-height)/2)

my_window.geometry(align_str)

#设置宽高不可缩放
my_window.resizable(width=False, height=False)

#添加标签
user_name_label=tk.Label(my_window,text='账号',font=("FangSong",14))
user_name_label.place(x=30,y=30)
user_pwd_label=tk.Label(my_window,text="密码",font=("FangSong",14))
user_pwd_label.place(x=30,y=80)

#输入框
#账号输入
user_name_text=tk.StringVar()
user_name_text.set("输入账号")
user_name_entry=tk.Entry(my_window,textvariable=user_name_text,font=("FangSong",14),width=15)
user_name_entry.place(x=80,y=30)

#密码输入
user_pwd_text=tk.StringVar()
user_pwd_text.set("输入密码")
user_pwd_entry=tk.Entry(my_window,textvariable=user_pwd_text,font=("FangSong",14),width=15)
user_pwd_entry.place(x=80,y=80)

#数据读取
def read_data():
    with open("data.txt","r") as f:
        rows=f.readlines()
        user_info_dict={}
        #字典数据封装
        for row in rows:
            dict_list=row.strip().split(":")
            user_info_dict[dict_list[0]]=dict_list[1]
        f.close()
        return user_info_dict

#登录按钮事件处理回调
def user_login():
    # 获取用户输入账号和密码
    name=user_name_text.get()
    pwd=user_pwd_text.get()
    user_dict=read_data()
    if name!="" and pwd!="":
        if name in user_dict.keys():
            if pwd==user_dict[name]:
                # print("ok")
                messagebox.showinfo(title="成功",message="欢迎"+name)
            else:
                # print("密码不正确")
                messagebox.showerror(title="错误",message="密码不正确")
        else:
            # print("用户不存在")
            messagebox.showerror(title="错误",message="用户不存在")
    else:
        # print("账号、密码不能为空")
        messagebox.showerror(title="错误",message="用户名、密码不能为空")

#弹出注册窗体
def pop_win():
    top=Toplevel()
    top.title("注册")
    top.geometry("250x200")
    #账号、密码、确认密码、注册按钮
    #gird网格布局方式
    tk.Label(top,text="账号",width=10).grid(row=1,column=0)
    user_name=tk.StringVar()
    tk.Entry(top,textvarilable=user_name,width=15).grid(row=1,column=1)

    tk.Label(top,text="密码",width=10).grid(row=2,column=0)
    user_pwd=tk.StringVar()
    tk.Entry(top,textvarilable=user_pwd,width=15).grid(row=2,column=1)

    tk.Label(top,text="确认密码",width=10).grid(row=3,column=0)
    user_confirm_pwd=tk.StringVar()
    tk.Entry(top,textvarilable=user_confirm_pwd,width=15).grid(row=3,column=1)

    #注册按钮的回调函数
    def user_register():
        #获取输入框的值
        name=user_name.get()
        pwd=user_pwd.get()
        confirm_pwd=user_confirm_pwd.get()
        if pwd==confirm_pwd:
            with open("data.txt","a") as f:
                f.writelines(name+":"+pwd+"\n")
                f.flush()
                f.close()
                messagebox.showinfo(title="成功",message="注册成功!")
                #销毁窗体
                top.destroy()
        else:
            messagebox.showerror(title="错误",message="两次密码不一致")

    tk.Button(top,text="注册",width=10,command=user_register).grid(row=4,columnspan=2,pady=15)

#按钮
#登录按钮,事件处理
user_login_button=tk.Button(my_window,text="登录",font=("FangSong",14),comman=user_login)
user_login_button.place(x=30,y=130)

#注册按钮,事件处理
user_login_button=tk.Button(my_window,text="注册",font=("FangSong",14),comman=pop_win)
user_login_button.place(x=180,y=130)

my_window.mainloop()
# print(read_data())
```