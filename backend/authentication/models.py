from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    # user = models.ForeignKey(User, related_name='users', on_delete=models.CASCADE)
    user = models.OneToOneField(User, primary_key=True, related_name='users', on_delete=True)
    uid = models.CharField(max_length=20, null=False, blank=False)  # rut
    email = models.CharField(max_length=100, null=True, blank=True)
    phone_number = models.CharField(max_length=20, null=True, blank=True)
    first_name = models.CharField(max_length=50, null=True, blank=True)
    last_name = models.CharField(max_length=50, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
