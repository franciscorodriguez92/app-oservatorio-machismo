FROM python:3.7-alpine

RUN apk add --no-cache python3-dev libstdc++ && \
    apk add --no-cache g++ && \
    ln -s /usr/include/locale.h /usr/include/xlocale.h && \
    pip3 install numpy && \
    pip3 install pandas

COPY ./data/corpus.csv ./data/corpus.csv

# We copy just the requirements.txt first to leverage Docker cache
COPY ./requirements.txt ./requirements.txt


WORKDIR /

RUN pip3 install -r requirements.txt

ENV FLASK_ENV development
ENV FLASK_APP api
EXPOSE 5000
COPY . /api

CMD ["flask", "run", "-h", "0.0.0.0"]

