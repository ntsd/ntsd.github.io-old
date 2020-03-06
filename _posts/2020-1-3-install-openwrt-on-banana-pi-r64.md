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

## Hardware Requirements

- Banana Pi R64
- MicroSD Card
- MicroSD Card Reader
- USB to UART

## Preparation

### 1. Install USB to UART Driver

Just follow this link if you're using FTDI

https://learn.sparkfun.com/tutorials/how-to-install-ftdi-drivers/all

here is for CP2102

https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers

### 2. Terminal software for serial

you can use whatever serial console Putty, screen, minicom

for this tutorial I use `screen`

### 3. Download image

#### SD card image

https://drive.google.com/open?id=1Ap7lt-pjpG-pAOAEqpH13-SMOSkRkZI0

#### eMMC all-in-one single image

includes GPT, atf, u-boot, and linux kernel image

https://drive.google.com/open?id=1w8kO3klbPfdHK6lTI8Ub8sR_7ViISORM

#### eMMC preloader

https://drive.google.com/open?id=1Fy__GpNSWRcITEmzH4Z_jxnjrCS3BpQJ

## Setup boot from eMMC

### Write SD card image into SD card

``

### Run TFTP server

You can your system TFTP Server but for easy on and off the service so I use 3rd party TFTP Server.

#### TFTP server

you can download here http://ww2.unime.it/flr/tftpserver/

#### MacOS build-in tftp (optional)

If you don't like to install 3rd party software you can use system TFTP Service

``` shell
sudo launchctl load -F /System/Library/LaunchDaemons/tftp.plist

sudo launchctl start com.apple.tftpd

cd /var/tftpboot touch # make initial tftp directory

chmod 777 /var/tftpboot # change mode your directory to allow other users to read and write files
```

### Connect to board using serial

use uart 115200 baud for Bananapi r64

`sudo screen /dev/cu.usbserial-A50285BI 115200`

replace `cu.usbserial-A50285BI` with your serial driver

### set u-boot env

``` Shell
setenv kernel_filename preloader_emmc.bin
setenv ipaddr 192.168.1.126 # your bpi ip address
setenv serverip 192.168.1.1 # your tfto server
setenv netmask 255.255.255.0
saveenv
```

load ROM to address 1080000
`tftp 1080000 preloader_emmc.bin`

`printenv`

## Build your OpenWRT image

### Preparation to build openwrt image

#### Setup MacOSX as an OpenWrt build environment

follow https://openwrt.org/docs/guide-developer/buildroot.exigence.macosx

#### Install OpenWrt Buildroot

follow https://openwrt.org/docs/guide-developer/buildroot.exigence.macosx

For me, I use OSX 10.15 but I set it to 10.14

``` shell
MACOSX_DEPLOYMENT_TARGET=10.14

brew install coreutils diffutils findutils gawk gnu-getopt gnu-tar grep wget quilt xz
```

### Build OpenWRT Image for MT7622

#### Clone OpenWRT project

`git clone https://github.com/openwrt/openwrt.git`

#### Set parametres

Target System: MediaTek Ralink ARM
Subtarget: MT7622
Target Profile: Banana Pi R64

``` shell
cd openwrt

./scripts/feeds update -a
./scripts/feeds install -a

make menuconfig
```

#### Built OpenWRT image

`make`

## References
- http://wiki.banana-pi.org/Banana_Pi_BPI-R64#Release
- http://forum.banana-pi.org/t/bpi-r64-loading-openwrt-built-files-into-the-board/9960
- http://forum.banana-pi.org/t/bpi-r64-quick-start-boot-from-emmc/9809
- https://openwrt.org/docs/guide-developer/
