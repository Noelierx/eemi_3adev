# Use Procfile

For example in Procfile:
```
redis: redis-server
worker: bundle exec sidekiq
web: rails s
```

Put your command in the file as below:
```
<name of command>: <command(s) to execute>
```

## Execute Procfile
```
foreman start -f <Procfile>
```

### Install foreman (debian|ubuntu)
```
sudo apt install ruby-foreman
```