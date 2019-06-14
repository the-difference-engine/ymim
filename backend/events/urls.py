from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register("api/events", views.EventListCreate)
router.register("api/events", views.EventRetrieveUpdateDestroy)
urlpatterns = router.urls
