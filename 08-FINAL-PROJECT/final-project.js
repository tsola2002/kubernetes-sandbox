// STEP 1 RUN AND TEST THE CUSTOMER AND ORDER MICROSERVICE
localhost:8080/swagger-ui/index.html

// STEP 2 GENERATE DOCKER IMAGES FOR BOTH CUSTOMER AND ORDER MICROSERVICE
docker build -t customer-java-app . 
docker build -t order-java-app .
docker image ls

// STEP 3 RUN BOTH IMAGES AS DOCKER CONTAINERS
docker run --name customer-java-app  -d -p 8080:8080 customer-java-app
docker run --name order-java-app  -d -p 8081:8081 order-java-app

// STEP 4 CREATE 2 REPOSITORIES FOR CUSTOMER AND ORDER MICROSERVICE 
// LINK THE REPOSITORIES PUSH THE IMAGES TO DOCKER HUB
docker tag customer-java-app:latest tsola2002/customer-java-app:latest
docker tag order-java-app:latest tsola2002/order-java-app:latest 

docker push tsola2002/customer-java-app:latest
docker push tsola2002/customer-java-app:latest


// STEP 5 CREATE 2 DEPLOYMENT AND A SERVICE FILES FOR CUSTOMER AND ORDER MICROSERVICE
kubectl apply -f customer-deployment.yml
kubectl apply -f order-deployment.yml
