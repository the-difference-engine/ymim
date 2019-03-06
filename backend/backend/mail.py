from django.core.mail import send_mail
from django.conf import settings

def send_email(emails, subject, body):
  if not isinstance(emails, list)
    emails = [emails]

  send_mail(
    subject,
    body,
    settings.DEFAULT_FROM_EMAIL,
    emails,
    fail_silently=False
  )