# Generated by Django 4.0 on 2022-04-08 05:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Preference',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.CharField(max_length=255)),
                ('name', models.CharField(max_length=255)),
                ('label', models.CharField(max_length=255)),
                ('value', models.CharField(max_length=255)),
            ],
        ),
    ]
