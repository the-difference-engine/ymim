import requests
from django.shortcuts import render
from events.admin import eventbrite_api_key

def index(request):
    event_list = requests.get(eventbrite_api_key.format("events")).json()

    event_info = {
        'event_name': event_list['events'][0]['name']['text'],
        'description': event_list['events'][0]['description']['text'],
        'startTime': event_list['events'][0]['start'],
        'url': event_list['events'][0]['url'],
        'logo': event_list['events'][0]['logo']['url'],
    }

    context = {'event_info': event_info}

    return render(request, 'eventbrite/eventbrite.html', context)
