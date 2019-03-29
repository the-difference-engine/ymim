from django.contrib.auth.models import User, Group
from rest_framework import serializers

from .models import UserProfile


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'password', 'first_name', 'last_name', 'email') 

        def create_profile_for_user(self, instance=None, created=False, **kargs):
            if created:
                UserProfile.objects.get_or_create(user=instance)

        def update_profile_for_user(self, instance=None, created=True, **kargs):
            if instance:
                user_profile = UserProfile.objects.update(user=instance)
                user_profile.save()

        def delete_profile_for_user(self, instance=None, **kargs):
            if instance:
                user_profile = UserProfile.objects.get(user=instance)
                user_profile.delete()


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')