from rest_framework import serializers

from mule.models import PlayList, Video


class VideoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Video
        fields = ('id', 'owner', 'yt_id', 'title', 'url', 'ext', 'release_date',
                'duration', 'is_audio', 'file_encoded')


class PlaylistSerializer(serializers.ModelSerializer):
    items = VideoSerializer(many=True)

    class Meta:
        model = PlayList
        # fields = ('owner', 'name', 'items')
        fields = ('id', 'owner', 'name', "items")
