from django.contrib.auth.models import AbstractBaseUser
from django.db import models
from django.utils import timezone

class CustomUser(AbstractBaseUser):
    email = models.EmailField(unique=True, max_length=100)
    user = None
    password = models.CharField(max_length=255)
    date_joined = models.DateTimeField(default=timezone.now)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email



class RestaurantesModel(models.Model):
    nombre = models.TextField(max_length=100)
    tipo = models.TextField(max_length=100)
    direccion = models.TextField(max_length=100)
    telefono = models.CharField(max_length=10)
