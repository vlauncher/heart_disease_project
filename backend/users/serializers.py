from djoser.serializers import UserCreateSerializer
from users.models import User


class UserCreateSerializer(UserCreateSerializer):

    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id','first_name','last_name','email','password')