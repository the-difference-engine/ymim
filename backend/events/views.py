from rest_framework import permissions, generics
from rest_framework.viewsets import ViewSetMixin

from .models import Event
from .serializers import EventSerializer


class EventListCreate(ViewSetMixin, generics.ListCreateAPIView):
    queryset = Event.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = EventSerializer
<<<<<<< HEAD
    lookup_field = "id"
=======
    lookup_field = 'id'
>>>>>>> 0d0e8fae891da611d3ccfcd27302027f40f3db3d


class EventRetrieveUpdateDestroy(ViewSetMixin, generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = EventSerializer
<<<<<<< HEAD
    lookup_field = "id"
=======
    lookup_field = 'id'
>>>>>>> 0d0e8fae891da611d3ccfcd27302027f40f3db3d
