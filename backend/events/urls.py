from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register("events", views.EventListCreate)
router.register("events", views.EventRetrieveUpdateDestroy)
urlpatterns = router.urls
