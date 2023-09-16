from rest_framework import serializers
from .models import CustomUser
from .models import RestaurantesModel


#SERIALIZADOR DE PASSWORD Y VALIDACION DE USERS
class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['email', 'user' , 'password', "id"]
        extra_kwargs = {
            "password" : {"write_only" : True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

#SERIALIZADOR DE RESTAURANTES (ALL)
class RestaurantesSerializer(serializers.ModelSerializer):
     class Meta:
        model = RestaurantesModel
        fields = "__all__"
        