#!/usr/bin/env python

name_str = "Venedykt"
age_int = 29
current_hour_float = 3.59
busy_boolean = True
my_set_var = {"cycling", 2, 4.5} # unique set
my_dictionary_var = {'name': 'Venedykt', 'age': 29} # key:value
my_tuple_var = (7, 'hello', 8.5) # unchanged set
my_range_var = range(5) # range int values, mostly for loops
my_list_var = [22, 'Hello world', 3.14, True] # aka Array
my_none_var = None # aka null

# check type
print(type(name_str)) # <class 'str'>
print(type(age_int)) # <class 'int'>
print(type(my_tuple_var)) # <class 'tuple'>

print(isinstance(my_set_var, str)) # False
print(isinstance(my_set_var, set)) # True
print(isinstance(my_list_var, set)) # False
print(isinstance(current_hour_float, (int, float))) # True, because of float type(works on same logic as .some() method in JS)