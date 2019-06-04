from rest_framework import routers
from . import views


router = routers.DefaultRouter()
router.register("resources", views.ResourceListCreate)
router.register("resources", views.ResourceRetrieveUpdateDestroy)
urlpatterns = router.urls
