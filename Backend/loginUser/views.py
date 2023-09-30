from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth import logout
from .serializers import CustomUserSerializer
from .models import CustomUser
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from rest_framework import viewsets
from .serializers import RestaurantesSerializer
from .models import RestaurantesModel
from django.contrib.auth import authenticate, login
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.authtoken.models import Token
from rest_framework import status




# REGISTRO DE USUARIO
class RegisterView(APIView):
    def post(self, request):
        serializer = CustomUserSerializer(data=request.data)
        serializer.is_valid()
        serializer.save()
        return Response(serializer.data)


#  INICIO DE SESION DE USUARIO
class LoginView(APIView):
    def post(self, request):
        email = request.data["email"]

        password = request.data["password"]

        user = CustomUser.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed("Usuario no encontrado")

        if not user.check_password(password):
            raise AuthenticationFailed("Contraseña incorrecta")

        return Response({
            "messaje": "Logeado"
        })




# VISTA DE USUARIO LOGEADO
def check_authentication(request):
    if request.user.is_authenticated:
        return JsonResponse({'isAuthenticated': True, 'user_id': request.user.id})
    else:
        return JsonResponse({'isAuthenticated': False})


# SALIDA DE PERFIL DE USUARIO
@api_view(['POST'])
def user_logout(request):
    logout(request)
    return Response({'message': 'Cierre de sesión exitoso'})


# GET DE USER
@login_required
def get_username_view(request):
    if request.user.is_authenticated:
        # Recupera el nombre de usuario del usuario autenticado
        username = request.user.username
        return JsonResponse({'username': username})
    else:
        return JsonResponse({'error': 'Usuario no autenticado'}, status=401)



# LISTA DE  RESTAURANTES
class ListaRestaurantes(viewsets.ModelViewSet):
    serializer_class = RestaurantesSerializer
    queryset = RestaurantesModel.objects.all()
