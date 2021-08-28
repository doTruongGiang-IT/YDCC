# Generated by Django 3.2 on 2021-08-28 04:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('health_insurance', '0005_alter_hospital_head_certificate'),
    ]

    operations = [
        migrations.AlterField(
            model_name='healthrecord',
            name='diagnose',
            field=models.CharField(max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='healthrecord',
            name='note',
            field=models.CharField(max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='healthrecord',
            name='organ_donor',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='healthrecord',
            name='symptom',
            field=models.CharField(max_length=1024, null=True),
        ),
        migrations.AlterField(
            model_name='healthrecord',
            name='treatment',
            field=models.CharField(max_length=1024, null=True),
        ),
    ]
