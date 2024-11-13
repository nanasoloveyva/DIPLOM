# Generated by Django 4.2 on 2024-11-11 15:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('slug', models.SlugField(unique=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='blogposts',
            name='tags',
        ),
        migrations.AddField(
            model_name='blogposts',
            name='tags',
            field=models.ManyToManyField(related_name='posts', to='main.tag'),
        ),
    ]