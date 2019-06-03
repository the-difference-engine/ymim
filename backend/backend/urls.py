from django.urls import include, path
from rest_framework_swagger.views import get_swagger_view

from applications.urls import urlpatterns as application_urls
from events.urls import urlpatterns as event_urls
from profiles.urls import urlpatterns as profiles_urls
from resources.urls import urlpatterns as resources_urls

import pdb

pdb.set_trace()

schema_view = get_swagger_view(title="YMIM API")

urlpatterns = [
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.authtoken")),
    path("auth/", include("djoser.urls.jwt")),
    path("schema/", schema_view),
]

urlpatterns += profiles_urls
urlpatterns += application_urls
urlpatterns += event_urls
urlpatterns += resources_urls
