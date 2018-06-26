#!/usr/bin/env bash
docker-compose -f docker-compose-build.yml up --build -d && \
docker system prune --volumes && \
mkdir services/move-nginx/build && \
cp -r services/react/build/client services/move-nginx/build && \
docker build -t trzl/portfolio:move-react.1 -f ./services/move-nginx/Dockerfile.prod ./services/move-nginx && \
docker push trzl/portfolio:move-react.1 && \
docker build -t trzl/portfolio:move-proxy.1 -f ./services/reverseproxy/Dockerfile ./services/reverseproxy && \
docker push trzl/portfolio:move-proxy.1 && \
docker-compose down && \
docker system prune --volumes && \
sudo rm -rf services/move-nginx/build && \
sudo rm -rf services/react/build/client && \
echo "Build complete!"