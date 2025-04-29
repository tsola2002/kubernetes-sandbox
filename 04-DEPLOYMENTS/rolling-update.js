// this will deploy a rolling update for us
kubectl apply - f rolling - update.yml 

kubectl get pods -w

kubectl get pods

kubectl port-forward deployment/personal 8081: 80 

// this will display all previous deployment revisions
kubectl rollout history deployment personal

// this will rollback to the previous deployment
kubectl rollout undo deployment personal

// this will rollback to specific version of your deployment revision
kubectl rollout undo deployment personal --to-revision=1

// this will give you information about a specific deployment
kubectl rollout undo deployment personal --revision=1

