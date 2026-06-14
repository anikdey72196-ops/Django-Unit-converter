from django.test import SimpleTestCase
from django.urls import reverse, resolve
from django.contrib import admin
from . import views

class TestUrls(SimpleTestCase):
    def test_converter_url_resolves(self):
        url = reverse('converter')
        self.assertEqual(resolve(url).func, views.converter_view)

    def test_admin_url_resolves(self):
        url = reverse('admin:index')
        self.assertEqual(resolve(url).func.__name__, 'index')
