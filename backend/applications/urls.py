from django.urls import path
from . import views

urlpatterns = [path("api/applications/", views.ApplicationListCreate.as_view())]
