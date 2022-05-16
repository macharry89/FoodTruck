# FoodTruck List in San Francisco

## Structure
This app consists of three services, and each service is dockerized.

1. API

  Which one is fetching the food truck data from [here](https://data.sfgov.org/api/views/rqzj-sfat/rows.csv) and serve.
  
  Technologies: 
  - Node.js
  - Express
  - Typescript

2. UI

  Which one is showing the food truck data user-frendly.
  
  Technologies: 
  - React
  - Tailwindcss
  - Vite
  
3. Nginx

## Structure
Before deployment on your server, make sure the docker-compose is running on your host machine.

```
git clone https://github.com/macharry89/FoodTruck.git

cd FoodTruck

docker-compose up -d --build
```

That's all, enjoy!
