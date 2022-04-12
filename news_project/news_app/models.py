from django.db import models
from django.contrib.auth.models import (AbstractUser)

# Inheriting from 'AbstractUser' lets us use all the fields of the default User,
# and overwrite the fields we need to change
# This is different from 'AbstractBaseUser', which only gets the password management features from the default User,
# and needs the developer to define other relevant fields.
class AppUser(AbstractUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [] # Email & Password are required by default.

class Preference(models.Model):

  # the id of the user that set this preference
  # In the near future, we'll change this to a foreign key when we add a user model.
  #   user_id = models.CharField(max_length=255)
  user = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name="user_preference")


  # internal name for a preference, e.g. 'colortheme'
  name = models.CharField(max_length=255)

  # human-readable name for a preference, e.g. 'Color Theme'
  label = models.CharField(max_length=255)

  # the actual value of the user's preference, e.g. 'darkmode'
  value = models.CharField(max_length=255)