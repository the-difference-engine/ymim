from rest_framework import permissions, generics
from rest_framework.viewsets import ViewSetMixin

from .models import Application
from .serializers import ApplicationSerializer


class ApplicationListCreate(ViewSetMixin, generics.ListCreateAPIView):
    queryset = Application.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ApplicationSerializer
