# Generated by Django 4.2.5 on 2023-09-15 04:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('loginUser', '0006_alter_restaurantesmodel_telefono'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurantesmodel',
            name='tipo',
            field=models.CharField(choices=[('pizza', 'Pizza'), ('tacos', 'Tacos'), ('italian', 'Italian'), ('fast-food', 'Fast Food')], max_length=10),
        ),
    ]
