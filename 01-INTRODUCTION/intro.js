//  MINIKUBE COMMANDS

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

// this will show you all contexts of kubernetes clusters on your system
kubectl config get-contexts

// this will switch context to docker desktop version 
kubectl config use-context docker-desktop

// list all containers
docker container list--format "table {{.ID}\t{{.Names}}"

// this will get running pods
kubectl get pods
kubectl get pods - A


