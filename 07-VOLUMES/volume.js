// STEP 3 LOGIN TO YOUR MASTER NODE AND CHECLOUT THE LOG FOLDER
minikube ssh
cd var/log

// STEP 4 CREATE DECLARATION FILE FOR A HOSTPATH VOLUME
kubectl apply -f host-path-volume.yml

//STEP 5 LOGIN INTO THE POD AND CONFIRM THAT THE SAME SET OF FOLDERS IN THE NODE ARE ALSO PRESENT IN YOUR POD
kubectl exec -it host-path-7558fc34-fds8j -- sh
cd var/log


// STEP 6 LOGIN TO YOUR MASTER NODE AND CREATE A FILE THAT WILL BE SHARED ON VIA PERSISTENT VOLUME
minikube ssh
sudo mkdir /mnt/data
sudo sh - c "echo 'Hello PV & PVC - Kubernetes is Awesome' > /mnt/data/index.html"
cat /mnt/data/indexedDB.html

// STEP 7 REPLICATE THE SAME THING ON YOUR WORKER NODE
minikube ssh -n minikube-m02
sudo mkdir /mnt/data
sudo sh -c "echo 'Hello PV & PVC - Kubernetes is Awesome' > /mnt/data/index.html"
cat/mnt/data/index.html


// STEP 8 CREATE A MANIFEST THAT WILL CREATE A PERSISTENT VOLUME AND PERSISTENT VOLUME CLAIM
kubectl apply -f pv-pvc.yml
kubectl get pv
kubectl describe pv mypvc

// STEP 9 LOG INTO THE POD AND CHECK FOR THE VOLUME
kubectl exec -it pv-pvc7558fc34-fds8j -- sh 
ls 
cd usr/share/nginx/html
ls
cat index.html


// STEP 10 ADD A LOAD BALANCER SERVICE TO ACCESS THE VOLUME
kubectl apply - f pv-pvc.yml
kubectl get svc

// STEP 11 ADD A MINIKUBE TUNNEL TO ACCESS THE POD
minikube tunnel









// CREATE A FILE INSIDE THE POD
sudo touch foo.bar




// this will run a deployment along with a volume 
kubectl apply -f empty-dir-volume.yml


// this will show you the logs of a container within a pod
kubectl logs empty-dir-volume - 2edb12e -c one
// nothing will show up because theres no process running 

// this will delete a deployment
kubectl delete -f empty-dir-volume - 2edb12e


// this will log into the pod with container name one and check for the volume 
kubectl exec -it emptydir-volume-59695bdc66-cb799 -c one -- sh
kubectl exec -it emptydir-volume-59695bdc66-cb799 -c two -- sh

// edit bar.txt in container one and try accessing it in container 2
// create a new fille in container 2 then try accessing it in container 1 

// delete the pod and interactively log into the new pod



// VOLUME HOST PATH 
minikube ssh 

cd var/log

// describe the pod to see what the problem is
kubectl describe pod host-path-4e2w3e4r 


sudo mkdir /mnt/data 
sudo sh -c "echo '"