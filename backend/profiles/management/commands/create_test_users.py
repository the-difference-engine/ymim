from django.contrib.auth.models import User
from django.core.management.base import BaseCommand
from faker import Faker
from rolepermissions.roles import assign_role
from tqdm import tqdm


class Command(BaseCommand):
    help = "creates users in auth_user table"

    def handle(self, *args, **kwargs):
        User.objects.all().delete()

        kim = User.objects.create_user(
            username="kim.wright@example.com",
            password="password",
            first_name="Kim",
            last_name="Wright",
        )
        assign_role(kim, "admin")
        assign_role(kim, "staff")

        jane = User.objects.create_user(
            username="jane.doe@example.com",
            password="password",
            first_name="Jane",
            last_name="Doe",
        )
        assign_role(jane, "staff")

        User.objects.create_user(
            username="mike.smith@example.com",
            password="password",
            first_name="Mike",
            last_name="Smith",
        )

        fake = Faker()
        print("Creating 100 fake users")
        for _ in tqdm(range(100)):
            User.objects.create_user(
                username=fake.email(),
                password="password",
                first_name=fake.first_name(),
                last_name=fake.last_name(),
            )
