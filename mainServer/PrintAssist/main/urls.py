from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.main , name='main'),
    url(r'^printer', views.printers , name='printer'),
    url(r'^user', views.user , name='user'),
    url(r'^files', views.files , name='files'),
    ]
