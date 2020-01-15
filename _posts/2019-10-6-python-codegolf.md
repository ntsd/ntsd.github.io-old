---
layout: post
title:  "Python Code Golf 101"
date:   2019-10-6 12:30:54
subtitle: "simple tricks to code golf in Python"
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

#### Increment or decrement 1 in statement

``` Python
c/(n-1)
c/~-n

c/(n+1)
c/-~n

while n-1:
while~-n:

or n+1
or-~n
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

#### 2 String same lenght or 1 lenght diff

``` Python
'ftarlusee'[C::2]
```

### Iterable

#### List of range

``` Python
L=list(range(10))
*L,=range(10)
```

#### Get last and first element from a list

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

#### Multiple numerical loops

``` Python
for i in range(m):
 for j in range(n):
  do_stuff(i,j)

for k in range(m*n):
  do_stuff(k/n,k%n)

# Three loop
for i in range(m):
 for j in range(n):
  for l in range(o):
    do_stuff(i,j,l)

for k in range(m*n*b):
  do_stuff(k/n/o,k%(n*o)/o,k%o)
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

#### Reading from stdin

``` Python
import os;A=os.read(0,9**9)
import os;A=os.read(0,99) # input is always less than 100 bytes.
```

#### Read all lines in a list

``` Python

```

#### Import when use once

``` Python
import itertools
itertools.groupby()
__import__("itertools").groupby()
```

### Reference

- [https://codegolf.stackexchange.com/questions/54/tips-for-golfing-in-python](https://codegolf.stackexchange.com/questions/54/tips-for-golfing-in-python)

- [https://noe.mearie.org/python_code_golfing_tips/](https://noe.mearie.org/python_code_golfing_tips/)
