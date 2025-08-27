// this will show you a list of pods
kubectl get pods



// this will show you a list of pods in all namespaces
kubectl get pods -A

// this will get a pod and output it as a wide format
kubectl get pod personal -o wide

// this will get a pod and output it as a yml file
kubectl get pod personal -o wide

// this will get a pod and output it as a json file
kubectl get pod personal -o json

// this will run a pod named (personal) via an imperative command 
kubectl run my-website \
--image=tsola2002/kube-image:latest \
--port=80

kubectl run my-website \
--image=nginx:latest \
--port=80

// THIS WILL WATCH THE POD AND MONITOR THE STATUS OF THE POD
kubectl get pods -w

// this will do port forwarding as a follow up to the imperative command
kubectl port-forward pod/my-website 8080:80

// this will give information about a specific pod
kubectl describe pod my-website

// this will run a pod using declarative command
kubectl apply -f pod.yml

// this will delete a pod 
kubectl delete pod personal
kubectl delete pod -f personal

// this will also delete a pod
kubectl delete -f pod.yml


// this will build a docker image from a dockerfile for us
docker image build . -t personal


// this will run a docker container from the custom image we generated
docker run--name personal - website - d - p 8080: 80 personal
docker run --name react-ctd -p 3000:3000 react-image

// setting up tags that will be pushed to docker hub
docker tag personal:latest tsola2002/kube-image:latest
docker tag react-image:latest tsola2002/kube-image:latest

// this will push our image to docker hub
docker push tsola2002/kube-image:latest

// this will run a pod named (personal) via an imperative command 
kubectl run personal \
--image=tsola2002/kube-image:latest \
--port=80 

// this will interactively log into a running pod 
kubectl exec -it hello-world --bash
kubectl exec -it hello-world --sh

// this will specify the container within the pod that you want to log in to
kubectl exec -it hello-world -c hello-world -- sh

// this will run a linux command as you log into the pod, then immediately logout of the container
kubectl exec  hello-world -- ps aux
kubectl exec -it hello-world --bash




 

// this will get everything in all namespaces
kubectl get all 
kubectl get all -A 

// this will retrieve pods in one particular namespace 
kubectl get pod -n kube-system 

// this will retrieve all namespaces
kubectl get namespaces 



// this will output your pod in yaml
kubectl get pod personal -o yaml
kubectl get pod personal -o json 

// DEGUGGING COMMADS

//this will get the logs for specific pod
kubectl logs personal

//this will get logs for a specific container within a pod 
kubectl logs personal -c personal

//this will get logs for a specific container within a pod 
kubectl logs personal -c ola-container

 