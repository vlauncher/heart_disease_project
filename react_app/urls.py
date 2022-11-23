from django.urls import path
from react_app.views import index

urlpatterns = [
    path('',index)
]