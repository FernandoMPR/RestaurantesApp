# Generated by Django 4.2.5 on 2023-09-14 05:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('loginUser', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='customuser',
            old_name='first_name',
            new_name='user',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='last_name',
        ),
    ]
