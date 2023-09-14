from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register, name='register'),
    path('login/', views.user_login.as_view()),
    path("user/", views.UserView.as_view()),
    path('logout/', views.user_logout, name='logout'),
]