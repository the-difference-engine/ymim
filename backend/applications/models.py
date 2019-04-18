from django.contrib.postgres.fields import JSONField
from django.db import models
from django.contrib.auth.models import User

TYPE_CHOICES = ((1, "VOLUNTEER"), (2, "SPONSOR"), (3, "ENROLL"))


class Application(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    type = models.IntegerField(choices=TYPE_CHOICES)
    application = JSONField(default=dict)
    created_at = models.DateTimeField(auto_now_add=True)
