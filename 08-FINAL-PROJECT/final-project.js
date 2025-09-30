// STEP 1 RUN AND TEST THE CUSTOMER AND ORDER MICROSERVICE
localhost:8080/swagger-ui/index.html


// STEP 2 GENERATE DOCKER IMAGES FOR BOTH CUSTOMER AND ORDER MICROSERVICE
docker build image -t customer-java-app . 
docker build image - t order - java - app.
docker image ls


// STEP 3 RUN BOTH IMAGES AS DOCKER CONTAINERS