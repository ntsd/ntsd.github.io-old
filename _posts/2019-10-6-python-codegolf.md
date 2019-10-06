---
layout: post
title:  "Python Code Golf 101"
date:   2019-10-6 12:30:54
subtitle: "An simple tricks for code golf in Python "
author: "ntsd"
catalog: true
categories:
    - Programming
header-img: "../img/in-post/post-code-golf.jpg"
tags:
    - programming
    - python
    - code golf
published: true
---

## Python Code golf

### Operator

#### And operator

``` Python
if a and b:
if a*b:

if i==4 and j==4:
if i==4and j==4:
if(i,j)==(4,4):
if i==j==4:
```

#### Increment or decrement 1 step

``` Python
c/(n-1)
c/~-n

c/(n+1)
c/-~n
```

#### While n!=1

``` Python
while n!=1:
while n-1:
while~-n:
```

### Type

#### Convert integer to string

``` Python
str(n)
`n`
```

#### Join list of string or integer

``` Python
L=['a', 'b', 'c']
''.join(L)
`L`[2::5]

L=[1, 2, 3]
`L`[1::3]
```

### Iterable

#### List of range

``` Python
L=list(range(10))
*L,=range(10)
```

#### Get last and frist element from a list

``` Python
e=L[-1]
*_,e=L

e=(L)[0]
e,*_=L
```

#### Append and Extend to list

``` Python
L.append(e)  
L+=e,

L.extend(e)
L+=e
```

#### For in range

``` Python
for i in range(x):pass

# if x less than 4
for x in 0,1,2:pass

# if don't use i
for _ in[0]*x:pass

# for use twice
r=0,
for _ in r*x:pass
for _ in r*-~x:pass

# use exec with multiply string
exec'pass;'*x
```

#### Check element in iterable

``` Python
if e in S
if{e}&S
```

#### Reverse List

``` Python
L[::-1]
```

#### Check negative integer in list

``` Python
min(L)<0
'-'in`L`
```

### Iterator & Iterator

#### Unpack generator

``` Python
set(G)
{*G}

list(G)
[*G]
*L,=G

tuple(G)
(*G,)
T=*G,
```

### Others

#### Import when use once

``` Python
import itertools
itertools.groupby()
__import__("itertools").groupby()
```

### Reference

- [https://codegolf.stackexchange.com/questions/54/tips-for-golfing-in-python](https://codegolf.stackexchange.com/questions/54/tips-for-golfing-in-python)
