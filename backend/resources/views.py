from rest_framework import permissions, generics
from rest_framework.viewsets import ViewSetMixin
from .models import Resource
from .serializers import ResourceSerializer


class ResourceListCreate(ViewSetMixin, generics.ListCreateAPIView):
    queryset = Resource.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ResourceSerializer


class ResourceRetrieveUpdateDestroy(ViewSetMixin, generics.RetrieveUpdateDestroyAPIView):
    queryset = Resource.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ResourceSerializer