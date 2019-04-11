from django.contrib import admin
from django.urls import include, path

from events import urls as event_urls
from healthcheck.views import healthcheck
from profiles.views import UserViewSet

urlpatterns = [
    path("admin/", admin.site.urls),
    path("applications/", admin.site.urls),
    path("profiles/", UserViewSet.as_view({'get': 'list'})),
    path("api-auth/", include("rest_framework.urls")),
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.authtoken")),
    path("auth/", include("djoser.urls.jwt")),
    path("api/healthcheck", healthcheck),
    path("api/", include(event_urls)),
]
