## Readme for EZCOOKFOR.ME

##### Hint: Open the `README.md` on our repositories for best viewing experience.

Repositories:

- [Front End](https://github.com/idahdam/ezcookforme-frontend)
- [Back End](https://github.com/idahdam/ezcookforme-backend)


## What is EZCOOKFORME?

EZCOOKFORME is a website built by homecooks to inspire other homecooks on cooking by yourself is as easy as lifting your finger.

Contributors:
- Ahmad Fakhri Mirfananda
- Anathapindika Muliawan
- Fatma Putri Ramadhani
- Muhammad Hadi


Tech Stack Used (PERN Stack):
- PostgreSQL 
- Express.js
- React.js
- Node.js
- Cloudinary (bucket for image uploads)
- Auth0 (for admin privilege)

PostgreSQL is deployed at EC2 AWS, back end at Heroku, and front end at Vercel.

For list of packages used, take a look at
`package.json` for each repository.

## How to install

Assuming you want to run the application locally, follow these instructions.

1. Clone from Front End and Back End repository listed above using git with command:

`git clone [Front End]`

`git clone [Back End]` 

2. After you're done, change directory with format
`ezcookforme-[frontend/backend]`

`cd [directory]`

3. To install all dependencies, use command:

`npm i`

4. For testing purposes, .env is given in the given zip.
Put .env file in each of the `/src` make sure you put them accordingly. 

5. Start both programs using

`npm start`

6. Happy cooking! 😋

**notes**

1. This `README.md` is a modified version of the default create-react-app README.md. For the default README.md, you can visit create-react-app official Github repository [here](https://github.com/facebook/create-react-app).

2. Auth0 callback URL is currently redirecting to https://ezcookfor.me, if you're running locally, most likely you won't be able to go to the admin page. Contact me for changing the callback URL of the Auth0. 


Best Regards,

EZCOOKFORME team

**Nilainya jangan aneh2 ya aslab:(
    jangan susah2 juga kuisnya:)** -3A
