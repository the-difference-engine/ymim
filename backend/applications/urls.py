from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register("api/applications", views.ApplicationListCreate)
urlpatterns = router.urls
