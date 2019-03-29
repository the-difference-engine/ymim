from django.contrib import admin
from django.urls import path, include
from profiles.views import UserViewSet
from healthcheck import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("applications/", admin.site.urls),
    path("profiles/", UserViewSet.as_view({'get': 'list'})),
    path("api-auth/", include("rest_framework.urls")),
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.authtoken")),
    path("auth/", include("djoser.urls.jwt")),
    path("api/healthcheck", views.healthcheck),
]
