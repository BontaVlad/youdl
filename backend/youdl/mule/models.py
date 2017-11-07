from django.db import models
from django.contrib.auth.models import AbstractBaseUser


class User(AbstractBaseUser):
    device_id = models.IntegerField()


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


class Statistic(models.Model):
    owner = models.ForeignKey(User, related_name="statistics")
    date = models.DateTimeField(auto_now_add=True)
    original_size = models.BigIntegerField()
    final_size = models.BigIntegerField()


class PlayList(models.Model):
    owner = models.ForeignKey(User, related_name="playlists")


class PlayListItem(models.Model):
    parent = models.ForeignKey(PlayList, related_name="items")
    content = models.ForeignKey(Video)
