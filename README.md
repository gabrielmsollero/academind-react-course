# academind-react-course
My solution of the exercises proposed in the course [React - The Complete Guide 2023 (incl. React Router &amp; Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) by Maximilian Schwarzmüller and Academind.

Since this specific project, `17b-react-router-advanced`, requires an additional backend service, a [Dockerfile](https://github.com/gabrielmsollero/academind-react-course/blob/17b-react-router-advanced/backend/Dockerfile) for the backend app and a [compose](https://github.com/gabrielmsollero/academind-react-course/blob/17b-react-router-advanced/compose.yaml) file for running both services automatically were created. Therefore, in order to run this project the only command necessary is:

```bash
docker compose up
```