from django.shortcuts import render


def login(request):
    return render(request, "authentication/login.html")


def home(request):
    return render(request, "authentication/home.html")