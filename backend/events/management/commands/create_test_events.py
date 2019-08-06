import pytz

from django.core.management.base import BaseCommand
from faker import Faker
from faker.providers import date_time, lorem
from tqdm import tqdm

from events.models import Event


class Command(BaseCommand):
    help = "Creates test events"

    def handle(self, *args, **kwargs):
        Event.objects.all().delete()

        fake = Faker()
        fake.add_provider(date_time)
        fake.add_provider(lorem)
