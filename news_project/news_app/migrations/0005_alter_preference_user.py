# Generated by Django 4.0 on 2022-04-12 03:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('news_app', '0004_rename_user_id_preference_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='preference',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_preference', to='news_app.appuser'),
        ),
    ]
