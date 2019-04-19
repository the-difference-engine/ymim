from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register("events", views.EventListCreate)
urlpatterns = router.urls
