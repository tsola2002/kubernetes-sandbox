//  MINIKUBE COMMANDS

// REPOSITORY LINK
https://github.com/tsola2002/kubernetes-sandbox.git



// KUBERNETES OFFICIAL PAGE 
https://kubernetes.io

// this will check whether minikube is installed
minikube version

// this will check whether check the status of your cluster
minikube status

// this will startup a cluster for you
minikube start

// this will stop a cluster
minikube stop 

// this will delete a cluster
minikube delete
    
// this will create another node
minikube node add 

// this will display the ip address of the cluster
minikube ip

// this will display the ip address of a particular node
minikube ip --node=m02

// this will check your kubectl version on your system
kubectl version --client

// this will show you all contexts of kubernetes clusters on your system
kubectl config get-contexts

// this will switch context to docker desktop version 
kubectl config use-context docker-desktop

// list all containers
docker container list--format "table {{.ID}\t{{.Names}}"

// this will get running pods
kubectl get pods
kubectl get pods -A


