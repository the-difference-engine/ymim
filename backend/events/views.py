import requests
from django.shortcuts import render
from events.admin import eventbrite_api_key
from django.http import JsonResponse


def event_index(request):
    event_list = requests.get(eventbrite_api_key.format("events")).json()

    context = {"event_info": event_list["events"]}

    return JsonResponse(context)
