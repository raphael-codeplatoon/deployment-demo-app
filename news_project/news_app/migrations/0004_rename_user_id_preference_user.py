# Generated by Django 4.0 on 2022-04-08 12:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('news_app', '0003_alter_preference_user_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='preference',
            old_name='user_id',
            new_name='user',
        ),
    ]
