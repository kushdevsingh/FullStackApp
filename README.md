# FullStackApp

![screenshot](https://github.com/kushdevsingh/FullStackApp/blob/master/fullStackApp.PNG)

> Full Stack Application using (Vue,Vue-BootStrap,VueRouter,AXIOS,Spring Boot) Webpack/Maven

## Frontend Build Setup

``` bash
# Change Directory frontend
cd frontend

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
## Run App (Maven Build)

``` bash
# Change Directory root ( in our case it is FullStackApp)
cd FullStackApp 

# maven clean
mvn clean install

# maven run
mvn --projects=backend spring-boot:run

![screenshot](https://github.com/kushdevsingh/FullStackApp/blob/master/mvn-Run.PNG)




