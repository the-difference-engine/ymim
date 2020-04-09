from django.urls import include, path
from django.contrib import admin
from rest_framework_swagger.views import get_swagger_view

from applications.urls import urlpatterns as application_urls
from profiles.urls import urlpatterns as profiles_urls
from resources.urls import urlpatterns as resources_urls


schema_view = get_swagger_view(title="YMIM API")

urlpatterns = [
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.authtoken")),
    path("auth/", include("djoser.urls.jwt")),
    path("schema/", schema_view),
    path("", include("events.urls")),
    path('admin/', admin.site.urls),
]

urlpatterns += profiles_urls
urlpatterns += application_urls
urlpatterns += resources_urls
