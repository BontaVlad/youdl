from django.contrib import admin

from mule.models import PlayList, Video


@admin.register(PlayList)
class PlaylistAdmin(admin.ModelAdmin):
    fields = ('owner', 'name')


@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    fields = ('owner', 'yt_id', 'title', 'url', 'ext', 'release_date',
              'duration', 'is_audio', 'file_encoded')
