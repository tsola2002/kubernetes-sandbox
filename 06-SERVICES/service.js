// STEP 1 TEST ALL 3 API ENDPOINTS
node server.js

// STEP 2 BUILD 2 IMAGES FOR THE 2 MICROSERVICES
docker image build -t customer-service:latest .
docker image build -t order-service:latest .

// STEP 3 RUN THE 2 IMAGES AS DOCKER CONTAINERS
docker run --name customer-service -d -p 8080:8080 customer-service:latest
docker run --name order-service -d -p 8081:8081 order-service:latest


// STEP 4 CREATE 2 REPOSITORIES ON DOCKER HUB SETUP DOCKER TAGS 
// WHICH WILL BE PUSHED TO YOUR DOCKER HUB ACCOUNT
docker tag customer-service:latest tsola2002/customer-app:latest
docker tag order-service:latest tsola2002/order-app:latest

docker push tsola2002/customer-app:latest
docker push tsola2002/order-app:latest

//STEP 5 RUN CUSTOMER AND ORDER MICROSERVICE AS A CLUSTER
minikube status
minikube start

kubectl apply -f oliveth-customer-deployment.yml
kubectl apply - f oliveth - order - deployment.yml

kubectl port-forward deployment/customer 8080:80
kubectl port - forward deployment / order 8081: 8081 

// STEPS 6 HARDCODE POD
kubectl get pods
kubectl describe pod order-e4b23a1

// STEP 10 REPLACE CUSTOMER DEPLOYMENT WITH THE SERVICE IP ADDRESS
env:
    - name: ORDER_SERVICE
      value: 10.109.177.149:8081

kubectl port-forward deployment/customer


// STEP 11 UPDATE YOUR CUSTOMER DEPLOYMENT TO USE A DNS NAME AS AN ENVIRONMENT VARIABLE
env:
    - name: ORDER_SERVICE
      value: order:8081





// check the ip address of a pod 
kubectl describe pod 4e43e2f 

// this will show all services 
kubectl get service
kubectl get svc

// this will show details about a service
kubectl describe service order

//this will show us available pods along with their endpoint ip addresses
kubectl get endpoint
kubectl get ep 

// this will display all nodes on the cluster
kubectl get nodes

//this will give us the ip address of our master node
minikube ip 
minikube ip - n minikube - m02 

// this will login to the master node 
minikube ssh
minikube ssh -n minikube-m02

// this will send an api request from the master node to the worker node
curl localhost:30000/api/v1/customer

// this will send api request to the first and second node
curl 192.168.49.3:30000/api/v1/customer
curl 192.168.49.2:30000/api/v1/customer

// this display details about the customer-node service
minikube service customer-node --url 

// access the nodeport after activating the tunnel
http://127.0.0.1:50182/api/v1/customer 

// this will display all nodes
kubectl get nodes 

http://localhost:33101/api/v1/customer

// this will delete a service 
kubectl delete svc customer 

// intteractively login to a pod
kubectl exec - it order - a23ef5-- sh 


// install curl from inside the pod 
apk add curl

curl 247.80.111.1/api/v1/customer