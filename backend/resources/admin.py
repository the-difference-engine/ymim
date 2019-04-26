#import admin from django
from django.contrib import admin
#Import models from current directory
from .models import Resource
#Register Resource model for admin to make changes
admin.site.register(Resource)
