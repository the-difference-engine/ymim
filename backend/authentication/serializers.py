from django.contrib.auth.models import User, Group
from rest_framework import serializers

from .models import UserProfile


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'password')


class UserProfileSerializer(serializers.ModelSerializer):
    users = UserSerializer(many=True)

    class Meta:
        model = UserProfile
        fields = ('first_name', 'last_name', 'phone_number', 'email', 'users')



# class UserSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = User
#         fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


# class UserProfileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserProfile
#         read_only_fields = ('created_at', 'updated_at',)
#         fields = ('first_name', 'last_name', 'email', 'username', 'password')
        # fields = ('__all__')

