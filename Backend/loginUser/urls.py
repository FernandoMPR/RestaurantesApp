from django.urls import path
from . import views

# URLS DE LOGIN Y RESTAURANTE (API)
urlpatterns = [
    path('register/', views.RegisterView.as_view(), name='register'), 
    path('login/', views.LoginView.as_view()),  
    path("user/", views.get_username_view),  
    path('logout/', views.user_logout, name='logout'),
    path('restaurantes/', views.ListaRestaurantes.as_view({'get': 'list', 'post': 'create'}), name="ListaRestaurantes"),
    path('restaurantes/<int:pk>/', views.ListaRestaurantes.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name="DetalleRestaurante"), 
]
