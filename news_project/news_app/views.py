from django.http import HttpResponse, JsonResponse
from django.core import serializers
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from .models import Preference


from django.contrib.auth import authenticate, login, logout
from .models import AppUser as User

# we're not using django templates anymore
def send_the_homepage(request):
    theIndex = open('build/index.html').read()
    return HttpResponse(theIndex)


# when using @api_view, only logged-in users need CSRF tokens
@api_view(['POST'])
def sign_up(request):
    try:
        User.objects.create_user(username=request.data['email'], password=request.data['password'], email=request.data['email'])
    except Exception as e:
        print(str(e))
    return HttpResponse('hi')

@api_view(['POST'])
def log_in(request):
    print(dir(request._request))

    # DRF assumes that the body is JSON, and automatically parses it into a dictionary at request.data
    email = request.data['email']
    password = request.data['password']
    # user = authenticate(username=email, password=password, email=email)
    user = authenticate(username=email, password=password)
    print('user?')
    print(user.email)
    print(user.password)
    if user is not None:
        if user.is_active:
            try:
                # access the base request, not the DRF request
                # this starts a login session for this user
                login(request._request, user)
            except Exception as e:
                print('except')
                print(str(e))
            return HttpResponse('success!')
            # Redirect to a success page.
        else:
            return HttpResponse('not active!')
            # Return a 'disabled account' error message
    else:
        return HttpResponse('no user!')
        # Return an 'invalid login' error message.


@api_view(['POST'])
@csrf_exempt
def log_out(request):
    logout(request)
    return HttpResponse('Logged you out!')


@api_view(['GET'])
def who_am_i(request):
    # Make sure that you don't send sensitive information to the client, such as password hashes
    if request.user.is_authenticated:
        data = serializers.serialize("json", [request.user], fields=['email', 'username'])
        return HttpResponse(data)
    else:
        return JsonResponse({'user':None})

@api_view(['GET', 'PUT'])
def preferences(request):
    if request.method == 'PUT':
        print('hi')
        print(request.data['color-theme'])
        print(request.user.id)
        obj, created = Preference.objects.update_or_create(
            user=request.user, name='colortheme', label="Color Theme",
            defaults={'value': request.data['color-theme']},
        )
        return HttpResponse('ok')
    elif request.method == 'GET':
        if request.user.is_authenticated:
            preferences = request.user.user_preference.all()
        
            preferences = serializers.serialize("json", preferences )
            return HttpResponse(preferences)
        else:
            return JsonResponse({'preferences':None})