// check the ip address of a pod 
kubectl describe pod 4e43e2f 

// this will show all services 
kubectl get service 

// this will show details about a service
kubectl describe service order

//this will show us available pods along with their endpoint ip addresses
kubectl get endpoint
kubectl get ep 

//this will give us the ip address of our master node
minikube ip 
minikube ip - n minikube - m02 

// this will login to the master node 
minikube ssh

// this will send an api request from the master node to the worker node
curl localhost: 30000 / api / v1 / customer

// this will send api request to the second node
curl 192.168.49.3:30000/api/v1/customer