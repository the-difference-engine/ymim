from rest_framework import routers

from . import views

router = routers.DefaultRouter()
<<<<<<< HEAD
router.register("api/events", views.EventListCreate)
router.register("api/events", views.EventRetrieveUpdateDestroy)
=======
router.register("events", views.EventListCreate)
router.register("events", views.EventRetrieveUpdateDestroy)
>>>>>>> 0d0e8fae891da611d3ccfcd27302027f40f3db3d
urlpatterns = router.urls
