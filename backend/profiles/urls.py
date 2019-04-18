from django.conf.urls import include, path
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register("", views.UserViewSet)

urlpatterns = [path("/", include(router.urls))]
