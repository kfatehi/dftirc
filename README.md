# Dftirc

* Hangs out in IRC
* Provides an web-based API to announce things in IRC
  - Trello, Github, Bait
* Subscribes to Trello webhooks on bootup

# Config

Create a config.json file as such:

```javascript
{
  "irc": {
    "nick": "mybot",
    "server": "irc.myserver.net",
    "channels": ["#mychan"]
  },
  "web": {
    "port": 8888
  }
}
```
