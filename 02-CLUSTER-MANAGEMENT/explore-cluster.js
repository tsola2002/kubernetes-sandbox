// this will list all node in tyour cluster
kubectl get nodes

// this will log you into your master node
minikube ssh 

// this will log you out of the node
logout

// this will create another node
minikube node add 


// this will show the logs of all the nodes in your cluster
minikube logs

// this will show the logs for one particular node
minikube logs --node=m02

// this will get all kubernetes objects in all namespaces
kubectl get all

// this will get all pods within one particular namespace
kubectl get pod -n kube-system

// this will get all kubernetes objects within one namespace
kubectl get all -n kube-system

// this will display all namespaces in your cluster
kubectl get ns


