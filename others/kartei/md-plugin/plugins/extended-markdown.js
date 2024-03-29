init((plugin, theme) => {
  const MdPlugin = require("plugin:md");

  MdPlugin("extended_markdown").addRules([
    ["#{6}\\s?(([^\n]+)?\\s)#{6}(?:\\n|$)", "<divider><h6>$2</h6></divider>"],
    ["#{5}\\s?(([^\n]+)?\\s)#{5}(?:\\n|$)", "<divider><h5>$2</h5></divider>"],
    ["#{4}\\s?(([^\n]+)?\\s)#{4}(?:\\n|$)", "<divider><h4>$2</h4></divider>"],
    ["#{3}\\s?(([^\n]+)?\\s)#{3}(?:\\n|$)", "<divider><h3>$2</h3></divider>"],
    ["#{2}\\s?(([^\n]+)?\\s)#{2}(?:\\n|$)", "<divider><h2>$2</h2></divider>"],
    ["#{1}\\s?(([^\n]+)?\\s)#{1}(?:\\n|$)", "<divider><h1>$2</h1></divider>"],
//     ["@(\\w+)", `<span style="color:${theme.palette.primary.main};">@$1</span>`]
  ]);
});
