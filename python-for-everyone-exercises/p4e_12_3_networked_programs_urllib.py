'''
Exercise 3: Use urllib to replicate the previous exercise of (1) retrieving the document from a URL, (2) displaying up to 3000 characters, and (3) counting the overall number of characters in the document. Don’t worry about the headers for this exercise, simply show the first 3000 characters of the document contents.
'''

import socket
import urllib.request

fhand = urllib.request.urlopen('http://data.pr4e.org/mbox-short.txt')
for line in fhand:
    data = line.decode().strip()
    
