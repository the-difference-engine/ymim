#Import routers from Restframework
from rest_framework import routers
#Import views from current directory
from . import views
#Use default router, register listcreate and retrieve update destroy from the views
router = routers.DefaultRouter()
router.register("resources", views.ResourceListCreate)
router.register("resources", views.ResourceRetrieveUpdateDestroy)
urlpatterns = router.urls