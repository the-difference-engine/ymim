from django.urls import include, path
from django.conf.urls import url, include
from rest_framework import routers
from authentication import views
from django.contrib import admin

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'userprofile', views.UserProfileViewSet)


# # Wire up our API using automatic URL routing.
# # Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework',)),
]