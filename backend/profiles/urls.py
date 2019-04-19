from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register("profiles", views.UserListCreate)
urlpatterns = router.urls
