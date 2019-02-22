from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    user = models.OneToOneField(User, primary_key=True, related_name='profile', on_delete=True)
    uid = models.CharField(max_length=20, null=False, blank=False)  # rut
    phone = models.CharField(max_length=20, null=True, blank=True)
    cell_phone = models.CharField(max_length=20, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return self.user.username

    def create_profile_for_user(self, instance=None, created=False, **kargs):
        if created:
            UserProfile.objects.get_or_create(user=instance)

    def delete_profile_for_user(self, instance=None, **kargs):
        if instance:
            user_profile = UserProfile.objects.get(user=instance)
            user_profile.delete()