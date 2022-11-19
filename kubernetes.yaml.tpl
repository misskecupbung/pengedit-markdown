apiVersion: apps/v1
kind: Deployment
metadata:
  name: pengedit-md
  labels:
    app: pengedit-md
spec:
  replicas: 1
  selector:
    matchLabels:
      app: pengedit-md
  template:
    metadata:
      labels:
        app: pengedit-md
    spec:
      containers:
      - name: pengedit-md
        image: us-central1-docker.pkg.dev/GOOGLE_CLOUD_PROJECT/pengedit-md/pengedit-md:COMMIT_SHA
        ports:
        - containerPort: 3000
---
kind: Service
apiVersion: v1
metadata:
  name: pengedit-md
spec:
  selector:
    app: pengedit-md
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000
  type: LoadBalancer
