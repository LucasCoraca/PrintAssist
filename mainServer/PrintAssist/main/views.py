# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render_to_response
from django.shortcuts import render
from django.template import RequestContext

def main(request):
    return render(request, 'main/main.html')

def printers(request):
    return render(request, 'main/printers.html')

def user(request):
    return render(request, 'main/user.html')

def files(request):
    return render(request, 'main/files.html')
