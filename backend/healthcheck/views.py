from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse

def healthcheck(request):
    # this if check verfies the content_type is json request.
    # needs to be on every function that will return json.
    if(request.content_type != "application/json"):
        return redirect('http://localhost:3000')
    # json response with any key/value pairs you want added.
    return JsonResponse({'message':'Working!'})