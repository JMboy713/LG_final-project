# Generated by Django 4.2.6 on 2023-11-29 02:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("contents", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="vod",
            name="actors",
            field=models.JSONField(max_length=200, null=True),
        ),
    ]
