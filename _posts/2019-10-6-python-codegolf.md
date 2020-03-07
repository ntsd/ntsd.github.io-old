---
layout: post
title:  "Python Code Golf 101"
date:   2019-10-6 12:30:54
subtitle: "simple tricks to code-golf in Python"
author: "ntsd"
catalog: true
categories:
    - Programming
header-img: "../img/in-post/2019-10-6-python-codegolf/post-code-golf.jpg"
tags:
    - programming
    - python
    - code-golf
published: true
---

## Python Code golf

### Operator

#### Negating Boolean

``` Python
if not C:
if C<1:
if~-C:
```

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

#### shorter than the list selection

``` Python
[0,y][b] -> y*b
[1,y][b] -> y**b
[x,1][b] -> b or x
[x,x+1][b] -> x+b
[x,x-1][b] -> x-b
[1,-1][b] -> 1|-b
[x,~x][b] -> x^-b
```

#### Ceil and Floor

``` Python
math.floor(n)
n//1

math.ceil(n)
-(-n//1)
```

### Types

#### Check type of a variable

``` Python
x*0is 0 # integer
x*0=="" # string
x*0==[] # array
```

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

#### List all substrings

``` Python
# with repeat
f=lambda s:[*s]and[s]+f(s[1:])+f(s[:-1])

# avoid repeat
f=lambda s:{*s}and{s}|f(s[1:])|f(s[:-1])
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
L.reverse()
L[::-1]
```

#### Check negative integer in list

``` Python
min(L)<0
'-'in`L`
```

#### Checking the length of a list

``` Python
a==[] # a is empty
[]==a # for [] in the front and reduce 1 space
a # a is not empty
a>a[:i] # len(a) < i
```

#### Copy/Clone a list

``` Python
a=x[:]
b=[*x]
c=x*1
```

#### Multiple if statements in comprehensions

``` Python
[a for a in 'abc'if cond1()and cond2()or cond3()and cond4()and cond5()]
[a for a in 'abc'if cond1()if cond2()or cond3()if cond4()if cond5()]
```

#### Split into chunks

``` Python
l=(n for n in range(18))
zip(*[l]*4)
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

#### Multiline input to list

``` Python
list(sys.stdin.readlines())

eof='' # End of line you want to stop
list(iter(input,eof))
```

#### Import when use once

``` Python
import itertools
itertools.groupby()

__import__("itertools").groupby()
```

#### Helper prime functions

``` Python
# Function                                                   Output of f(360)
f=lambda n,i=2:n//i*[0]and[f(n,i+1),[i]+f(n//i)][n%i<1]      # [2, 2, 2, 3, 3, 5] (slow!)
f=lambda n,i=2:n//i*[0]and f(n,i+1)if n%i else[i]+f(n//i)    # [2, 2, 2, 3, 3, 5]
f=lambda n,i=2:n//i*[0]and(n%i and f(n,i+1)or[i]+f(n//i))    # [2, 2, 2, 3, 3, 5]
f=lambda n,i=2:n<2and{1}or n%i and f(n,i+1)or{i}|f(n//i)    # {1, 2, 3, 5}
f=lambda n,i=2:n<2and{i}or n%i and f(n,i+1)or{i}|f(n//i,i)  #*{2, 3, 5}
f=lambda n,i=2:n//i and[f(n,i+1),i+f(n//i)][n%i<1]           # 2+2+2+3+3+5 (slow!)
f=lambda n,i=2:n//i and f(n,i+1)if n%i else i+f(n//i)        # 2+2+2+3+3+5
f=lambda n,i=2:n//i and(n%i and f(n,i+1)or i+f(n//i))        # 2+2+2+3+3+5
f=lambda n,i=1,p=1:n*[0]and p%i*[i]+f(n-p%i,i+1,p*i*i)     # first n primes
f=lambda n,i=1,p=1:n*[0]and p%i*[i]+f(n-1,i+1,p*i*i)       # primes <= n
f=lambda n,i=1,p=1:n//i and p%i*i+f(n,i+1,p*i*i)            # sum of primes <= n
f=lambda n,i=1,p=1:n//i and p%i+f(n,i+1,p*i*i)              # count primes <= n
f=lambda n,i=1,p=1:n and-~f(n-p%i,i+1,p*i*i)               # nth prime
f=lambda n:all(n%m for m in range(2,n))                    #*is n prime? (not recursive)
f=lambda n:1>>n or n*f(n-1)                                # factorial
f=lambda n:sum(k//n*k%n>n-2for k in range(n*n))             # totient phi(n) (not recursive)
f=lambda n:[k//n for k in range(n*n)if k//n*k%n==1]          # coprimes up to n (not recursive)
```

### Reference

- [https://codegolf.stackexchange.com/questions/54/tips-for-golfing-in-python](https://codegolf.stackexchange.com/questions/54/tips-for-golfing-in-python)

- [https://noe.mearie.org/python_code_golfing_tips/](https://noe.mearie.org/python_code_golfing_tips/)
