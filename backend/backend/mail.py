from django.core.mail import send_mail
from django.conf import settings

# Create your views here.
def send_email(emails, subject, body):

  send_mail(
    subject,
    body,
    settings.DEFAULT_FROM_EMAIL,
    emails,
    fail_silently=False
  )