from django.db import models
from django.db.models.fields import CharField

# Create your models here.

class Event(models.Model):
    name = models.CharField(max_length=100)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    latitude = models.DecimalField(max_digits=9, decimal_places=6)