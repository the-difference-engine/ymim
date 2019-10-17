import requests
from django.shortcuts import render

def index(request):
    event_list = requests.get(url.format("eventbrite_api_key")).json()

    event_info = {
        'event'
    }