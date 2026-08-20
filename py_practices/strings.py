#!/usr/bin/env python

msg = 'It\'s a sunny day'
quote = "She said, \"Hello!\""

my_str = 'HelLo WoRld'
my_str_1 = 'Hello'
my_str_2 = "World"
name = 'John Doe'
age = 26

str_plus_str = my_str_1 + ' ' + my_str_2
print(str_plus_str) # Hello World

sound = 'ha'
repeated_sound = sound * 3
print(repeated_sound) # hahaha

name_and_age = name + str(age)
print(name_and_age) # John Doe26

name_and_age = f'My name is {name} and I am {age} years old'
print(name_and_age) # My name is John Doe and I am 26 years old

print("Hello" in quote) # True
print("B" in msg) # False
print(msg, len(msg)) # 16
print(msg[3]) # s 
print(msg[-2]) # a
print(msg[0:6]) 
print(msg[:6]) # same result
print(msg[0:])
print(msg[2:7:3]) # 'a
print(my_str[::-1]) # dlrow olleH
# print(msg[start:stop:step?]) 

# string methods 
print(my_str.upper())
print(my_str.lower())