FROM gradle:8.5-jdk21
WORKDIR /app

COPY ["spring-java/", "."]

EXPOSE 8080

WORKDIR nubiweather

RUN chmod +x gradlew

CMD ["./gradlew", "bootRun"]
