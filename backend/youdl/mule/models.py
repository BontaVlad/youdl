from django.db import models

from users.models import User


class PlayList(models.Model):
    owner = models.ForeignKey(User, related_name="playlists")
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Video(models.Model):
    owner = models.ForeignKey(User, related_name="videos")
    yt_id = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    url = models.URLField()
    ext = models.CharField(max_length=25)
    release_date = models.DateField()
    duration = models.BigIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_audio = models.BooleanField(default=True)
    file_encoded = models.FileField(null=True, blank=True)
    playlist = models.ForeignKey(PlayList, related_name="items")

    def __str__(self):
        return self.title


class Statistic(models.Model):
    owner = models.ForeignKey(User, related_name="statistics")
    date = models.DateTimeField(auto_now_add=True)
    original_size = models.BigIntegerField()
    final_size = models.BigIntegerField()

    # def __str__(self):
    #     return self.title
