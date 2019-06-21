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
        print("Creating 50 fake events")
        for _ in tqdm(range(50)):
            Event.objects.create(
                title=fake.sentence(nb_words=6),
                description=fake.text(max_nb_chars=500),
                start_datetime=fake.date_time_this_month(
                    before_now=True,
                    after_now=False,
                    tzinfo=pytz.timezone("America/Chicago"),
                ),
                end_datetime=fake.date_time_this_month(
                    before_now=False,
                    after_now=True,
                    tzinfo=pytz.timezone("America/Chicago"),
                ),
                event_image="https://via.placeholder.com/300",
            )
