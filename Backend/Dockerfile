FROM python:3.11.4


WORKDIR /app


COPY requirements.txt .


RUN pip install -r requirements.txt


COPY ./ ./


EXPOSE 8000

# Comando para ejecutar la aplicación Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]