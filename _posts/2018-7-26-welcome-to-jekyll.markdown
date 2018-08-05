---
layout: post
title:  "hello jekyll!"
date:   2018-07-26 15:14:54
subtitle: " \"Hello World, Hello Blog\""
author: "ntsd"
categories: Jekyll
catalog: true
tags:
    - jekyll
    - general
---

## General
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

```ruby
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
```

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help

Block Mathjax 

$$
f(x) = ax + b
$$

Inline Mathjax $a \neq b$


## Foreword

Hux's blog is just that open.

[Skip nonsense, see technical implementation directly] (#build) 



In 2015, Hux finally had a place to write something.


As a programmer, blogs are too boring if they are hung on a popular blogger. First, I feel that most of the blog services are too ugly, and the second is that it is not easy to customize. Before, because I was too lazy and didn't toss, the result was that I didn't even have a place to write a blog.

After playing for a while, the pleasure of answering questions ignited my impulse to open a blog. The previous [personal website] (http://huangxuan.me/portfolio) is in the form of a portfolio (now integrated), it is not suitable for writing blog posts, don't do it all, spend one day!


<p id = "build"></p>
---

## 正文

Let's talk about the technical details of building this blog.  

Just before, I have been paying attention to the technical solution of [GitHub Pages] (https://pages.github.com/) + [Jekyll] (http://jekyllrb.com/) Quick Building Blog, which is very easy and fashionable.

The advantages are obvious:

* **Markdown** brings an elegant writing experience
* Very familiar Git workflow, **Git Commit ie Blog Post**
* Utilize the domain name of GitHub Pages and free unlimited space, no need to toss the host
	* If you need to customize the domain name, you only need to change the DNS and add a CNAME. 
* Jekyll's customization is very easy, basically a template engine


The biggest shortcoming that might have been felt was that GitHub was too slow to visit in the country, so the next day I went to GitCafe (Chinese GitHub Copy, now acquired by Coding) and migrated a [mirror] (http://huxpro.coding. Me) came out, the result is still very slow.

Brother is a good front end! If you disconnect the Chrome DevTool and check the network request, it turns out that **pending is on Google Fonts**, and the page rendering has been blocked until the request times out. No wonder so slow.  
Reluctantly cut love, I had to go to Web Fonts (there can only be fallback when I see the timeout), and it turns out that it is normal, and GitHub and GitCafe do not feel the obvious speed difference, although the ping value of github is obviously higher. Some, up to 300ms, so I optimized the speed with DNSPOD.



---

There is no pit in the process of configuration, basically the process of Git, quite convenient

The big Jekyll theme directly forks the Clean Blog (this theme is also quite famous, so I won't go into details. The only drawback is probably that there is no tag support, so I added it.)

The local debugging environment needs `gem install jekyll`, and the source of rubygem is actually walled... Later, it was successfully changed to the mirror source of my big Taobao.

Theme's CSS is customized based on Bootstrap. The unsatisfactory place is directly changed in Less (usually more accustomed to SCSS), but in fact, I always think that Bootstrap's experience on the mobile side is quite general, than I am. The team CSS framework that Taobao participated in is much worse...** So for the experience, I also made up a lot of CSS.

In the end, it entered the stage of time-consuming and long-lasting ** drawing and writing, and it was considered to be on the right track of **blogging **, because it was like Hack Day's way to take this station, so tossing and tossing It was over in the middle of the night.

The next day, considering the rendering of Chinese fonts, fork the `font` CSS of [Type is Beautiful] (http://www.typeisbeautiful.com/), adjust the font size, adapt to the slag rendering of Win, mix Chinese and English The effect is much better.


## Postscript

Looking back at the birth of this blog is purely for personal interest. After answering and getting a certain star on the relevant issues, I decided to maintain this blog theme as a small open source project.

After experiencing the transformation of v1.0 - v1.5, this blog theme has become more complete, not only increasing the optimization of many UI layers (opinionated); at the code level, the richer configuration items also make this theme have better. Flexibility and expandability. As an open source project, I am also actively improving the documentation and solving the issue.

If you happen to be here, I hope you can also enjoy this blog theme.





![lisa](/img/lisa_png_by_lexmimieux-dampnyi.png)

