from django.contrib.auth.models import User
from django.core.management.base import BaseCommand
from faker import Faker
from rolepermissions.roles import assign_role
from tqdm import tqdm


class Command(BaseCommand):
    help = "creates users in auth_user table"

    def handle(self, *args, **kwargs):
        kim, created = User.objects.get_or_create(
            username="kim.wright@example.com",
            first_name="Kim",
            last_name="Wright",
        )
        kim.set_password("password")
        kim.is_staff = True
        kim.is_superuser = True
        kim.save()
        assign_role(kim, "admin")
        assign_role(kim, "staff")

        jane, created = User.objects.get_or_create(
            username="jane.doe@example.com",
            first_name="Jane",
            last_name="Doe",
        )
        jane.set_password("password")
        jane.is_staff = True
        jane.save()
        assign_role(jane, "staff")

        steve, created = User.objects.get_or_create(
            username="steve.jobs@example.com",
            first_name="Steve",
            last_name="Jobs",
        )
        steve.set_password("password")
        steve.is_staff = True
        steve.save()
        assign_role(steve, "staff")

        mike, created = User.objects.get_or_create(
            username="mike.person@example.com",
            first_name="Mike",
            last_name="Person",
        )
        mike.set_password("password")
        mike.save()
        assign_role(mike, "staff")
