from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register("events", views.EventListCreate)
router.register("events", views.EventListDelete)
router.register("events", views.EventListUpdate)
urlpatterns = router.urls
