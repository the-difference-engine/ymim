from django.db import models

class Resource(models.Model):
    name = models.CharField(max_length=300)
    description = models.CharField(max_length=500)

    def __str__(self):
        return self.text