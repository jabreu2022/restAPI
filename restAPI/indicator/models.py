from django.db import models

# Create your models here.

class enviromentalIdicators(models.Model):
    idCode = models.IntegerField(default = 0)
    company = models.CharField(max_length = 255)
    blackCarbon = models.FloatField(default = 0)
    pm1 = models.FloatField(default = 0)
    pm25 = models.FloatField(default = 0)
    pm10 = models.FloatField(default = 0)

    class Meta:
        verbose_name = "enviromentalIdicator"
        verbose_name_plural = "enviromentalIdicators"

    def __str__(self):
        return f"{self.idCode},{self.company},{self.blackCarbon},{self.pm1},{self.pm25},{self.pm10}"

class enviromentalFiles(models.Model):
    file = models.FileField(blank=False, null=False)
    remark = models.CharField(max_length=20)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "envirimentalFile"
        verbose_name_plural = "envirimentalFiles"
    
    def __str__(self):
        return f"{self.file},{self.remark},{self.timestamp}"