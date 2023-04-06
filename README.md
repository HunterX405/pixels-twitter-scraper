This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Setup

## Install required packages

Run `npm install` to install the required packages for Next.js.<br/>
Run `pip install -r requirements.txt` to install the required packages for the python script.

## Running the server

To run the server with the cron job run `npm run build && npm run start-cron` using the terminal in the root directory of your project.

or run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Twitter API v2

## `Basic Plan` required for Twitter API v2

The Twitter API requires a `Basic Plan` that costs $100 to be able to search for tweets so make sure to upgrade your account to basic before using the Twitter API.

## Twitter API Credentials

To use the Twitter API functionality in this project, make sure to either change the credentials in the python script or create environment variables and pass them to the python script which is more secure.

These are the required Environment Variables to use the Twitter API:
```bash
TWITTER_ID=
TWITTER_SECRET=
NEXTAUTH_URL=`
NEXTAUTH_SECRET=
CONSUMER_KEY=
CONSUMER_SECRET=
ACCESS_KEY=
ACCESS_SECRET=
```

## Vercel

### Note: This website uses the Free Plan for the Twitter API so the python scripts that searches for tweets will not run or execute.
This project is deployed on Vercel. Click [here](https://pixels-twitter-scraper.vercel.app/) to access the website.

## Scraping Script

Click [here](./scrape.py) to view the scraping script written in Python.

## Cron Job Script

Click [here](./vercel-cron.js) to view the cron job script that runs the python script every 15 minutes.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
