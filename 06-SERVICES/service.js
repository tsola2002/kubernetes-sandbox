// this will build a docker image from the dockerfile in the node js microservice
docker image build . -t customer-service
docker image build. -t order-service

// this will run a docker container from the custom image we generated
docker run--name customer - service - d - p 8084: 8080 customer-service
docker run--name order - service - d - p 8081: 8081 order - service

//setting up tags that will be pushed to docker hub
docker tag customer - service:latest tsola2002 / node - microservices: latest
docker tag order-service:latest tsola2002/order-service:latest

// this will push our image to docker hub
docker push tsola2002 / node - microservices: latest
docker push tsola2002 / order - service: latest 

kubectl apply - f deployment.yml

kubectl port-forward deployment/customer 8080:8080

//this will describe a pod
kubectl describe pod order - 6d9bb675fd - rhdl2

// use port-fowarding to test your customer pod
kubectl port-forward deployment/customer 8080:8080

// this will list all services for us
kubectl get service
kubectl get svc

kubectl describe service order

kubectl get endpoints