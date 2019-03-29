from django.urls import path
from . import views

urlpatterns = [path("api/profiles/", views.UserViewSet.as_view())]