from django.db import models

# Create your models here.


class Event(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null="True")
    start_date = models.DateField(blank=True, null="True")
    start_time = models.TextField(null="True", blank=True)
    end_date = models.DateField(null="True", blank=True)
    end_time = models.TextField(null="True", blank=True)
    event_image = models.ImageField(
        upload_to=None, default="https://via.placeholder.com/150", blank=True, null="True")
