from django.contrib.postgres.fields import JSONField
from django.db import models
from django.contrib.auth.models import User


class Application(models.Model):
    TYPE_CHOICES = (
        (1, 'VOLUNTEER'),
        (2, 'SPONSOR'),
        (3, 'ENROLL')
    )
    type = models.IntegerField(choices=TYPE_CHOICES)
    application = JSONField(default=dict)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
