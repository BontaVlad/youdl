from mule.views import PlaylistViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'playlists', PlaylistViewSet, base_name='playlist')
urlpatterns = router.urls
