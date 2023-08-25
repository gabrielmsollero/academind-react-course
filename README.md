# academind-react-course
My solution of the exercises proposed in the course [React - The Complete Guide 2023 (incl. React Router &amp; Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) by Maximilian Schwarzmüller and Academind.

I followed this course using Docker instead of downloading NodeJS to my machine, to exercise that too. If you have docker installed, just run the following in the repo's root folder:

```bash
docker container run --rm -it -p 3000:3000 gabrielmsollero/react-course:<branch_name>
```

Thanks to Github Actions, I've created the [CI Workflow](https://github.com/gabrielmsollero/academind-react-course/blob/main/.github/workflows/ci.yml) which builds a new image for every new branch or whenever package*.json files are changed. The image is then pushed to my [react-course](https://hub.docker.com/repository/docker/gabrielmsollero/react-course) repository in Dockerhub, tagged with the name of the corresponding branch.

For development, you should consider running the following:

```bash
docker container run --rm -it -p 3000:3000 \
                     -v ./src:./src \
                     -v ./public:./public \
                     gabrielmsollero/react-course:<branch_name>
```

By running the container this way, the react app should change dynamically as you edit files.