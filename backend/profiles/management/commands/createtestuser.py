from django.core.management.base import BaseCommand
from django.contrib.auth.models import User


class Command(BaseCommand):
    help = 'Creates users in auth_user'

    def handle(self, *args, **kwargs):
        user = User.objects.create_user(username='dan@example.com', password='danpassword', first_name='dan', last_name='brohan')
