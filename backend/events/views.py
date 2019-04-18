from rest_framework import viewsets, permissions, generics

from .models import Event
from .serializers import EventSerializer


class EventViewSet(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = EventSerializer
