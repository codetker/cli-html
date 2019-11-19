const compose = require('compose-function');
const blockTag = require('../tag-helpers/blockTag');
const inlineTag = require('../tag-helpers/inlineTag');
const boxen = require('boxen');
const ansiStyles = require('ansi-colors');

const block = blockTag();

const inline = inlineTag();

const blockWithNewlines = blockTag(
  compose(
    (value) => `${value}`,
  ), { pre: '\n\n', post: '\n\n' },
);

const title = blockTag(
  compose(
    (value) => `${boxen(ansiStyles.blue.bold(value), {
      padding: {
        top: 0,
        bottom: 0,
        left: 4,
        right: 4,
      },
      borderColor: 'gray',
      borderStyle: 'bold',
    })}`,
  ), { pre: '\n\n', post: '\n\n' },
);


module.exports.title = title;

module.exports.span = inline;
module.exports.label = inline;
module.exports.abbr = inline;
module.exports.data = inline;

module.exports.p = blockWithNewlines;

module.exports.div = block;
module.exports.head = block;
module.exports.header = block;
module.exports.article = block;
module.exports.footer = block;
module.exports.section = block;
module.exports.main = block;
module.exports.nav = block;
module.exports.aside = block;
module.exports.form = block;