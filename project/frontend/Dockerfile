FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the source code
COPY . .

EXPOSE 3000

# --host 0.0.0.0 is required so the dev server is reachable
# from outside the container (your browser on the host machine)
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
