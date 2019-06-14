from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register("api/profiles", views.UserListCreate)
urlpatterns = router.urls
