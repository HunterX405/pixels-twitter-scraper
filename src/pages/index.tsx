import Layout from "../components/layout"

export default function IndexPage() {
  return (
    <Layout>
      <h1>Pixels Twitter Reply and Hashtag Scraper</h1>
      <p>This website is made using Next.js.</p>
      <p>This website connects to Twitter API and gets/scrapes the replies from the Official Pixels Account @pixels_online and the hashtag #wenpixel within the last 15 minutes using Python.</p>
      <p>It then sends a POST request for every tweet that meets the requirements to https://pixels-data.xyz/wen every 15 minutes via cron job.</p>
    </Layout>
  )
}
