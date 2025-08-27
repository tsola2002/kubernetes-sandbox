// STEP 1 MAKE CHAGES TO THE HTML FOR VERSION 1 AND BUILD THE IMAGE
// this will build a docker image with a different tag from a dockerfile for us
docker image build -t omatsola-portfolio:v1 .
docker image build -t omatsola-portfolio:v2 .
docker image build -t omatsola-portfolio:v3 .


// STEP 2 TEST THE NEWLY GENERATED IMAGE BY RUNNING IT AS A DOCKER CONTAINER
docker run --name omatsola-container -d -p 8080:80 omatsola-portfolio:v1
docker run --name omatsola-container -d -p 8080:80 omatsola-portfolio:v2
docker run --name omatsola-container -d -p 8080:80 omatsola-portfolio:v3

// STEP 3 PUSH ALL 3 TAGS TO YOUR EXISTING DOCKER HUB IMAGE
docker tag omatsola-portfolio:v1 tsola2002/omatsolas-nginx-repo:v1
docker tag omatsola-portfolio:v2 tsola2002/omatsolas-nginx-repo:v2
docker tag omatsola-portfolio:v3 tsola2002/omatsolas-nginx-repo:v3

docker push tsola2002/omatsolas-nginx-repo:v1
docker push tsola2002/omatsolas-nginx-repo:v2
docker push tsola2002/omatsolas-nginx-repo:v3

//STEP 4 UPDATE YOUR DEPLOYMENT FILE TO READ YOUR NEW IMAGE TAG AND ADD ANNOTATIONS TO IT
kubectl apply -f rolling-update.yml

//STEP 5 this will display all previous deployment revisions
kubectl rollout history deployment personal


// this will deploy a rolling update for us
kubectl get pods -w

kubectl get pods

kubectl port-forward deployment/personal 8081:80 

// this will display all previous deployment revisions
kubectl rollout history deployment personal

// this will rollback to the previous deployment
kubectl rollout undo deployment personal

// this will rollback to specific version of your deployment revision
kubectl rollout undo deployment personal --to-revision=1

// this will give you information about a specific deployment
kubectl rollout undo deployment personal --revision=1

