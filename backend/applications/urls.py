from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register("applications", views.ApplicationListCreate)
urlpatterns = router.urls
