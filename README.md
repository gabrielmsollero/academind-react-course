# academind-react-course
My solution of the exercises proposed in the course [React - The Complete Guide 2023 (incl. React Router &amp; Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) by Maximilian Schwarzmüller and Academind.

I followed this course using Docker instead of downloading NodeJS to my machine, to exercise that too. If you have docker installed, just run the following in the repo's root folder:

```bash
docker build -t <image_name> . # run only once to create the image locally
docker container run --rm -it -v .:/usr/src/app -p 3000:3000 <image_name>
```

Then the react app should be available in port 3000 and change dynamically as you edit files.