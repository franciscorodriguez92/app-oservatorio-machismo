FROM python:3.7-alpine


# We copy just the requirements.txt first to leverage Docker cache
COPY ./requirements.txt ./requirements.txt

WORKDIR /

RUN pip3 install -r requirements.txt

ENV FLASK_ENV development
ENV FLASK_APP api
EXPOSE 5000
COPY . /api

CMD ["flask", "run", "-h", "0.0.0.0"]

