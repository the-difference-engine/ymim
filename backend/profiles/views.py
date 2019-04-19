from django.contrib.auth.models import User, Group
from rest_framework import permissions, generics
from rest_framework.viewsets import ViewSetMixin

from .serializers import UserSerializer, GroupSerializer


class UserListCreate(ViewSetMixin, generics.ListCreateAPIView):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = UserSerializer


class GroupListCreate(ViewSetMixin, generics.ListCreateAPIView):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = GroupSerializer
