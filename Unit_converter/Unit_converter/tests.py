from django.test import TestCase, Client
from django.urls import reverse

class ConverterViewTest(TestCase):
    def test_converter_view(self):
        client = Client()
        response = client.get(reverse('converter'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'index.html')
