from django.shortcuts import render
from applications.models import Application
from applications.serializers import ApplicationSerializer
from rest_framework import generics


class ApplicationListCreate(generics.ListCreateAPIView):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
