from django.shortcuts import render
from django.core.mail import send_mail

# Create your views here.
def send_email(email, subject, body):

    send_mail(subject,
    body,
    'scott@scott-gall.com',
    email,
    fail_silently=False)

  

def index(request):

  send_email(['scottarthurgall@gmail.com'], 'TESTTESTTEST', 'Hello!')

  return render(request, 'send/index.html')

# import send
# def index (request):
#   send.views.send_email(email, subject, body)