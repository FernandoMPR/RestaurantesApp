from rest_framework import serializers
from .models import CustomUser
from .models import RestaurantesModel

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['email', 'user' , 'password', "id"]
        extra_kwargs = {
            "password" : {"write_only" : True}
        }

    def create(self, validated_data):
        password = validated_data.pop("password", None)
        user = self.Meta.model(**validated_data)
        if password is not None:
            user.set_password(password)
        user.save()    
        return user

class RestaurantesSerializer(serializers.ModelSerializer):
     class Meta:
        model = RestaurantesModel
        fields = "__all__"
        