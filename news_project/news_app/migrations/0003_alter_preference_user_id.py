# Generated by Django 4.0 on 2022-04-08 12:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('news_app', '0002_preference'),
    ]

    operations = [
        migrations.AlterField(
            model_name='preference',
            name='user_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='news_app.appuser'),
        ),
    ]
