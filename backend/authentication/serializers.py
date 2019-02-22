
from django.contrib.auth.models import User, Group
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        read_only_fields = ('created_at', 'updated_at',)
        fields = ('first_name', 'last_name', 'email', 'username', 'password')
        # fields = ('__all__')
        # exclude = ('user',)

