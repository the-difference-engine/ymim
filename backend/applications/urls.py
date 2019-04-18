from django.urls import include, path
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register("/", views.ApplicationListCreate)

urlpatterns = [
    path("/", include(router.urls))
]
