from django.contrib import admin
from django.urls import path, include
from healthcheck import views as healthcheck_views

from events import urls as event_urls


urlpatterns = [
    path("admin/", admin.site.urls),
    path("applications/", admin.site.urls),
    path("api-auth/", include("rest_framework.urls")),
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.authtoken")),
    path("auth/", include("djoser.urls.jwt")),
    path("api/healthcheck", healthcheck_views.healthcheck),
    path("api/", include(event_urls)),
]
