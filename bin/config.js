module.exports = {
  port: {
    options: '-p, --port <o>',
    descriptor: 'set your server port',
    default: 8080,
    usage: 'myserver --port <o>',
  },
  dirctory: {
    options: '-d, --dirctory <d>',
    descriptor: 'set your server start dirctory',
    default: process.cwd(),
    usage: 'myserver --dirctory <d>',
  },
  cache: {
    options: '-c, --cache <c>',
    descriptor: 'set your server cache',
    default: 'no-cache',
  },
}
