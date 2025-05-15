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