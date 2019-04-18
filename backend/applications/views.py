from rest_framework import permissions, generics

from .models import Application
from .serializers import ApplicationSerializer


class ApplicationListCreate(generics.ListCreateAPIView):
    queryset = Application.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ApplicationSerializer
