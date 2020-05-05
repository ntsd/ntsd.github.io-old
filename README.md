# NTSD Blog

## Post Format

``` yml
---
layout: post
title:  "hello jekyll!"
date:   2018-07-26 15:14:54
subtitle: " \"Hello World, Hello Blog\""
author: "ntsd"
categories: jekyll
tags:
    - jekyll
    - general
comments: false # to close disqus comment of this post
catalog: true
multilingual: true # for multiple language post
---
```

## Page format

``` yml
---
layout: page
title: "Categories"
description: "Categories of this site" # if none will random quotes in site.quotes replace
header-img: "../img/about-bg.jpg"
permalink: /categories
catalog: true # page catalog will remove sidebar
multilingual: false # for multiple language page
---
```

## Issues

### cannot load such file -- jekyll-paginate

Executing this command to install this plugin:

``` bash
gem install jekyll-paginate
```

This blog started in Jekyll 2 times when `jekyll-paginate` is standard. With Jekyll 3, it's a plugin we included in `_config.yml`.

### Preconnect Disqus

``` TXT
Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins. Learn more.
URL
Potential Savings
https://x.disq.us
640 ms
https://match.adsrvr.org
330 ms
https://cm.g.doubleclick.net
330 ms
https://fcmatch.google.com
330 ms
https://fcmatch.youtube.com
310 ms
https://c.disquscdn.com
300 ms
https://disqus.com
300 ms
```

## License

Apache License 2.0. Copyright (c) 2018 Jirawat Boonkumnerd

NTSD Blog is forked from [Huxpro](https://github.com/Huxpro/huxpro.github.io)

Hux Blog is derived from [Clean Blog Jekyll Theme (MIT License)](https://github.com/BlackrockDigital/startbootstrap-clean-blog-jekyll/)
Copyright (c) 2013-2016 Blackrock Digital LLC.
