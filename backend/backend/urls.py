from django.urls import path
from django.conf.urls import include, url
from django.contrib import admin


urlpatterns = [
    path("admin/", admin.site.urls),
    # path("", include("authentication.urls")),
    # url(r'^rest-auth/', include('rest_auth.urls')),
]
