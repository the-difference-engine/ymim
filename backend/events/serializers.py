from rest_framework import serializers

from .models import Event


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        # fields = ('title', 'description', 'start_time', 'end_time', 'event_image',)
        fields = '__all__'