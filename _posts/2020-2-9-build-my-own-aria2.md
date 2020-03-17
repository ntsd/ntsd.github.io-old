---
layout: post
title:  "Build aria2 to increment maximum connections per server"
date:   2020-2-9 12:30:54
subtitle: "Edit a line of code and recompile aria2 to increment maximum connections per server"
author: "ntsd"
catalog: true
categories:
    - Programming
header-img: "../img/in-post/2020-2-9-build-my-own-aria2/post-build-my-own-aria2.jpg"
tags:
    - Programming
    - C++
    - aria2
published: true
---

there's maximum 16 connection hard code in aria2 so when I want to split more connection I need to edit a line of code and recompile it

## Edit max connections per server

edit number arguments in NumberOptionHandler for MAX_CONNECTION_PER_SERVER in file "OptionHandlerFactory.cc"

from 16 to 64 the number is as you want.

``` c++
OptionHandler* op(new NumberOptionHandler(PREF_MAX_CONNECTION_PER_SERVER,
                                              TEXT_MAX_CONNECTION_PER_SERVER,
                                              "1", 1, 64, 'x'));
```

## Build aria 2

install following packages

- libxml2-dev
- libcppunit-dev
- autoconf (gettext)
- automake
- autotools-dev
- autopoint
- libtool

you can install my run this command

`brew install gettext automake autoconf libtool libxml2 cppunit`

if you install libxml with brew you also need to link it to /usr/local/include/

`sudo ln -s /usr/local/opt/libxml2/include/libxml2/libxml /usr/local/include/libxml`

add gettext and libxml2 to your path for me it's ~/.zshrc

``` bash
# gettext
export PATH=${PATH}:/usr/local/opt/gettext/bin

# libxml2
export PATH="/usr/local/opt/libxml2/bin:$PATH"
export LDFLAGS="-L/usr/local/opt/libxml2/lib"
export CPPFLAGS="-I/usr/local/opt/libxml2/include"
```

Generate configs

`autoreconf -i`

run config your make

`./configure`

I'm not sure about arguments I'm just using the default
if you want more details maybe just copy steps from homebrew script here <https://github.com/Homebrew/homebrew-core/blob/master/Formula/aria2.rb>

run make to generate make file

`make`

run `make check` to test all code (you can skip this step)

`make check`

run make install to generate the binary file

`make install`

then you'll get new aria2c complied in /usr/local/bin/

check by command

`ls -latr /usr/local/bin/`

make sure /usr/local/bin/ is in your path

Now test your aria2c binary file

`aria2c -k 1M -s 64 -x 64 http://ipv4.download.thinkbroadband.com/1GB.zip`

-k, --min-split-size=\<SIZE>

- minimum split size

-s, --split=\<N>

- split file to N part

-x, --max-connection-per-server=\<NUM>

- maximum number connections to one server.

You'll see the number of connections is 64

![the number of connections is 64](/img/in-post/2020-2-9-build-my-own-aria2/aria.png)

Awesome !!

## install bash-completion (Optional)

Optional, if you want to install to the other computer you can use bash-completion to use bundle script

`brew install bash-completion`

If you're using zsh add to your ~/.zshrc

``` bash
autoload -U +X compinit && compinit
autoload -U +X bashcompinit && bashcompinit
```

copy to your bash completion path

/usr/local/etc/bash_completion.d

run bash_completion

. /usr/local/etc/bash_completion

## references

- <https://github.com/aria2/aria2>
- <https://github.com/aria2/aria2/issues/580>
- <https://github.com/aria2/aria2/issues/810>
- <https://aria2.github.io/manual/en/html/README.html#how-to-build>
