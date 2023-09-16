from django.contrib import admin
from .models import CustomUser
from .models import RestaurantesModel
# Register your models here.


#REGISTRO DE MODELOS A /ADMIN 
admin.site.register(CustomUser) 
admin.site.register(RestaurantesModel)