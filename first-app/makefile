local-push: ## Push image to local minikube
	minikube image load first-app:${API_IMAGE_TAG}
	minikube image load first-app:latest

local-deploy: ## Deploy application to local minikube
	kubectl apply -f=k8s/api-deployment.yaml

local-set-image: ## Set the image to the deployment container
    kubectl set image deployment/first-app first-app=first-app:${API_IMAGE_TAG}

local-expose: ## Expose service endpoint accessible via port-forward
	kubectl port-forward --address 0.0.0.0 service/first-app 3000

local-delete: ## Delete application from local minikube
	kubectl delete -f=k8s/api-deployment.yaml