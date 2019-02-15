from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages 

# from django.contrib.auth import authenticate
#    user = authenticate(username='john', password='secret')
#      if user is not None:
# A backend authenticated the credentials
#      else:
# No backend authenticated the credentials


def home(request):
    return render(request, "authentication/home.html")


def login_user(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        # From import authenticate
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, ('You are logged in!'))
            return redirect('home')

        else:
            messages.success(request, ('Error logging in - Please try again.'))
            return redirect('login_user')
    else:
        return render(request, 'authentication/login.html', {})


def register_user(request):
    return render(request, "authentication/register.html")
