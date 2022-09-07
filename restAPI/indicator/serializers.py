from rest_framework import serializers
from .models import enviromentalIdicators, enviromentalFiles

class enviromentalIdicatorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = enviromentalIdicators
        fields = "__all__"
        read_only_fields = (
            "idCode",
        )

class uploaEnviromentaldFile(serializers.ModelSerializer):
    class Meta:
        model = enviromentalFiles
        fields = ('file','remark','timestamp')