from django.urls import path
from . import views

urlpatterns = [
    path("/", views.UserViewSet.as_view())
]
