from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from faker import Faker


class Command(BaseCommand):
    help = "creates users in auth_user table"

    def handle(self):
        User.objects.all().delete()

        kim = User.objects.create_user(
            username="kim.wright@example.com",
            password="password",
            first_name="Kim",
            last_name="Wright",
        )
        kim.is_superuser = True
        kim.is_staff = True
        kim.save()

        jane = User.objects.create_user(
            username="jane.doe@example.com",
            password="password",
            first_name="Jane",
            last_name="Doe",
        )
        jane.is_staff = True
        jane.save()

        User.objects.create_user(
            username="mike.smith@example.com",
            password="password",
            first_name="Mike",
            last_name="Smith",
        )

        fake = Faker()

        for _ in range(100):
            User.objects.create_user(
                username=fake.email(),
                password="password",
                first_name=fake.first_name(),
                last_name=fake.last_name(),
            )
