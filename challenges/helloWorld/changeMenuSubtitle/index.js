const spec = require('./spec')

module.exports = (props) => {
  return {
    id: 'changeMenuSubtitle',
    index: 2,
    title: 'Define your page and add a subtitle for the menu',
    instructions: `Let's edit the menu subtitle. In order to do that, you need to open the chunks folder and take a look at the intro folder.`,
    help: `Tap the 'open file' button and open the chunks/intro/chunk.json file`,
    files: ['chunks/intro/chunk.json']
  }
}
