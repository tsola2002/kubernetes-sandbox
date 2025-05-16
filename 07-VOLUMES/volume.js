// this will run a deployment along with a volume 
kubectl apply - f empty - dir - volume.yml


// this will show you the logs of a container within a pod
kubectl logs empty - dir - volume - 2edb12e - c one
// nothing will show up because theres no process running


// this will log into the pod with container name one and check for the volume 
kubectl exec -it empty-dir-volume-7dd565d64dd-mxrtm -c one -- sh
kubectl exec - it empty - dir - volume - 7dd565d64dd - mxrtm - c two-- sh

// edit bar.txt in container one and try accessing it in container 2
// create a new fille in container 2 then try accessing it in container 1 

// delete the pod and interactively log into the new pod



// VOLUME HOST PATH 
minikube ssh 

cd var/log

// describe the pod to see what the problem is
kubectl describe pod host - path - 4e2w3e4r 


sudo mkdir / mnt / data 
sudo sh -c "echo '"