import requests
import json
from requests.exceptions import RequestException
import tweepy
import os
from datetime import datetime, timedelta

# Twitter API credentials
consumer_key = os.getenv('CONSUMER_KEY')
consumer_secret = os.getenv('CONSUMER_SECRET')
access_token = os.getenv('ACCESS_KEY')
access_token_secret = os.getenv('ACCESS_SECRET')

# Pixels API endpoint
pixels_api = 'https://pixels-data.xyz/wen'

# Authenticate to Twitter API
auth = tweepy.OAuth1UserHandler(
    consumer_key, consumer_secret, access_token, access_token_secret)

# Create API object and set wait on rate limit.
api = tweepy.API(auth, wait_on_rate_limit=True)

# Search query
query = 'to:pixels_online OR #wenpixel'

# Get all replies to Pixels account or the hashtag #wenpixel sent 15 minutes before
try:
    time_threshold = datetime.utcnow() - timedelta(minutes=15)
    replies = tweepy.Cursor(api.search_tweets, q=query, tweet_mode='extended').items()
    for reply in replies:
        created_at = datetime.strptime(reply.created_at, '%a %b %d %H:%M:%S +0000 %Y')
        if created_at < time_threshold:
            break
        if hasattr(reply, 'in_reply_to_status_id_str'):
            user_id = reply.author.id_str
            tweet_id = reply.id_str
            print('Found reply tweet: ' + tweet_id)

            # Send POST request to Pixels API
            try:
                data = {'twitter_id': user_id, 'tweet_id': tweet_id}
                headers = {'Content-type': 'application/json'}
                response = requests.post(pixels_api, json=data, headers=headers)
                if response.status_code == 200:
                    print('POST request successful')
                else:
                    print('POST request failed')
            except RequestException as e:
                print('Error sending POST request: ' + str(e))

except tweepy.TweepError as e:
    print('Error retrieving replies: ' + str(e))