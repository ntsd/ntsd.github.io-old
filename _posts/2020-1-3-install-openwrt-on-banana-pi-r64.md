---
layout: post
title:  "Build OpenWRT image into Banana Pi R64"
date:   2020-1-3 12:30:54
subtitle: "Build OpenWRT image into Banana Pi R64"
author: "ntsd"
catalog: true
categories:
    - router
header-img: "../img/in-post/post-code-golf.jpg"
tags:
    - openwrt
    - router
    - three.js
published: false
---

## Requirements hardware

- Banana Pi R64
- MicroSD Card
- MicroSD Card Reader
- USB to UART

## Preparation

### 1. Setup MacOSX as an OpenWrt build environment

follow https://openwrt.org/docs/guide-developer/buildroot.exigence.macosx

### 2. Install OpenWrt Buildroot

follow https://openwrt.org/docs/guide-developer/buildroot.exigence.macosx

For me, I use OSX 10.15 but I set it to 10.14

``` shell
MACOSX_DEPLOYMENT_TARGET=10.14

brew install coreutils diffutils findutils gawk gnu-getopt gnu-tar grep wget quilt xz

```

### 2. Install USB to UART Driver

Just follow these step if you're using FTDI

https://learn.sparkfun.com/tutorials/how-to-install-ftdi-drivers/all

here is for CP2102

https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers

### 3. Terminal software for serial

you can use whatever Putty, screen, minicom but I use `screen`

## 

write SD card image

use uart 115200 baud

`
sudo screen /dev/cu.usbserial-A50285BI 115200
`

TFTP server

http://ww2.unime.it/flr/tftpserver/

set u-boot env

```
setenv kernel_filename preloader_emmc.bin
setenv ipaddr 192.168.1.126
setenv serverip 192.168.1.1
setenv netmask 255.255.255.0
saveenv
```

load rom to address 1080000
`tftp 1080000 preloader_emmc.bin`

`printenv`


## Build Image step

### 1. Build OpenWRT Image for MT7622

#### 1.1 Cloned OpenWRT project

`git clone https://github.com/openwrt/openwrt.git`

#### 1.2 Set parametres

Target System: MediaTek Ralink ARM
Subtarget: MT7622
Target Profile: Banana Pi R64

``` shell
cd openwrt

./scripts/feeds update -a
./scripts/feeds install -a

make menuconfig
```

#### 1.3 Built OpenWRT image

`make`

## References

- https://openwrt.org/docs/guide-developer/
- http://forum.banana-pi.org/t/bpi-r64-loading-openwrt-built-files-into-the-board/9960
- http://forum.banana-pi.org/t/bpi-r64-quick-start-boot-from-emmc/9809
  