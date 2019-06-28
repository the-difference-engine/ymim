from rest_framework import routers
from . import views


router = routers.DefaultRouter()
router.register("api/resources", views.ResourceListCreate)
router.register("api/resources", views.ResourceRetrieveUpdateDestroy)
urlpatterns = router.urls
