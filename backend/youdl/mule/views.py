from django.shortcuts import get_object_or_404
from rest_framework import viewsets, status
from rest_framework.response import Response

from mule.serializers import PlaylistSerializer


class PlaylistViewSet(viewsets.ViewSet):
    """
    A simple ViewSet for listing or retrieving users.
    """

    def get_playlist_data(self, request, pk):
        queryset = request.user.playlists.all()
        return get_object_or_404(queryset, pk=pk)

    def list(self, request):
        queryset = request.user.playlists.all()
        serializer = PlaylistSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        playlist = self.get_playlist(request, pk)
        serializer = PlaylistSerializer(playlist)
        return Response(serializer.data)

    def update(self, request, pk=None):
            pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        playlist = self.get_playlist(request, pk)
        playlist.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
