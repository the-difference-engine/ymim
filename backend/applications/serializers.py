from rest_framework import serializers
from applications.models import Application


class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ("id", "type", "application", "user_id")
