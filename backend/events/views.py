from rest_framework import permissions, generics
from rest_framework.viewsets import ViewSetMixin

from .models import Event
from .serializers import EventSerializer


class EventListCreate(ViewSetMixin, generics.ListCreateAPIView):
    queryset = Event.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = EventSerializer
    lookup_field = 'id'


class EventListDelete(ViewSetMixin, generics.DestroyAPIView):
    queryset = Event.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = EventSerializer
    lookup_field = 'id'


class EventListUpdate(ViewSetMixin, generics.UpdateAPIView):
    queryset = Event.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = EventSerializer
    lookup_field = 'id'
