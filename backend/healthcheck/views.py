from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse

def healthcheck(request):
    # this if check verfies the content_type is json request.
    if(request.content_type != "application/json"):
        return redirect('http://localhost:3000')
    # json response with any key/jvalue pairs you want added.
    return JsonResponse({'message':'Working!'})