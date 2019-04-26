#import serializers from rest_framework
from rest_framework import serializers
#import Resource model from current directory
from .models import Resource


class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = "__all__"