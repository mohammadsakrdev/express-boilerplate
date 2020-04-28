git fetch --all
git pull
sudo docker container rm --force backend-api
sudo docker build -t backend-api .
sudo docker run --rm  -d --network host -p 3000:3000 --name backend-api backend-api