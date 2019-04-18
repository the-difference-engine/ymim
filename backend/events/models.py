from django.db import models

# Create your models here.


class Event(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null="True")
    start_time = models.DateTimeField(null="False")
    end_time = models.DateTimeField(null="False")
    event_image = models.ImageField(
        upload_to=None, default="https://via.placeholder.com/150", null="True"
    )
