# Generated by Django 2.1.7 on 2019-02-21 02:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='User',
            new_name='NewUser',
        ),
        migrations.AlterModelOptions(
            name='newuser',
            options={'verbose_name': 'NewUser', 'verbose_name_plural': 'NewUsers'},
        ),
    ]
