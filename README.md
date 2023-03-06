# React SPA for viewing and updating my job application statistics
While in the process of applying for jobs as a web developer I wondered how many people were actually clicking the links on my CV to the various projects I have made.
Some people say that a portfolio is of utmost importance, while others say that recruiters are unlikely to take anything but a cursory look at a candidate's code given the volume of applications they must read through.

To answer my question, instead of using Adobe Acrobat to insert a javascript into the pdf file of my CV I set up this simple API using Node, Express, Mongoose and MongoDB Atlas.
Now, all of the links in my CV lead to the different api routes which serve to log a click for each link. Each CV has a unique identifier so not only am I registering the date and number of clicks, but I also receive an email to notify me which employer clicked, along with other job details. When an API route is visited the database is updated, but instead of returning a response and notifying the user in the browser, they are redirected to the appropriate link as normal.

Visit the live version [here](https://click-stats.vercel.app/)
