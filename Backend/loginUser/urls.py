from django.urls import path
from rest_framework import routers
from . import views




urlpatterns = [
    path('register/', views.register, name='register'),
    path('login/', views.user_login.as_view()),
    path("user/", views.UserView.as_view()),
    path('logout/', views.user_logout, name='logout'),
    path('restaurantes/', views.ListaRestaurantes.as_view({'get': 'list', 'post':'create'}), name="ListaRestaurantes"),
    path('restaurantes/<int:pk>/', views.ListaRestaurantes.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name="DetalleRestaurante"),
]
