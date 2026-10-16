from django.test import SimpleTestCase
from django.urls import reverse

class ConverterViewTest(SimpleTestCase):
    def test_converter_view_status_code(self):
        """Test that the converter view returns a 200 OK status."""
        response = self.client.get(reverse('converter'))
        self.assertEqual(response.status_code, 200)

    def test_converter_view_uses_correct_template(self):
        """Test that the converter view uses the index.html template."""
        response = self.client.get(reverse('converter'))
        self.assertTemplateUsed(response, 'index.html')
