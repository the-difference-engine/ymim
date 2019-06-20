<<<<<<< HEAD
from django.db import models

# Create your models here.


class Event(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
<<<<<<< HEAD
    start_datetime = models.DateTimeField(blank=True, null=True)
    end_datetime = models.DateTimeField(blank=True, null=True)
    event_image = models.URLField(default="https://via.placeholder.com/150", blank=True, null="True")
=======
    start_date = models.DateField(blank=True, null=True)
    start_time = models.TextField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)
    end_time = models.TextField(blank=True, null=True)
    event_image = models.ImageField(
        upload_to=None, default="https://via.placeholder.com/150", blank=True, null="True")
>>>>>>> 0d0e8fae891da611d3ccfcd27302027f40f3db3d
=======
from django.db import models

# Create your models here.


class Event(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    start_datetime = models.DateTimeField(blank=True, null=True)
    end_datetime = models.DateTimeField(blank=True, null=True)
    event_image = models.URLField(
        default="https://via.placeholder.com/150", blank=True, null="True"
    )
>>>>>>> f80b11adecc4d87ef78d708bb77415c9bc27d965
