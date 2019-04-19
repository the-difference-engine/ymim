from django.conf.urls import include, url
from rest_framework import routers

from .api import ResourceViewSet

router = routers.DefaultRouter()
router.register('resources', ResourceViewSet)

urlpatterns = [
    url("^", include(router.urls)),
]