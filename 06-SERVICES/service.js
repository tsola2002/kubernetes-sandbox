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
docker tag customer-service:latest tsola2002/customer-service:latest
docker tag order-service:latest tsola2002/order-service:latest

docker push tsola2002/customer-service:latest
docker push tsola2002/order-service:latest



//STEP 5 RUN 2 DEPLOYMENTS IN KUBERNETES AND CHECK THAT THE APPLICATION IS RUNNING
kubectl apply -f halima-customer-deployment.yml
kubectl apply -f halima-order-deployment.yml
kubectl get pods -w
kubectl port-forward deployment/customer 8080:8080
kubectl port-forward deployment/order 8081:8081

// STEP 6 HARDCODE MICROSERVICE COMMUNICATION USING THE POD IP ADDRESSES
// DESCRIBE THE POD AND RETRIEVE THE IP ADDRESS OF THE POD
// ADD ENVIRONMENT VARIABLES TO YOUR CUSTOMER SERVICE
kubectl describe pod-34dfav2b
kubectl apply -f customer-deployment.yml

// STEP 7 DELETE A POD AND RETEST THE APPLICATION
kubectl delete pod pod-34dfav2b
kubectl port-forward deployment/customer

// STEP 8 CREATE AND CONFIGURE A CLUSTERIP SERVICE ON THE ORDER DEPLOYMENT
// SETUP INCOMING PORT AND OUTGOING PORT WHICH WILL ROUTE TRAFFIC TO THE ASSOCIATED ORDER PODS
# ---

# apiVersion: v1
# kind: Service
# metadata:
#   name: order
# spec:
#   type: ClusterIP
#   selector:
#     app: order
#   ports:
#   - port: 8081
#     targetPort: 8081


kubectl apply -f order-deployment.yml
kubectl get service
kubectl describe service order
kubectl apply -f halima-customer-deployment.yml

// STEP 9 DISPLAY ALL ENDPOINTS AVAILABLE TO YOU
kubectl get endpoints
kubectl get ep


// STEP 10 REPLACE CUSTOMER DEPLOYMENT WITH THE SERVICE IP ADDRESS
env:
    - name: ORDER_SERVICE
      value: 10.109.177.149:8081

kubectl apply -f oliveth-customer deployment
kubectl get service
kubectl describe service customer
kubectl port-forward deployment/ customer



// STEP 12 CREATE A NODEPORT SERVICE BY ADDING A SERVICE TO YOUR CUSTOMER DEPLOMENTS
apiVersion: v1
kind: Service
metadata:
  name: customer-node
spec:
  selector:
    app: customer
  ports:
  - port: 80
    targetPort: 8080
    nodePort: 30000

kubectl apply -f customer-deployment-nodeport.yml
kubectl get svc
kubectl describe svc customer-node

// STEP 13 ACCESS THE API THROUGH A NODE
// DO THIS USING SSH TO LOGIN TO NODE
kubectl get nodes
minikube ip
minikube ip -n minikube-m02

// SEND A REQUEST FROM FIRST NODE TO SECOND NODE
minikube ssh
curl localhost:30000/api/v1/customer
//ACCESS THE API FROM THE SECOND NODE
curl 192.168.49.3:30000/api/v1/customer
//ACCESS THE API FROM THE SECOND NODE
curl 192.168.49.3:30000/api/v1/customer


// STEP 14 LOGIN TO THE SECOND NODE AND SEND A REQUEST
minikube ssh -n minikube-m02
curl localhost:30000/api/v1/customer
curl 192.168.49.2:30000/api/v1/customer


// STEP 15 ACCESS THE SERVICE VIA MINIKUBE
minikube service customer-node --url
// copy the tunnel url and paste it in the browser



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

// interactively login to a pod
kubectl exec -it order-a23ef5 -- sh 


// install curl from inside the pod 
apk add curl

curl 247.80.111.1/api/v1/customer