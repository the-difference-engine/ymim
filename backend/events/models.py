from django.db import models

# Create your models here.
class Event(models.Model):
    event_name = models.TextField()
    event_description = models.TextField()
    event_start_time = models.TimeField()
    event_url = models.TextField()
    event_logo = models.TextField()

    def __str__(self):
        return self.name
