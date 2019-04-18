from django.urls import include, path
from rest_framework_swagger.views import get_swagger_view

from applications import urls as application_urls
from events import urls as event_urls
from healthcheck import urls as healthcheck_urls
from profiles import urls as profiles_urls


schema_view = get_swagger_view(title="YMIM API")

urlpatterns = [
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.authtoken")),
    path("auth/", include("djoser.urls.jwt")),
    path("schema/", schema_view),
    path("applications/", include(application_urls)),
    path("profiles/", include(profiles_urls)),
    path("healthcheck/", include(healthcheck_urls)),
    path("events/", include(event_urls)),
]
